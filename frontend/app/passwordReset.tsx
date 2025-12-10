import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, globalStyles } from '../theme';
import { wp, hp } from '../theme/responsive';
import { API_URL } from '../config';
import { useRouter } from "expo-router";

export default function passwordReset(){
    const router = useRouter();
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
            router.push("/login");
        } else {
            alert(data.error);
        }
    };

    return (
        <View style={globalStyles.container}>
        <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>Neues Passwort</Text>
            <Text style={globalStyles.subtitle}>
            Gib dein neues Passwort ein, um die Anmeldung fortzusetzen
            </Text>
        </View>

        {/* === Passwort Eingabe === */}
        <View style={globalStyles.card}>
            <View style={globalStyles.cardForeground}>
            <View style={globalStyles.inputContainer}>
                <Ionicons
                name='lock-closed'
                size={25}
                color={colors.icon.decorative}
                style={{ marginLeft: wp(3) }}
                />
                <TextInput
                placeholder='Neues Passwort'
                placeholderTextColor={colors.text.body}
                style={globalStyles.textInput}
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
                />
            </View>
            </View>
        </View>

        {/* === Passwort speichern Button === */}
        <TouchableOpacity
            style={[globalStyles.button, { marginTop: hp(5) }]}
            onPress={handleReset}
        >
            <Text style={globalStyles.buttonText}>Speichern</Text>
        </TouchableOpacity>
        </View>
    );
}