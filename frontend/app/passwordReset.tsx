import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { API_URL } from '../config';


export default function passwordReset(){
    
    const { token } =useLocalSearchParams();
    const[newPassword, setNewPassword] = useState("");

    const handleReset = async() => {
        const res = await fetch (`${API_URL}/api/users/reset-password`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token, password: newPassword})
        });

        const data = await res.json();

        if(res.ok){
            alert("Password wurde geändert!");
        } else {
            alert(data.error);
        }
    };

    return (
        <View>
            <Text>Neues Passwort</Text>
            <TextInput value={newPassword} onChangeText={setNewPassword} />
            <Button title="Speichern" onPress={handleReset} />
        </View>
    );
}