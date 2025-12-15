import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { globalStyles, colors } from "../theme";
import { hp, wp } from "../theme/responsive";
import { Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import * as ScreenOrientation from 'expo-screen-orientation';



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
          <Video
            source={{ uri: `http://192.168.0.134:3002/videos/knie.mp4` }}
            style={{ width: '100%', height: 200 }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            onFullscreenUpdate={async ({ fullscreenUpdate }) => {
              if (fullscreenUpdate === 0) {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
              } else if (fullscreenUpdate === 2) {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
              }
            }}
          />

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
