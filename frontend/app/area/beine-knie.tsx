import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../theme";
import { exercises } from "../../data/exercises";
import { useRouter } from "expo-router";
import { wp, hp } from "../../theme/responsive";
import { Ionicons } from "@expo/vector-icons";

export default function BeineKnie() {
    
    const router = useRouter();
    const list = exercises.filter(ex => ex.area === "beine-knie");

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

                <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2), marginBottom: wp(3) }}>
                    <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
                </TouchableOpacity>
                
                <View style={{ alignItems: "center", marginBottom: hp(2) }}>
                    <Text style={[globalStyles.title, { marginLeft: wp(2) }]}>Beine & Knie</Text>
                </View>

                {list.map((exercise) => (
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
                ))}


            </ScrollView>
        </SafeAreaView>
    );
}