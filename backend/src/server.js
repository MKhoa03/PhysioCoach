import express from "express";
import { ENV } from "./config/env.js";
import { pool} from "./db.js";
import cors from "cors";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = ENV.PORT || 3002;

//video
app.use("/videos", express.static(path.join(__dirname, "../videos")));

app.get("/api/videoExercises", async (req, res) => {
    const result = await pool.query("SELECT * FROM videoExercises");
    res.json(result.rows);
});


//Datenbank verbindung
pool.connect()
    .then(() => console.log("Mit PostgreSQL verbunden"))
    .catch((err) => console.error("Verbindung fehlgeschlagen:", err));

//Middleware
    app.use(express.json());
    app.use(cors());


//Healthchek
app.get("/api/health", (req, res) =>{
    res.status(200).json({ success: true});
})

//Routes
app.post("/api/users/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
        );

        res.status(201).json({success: true, user: result.rows[0]});
    } catch(err){
        console.log( err);
        res.status(500).json({error: "Fehler beim Speichern des Users"});
    }
});

app.post("/api/users/login", async (req, res) => {
    const {email, password} = req.body

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1 AND password = $2",
            [email,password]
        );

    if (result.rows.length === 0){
        return res.status(401).json({error: "Ungültige Email oder Passwort"});
    }

    const user = result.rows[0];

    res.status(200).json({success: true, user});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Serverfehler"});
    }
});

app.post("/api/users/request-password-reset", async (req, res) => {
    const { email } = req.body;

    try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const users = result.rows;

    if (users.length === 0) {
        return res.json({ success: false, message: "Email nicht gefunden" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 1000 * 60 * 15);
    const expiresISOString = expires.toISOString();

    await pool.query(
        "UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE email = $3",
        [token, expiresISOString, email]
    );

    await sendResetEmail(email, token);

    res.json({ success: true, message: "Reset-Link wurde verschickt" });

    } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Serverfehler" });
    }
});


app.post("/api/users/reset-password", async (req, res) => {
    const { token, password } = req.body;

    try {
    const result = await pool.query(
        "SELECT * FROM users WHERE reset_token = $1 AND reset_token_expires > NOW()",
        [token]
    );

    if (result.rows.length === 0) {
        return res.status(400).json({ error: "Token ungültig oder abgelaufen" });
    }

    const user = result.rows[0];

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
        "UPDATE users SET password=$1, reset_token=NULL, reset_token_expires=NULL WHERE id=$2",
        [hash, user.id]
    );

    res.json({ success: true, message: "Passwort geändert" });
    } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Fehler" });
    }
});

//Email
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASS,
    },
});

export async function sendResetEmail(to, token) {
    const webUrl = `http://192.168.0.134:3002/resetpassword?token=${token}`;

    await transporter.sendMail({
    from: `"Physio App" <${ENV.EMAIL_USER}>`,
    to,
    subject: "Passwort zurücksetzen",
    html: `<p>Klicke hier, um dein Passwort zurückzusetzen:</p>
            <a href="${webUrl}">Passwort zurücksetzen</a>`
    });
}


app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});