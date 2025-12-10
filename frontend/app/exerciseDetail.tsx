import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { globalStyles, colors } from "../theme";
import { hp, wp } from "../theme/responsive";
import { Ionicons } from "@expo/vector-icons";
// import { Video, ResizeMode } from "expo-av"; <- später für Video

export default function ExerciseDetail() {
  const { title, duration, description /*, video */ } = useLocalSearchParams();

  return (
    <SafeAreaView style={[globalStyles.container, { paddingHorizontal: wp(5) }]}>
      <ScrollView>

        <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
            <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
        </TouchableOpacity>
      
        {/* Titel */}
        <View style={[globalStyles.titleContainer, { marginTop: hp(2), alignItems: 'center' }]}>
          <Text style={globalStyles.title}>{title}</Text>
        </View>

        {/* Video */}
        <View style={globalStyles.card}>
          <View style={globalStyles.cardForeground}>
            <Text style={[globalStyles.card, { padding: 120 }]}>Video kommt später...</Text>

            {description && (
              <Text style={[globalStyles.text, { marginTop: hp(5), marginHorizontal: wp(6), textAlign: 'center' }]}>
                Beschreibung:{"\n"}{description}
              </Text>
            )}

            {duration && (
              <Text style={[globalStyles.text, { margin: hp(4), textAlign: 'center' }]}>
                Dauer: {duration}
              </Text>
            )}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
