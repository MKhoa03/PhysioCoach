import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../theme";
import { exercises, Exercise } from "../../data/exercises";
import { wp, hp } from "../../theme/responsive";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Favorites() {
  const router = useRouter();

  // Beispiel: IDs der favorisierten Übungen (später dynamisch aus AsyncStorage oder State)
  const favoriteIds = ["r1", "s1"]; 

  // Favoriten aus exercises filtern
  const favoriteExercises: Exercise[] = exercises.filter(ex => favoriteIds.includes(ex.id));

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

        <View style={{ alignItems: "center", marginBottom: hp(2) }}>
          <Text style={[globalStyles.title, { marginLeft: wp(2) }]}>Favoriten</Text>
        </View>

        {favoriteExercises.length === 0 ? (
          <View style={{ alignItems: "center", marginTop: hp(5) }}>
            <Text style={globalStyles.text}>Keine Favoriten gespeichert...</Text>
          </View>
        ) : (
          favoriteExercises.map((exercise) => (
            <TouchableOpacity
              key={exercise.id}
              style={globalStyles.card}
              onPress={() =>
                router.push({
                  pathname: "/exerciseDetail",
                  params: {
                    title: exercise.title,
                    duration: exercise.duration,
                    thumbnail: exercise.thumbnail,
                    description: exercise.description,
                  },
                })
              }
            >
              <View style={[ globalStyles.cardForeground, { flex: 1, alignItems: "center", paddingVertical: hp(2) },]}>

                <Text style={globalStyles.heading}>{exercise.title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={
                        exercise.thumbnail
                            ? exercise.thumbnail
                            : require("../../assets/images/placeholder.png")
                        }
                        style={{ width: wp(25), height: hp(10), borderRadius: 10, marginRight: wp(4) }}
                        resizeMode="cover"
                    />
                    <Text style={globalStyles.text}>Dauer: {exercise.duration}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <View style={{ height: 70, backgroundColor: colors.background }} />
    </SafeAreaView>
  );
}