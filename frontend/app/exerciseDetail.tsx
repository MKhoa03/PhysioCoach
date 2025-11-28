import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { globalStyles } from "../theme";

export default function ExerciseDetail() {
  const { title, duration } = useLocalSearchParams();

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{title}</Text>
      </View>

      <Text style={globalStyles.text}>Dauer: {duration}</Text>

      {/* Platzhalter – später kommt hier das Video */}
      <View
        style={{
          marginTop: 30,
          height: 200,
          backgroundColor: "#ddd",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ opacity: 0.6 }}>Video kommt später...</Text>
      </View>
    </SafeAreaView>
  );
}