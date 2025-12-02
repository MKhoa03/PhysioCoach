import express from "express";
import { ENV } from "./config/env.js";
import { pool} from "./db.js";
import cors from "cors";

const app = express();
const port = ENV.PORT || 3002;


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



app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});