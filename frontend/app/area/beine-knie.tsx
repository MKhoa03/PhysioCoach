import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../theme";
import { router } from "expo-router";
import { hp, wp } from "../../theme/responsive";

export default function BeineKnie() {
    
    // Beispiel-Übungen (ohne Video)
    const exercises = [
        {
            title: "Knie Mobilisation",
            duration: "6 Min",
            thumbnail: require("../../assets/images/placeholder.png")
        },
        {
            title: "Oberschenkel-Dehnung",
            duration: "4 Min",
            thumbnail: require("../../assets/images/placeholder.png")
        },
    ];

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(18) }}>

                {/* Titel */}
                <View style={[globalStyles.titleContainer, { alignItems: "center", marginLeft: 0 }]}>
                    <Text style={globalStyles.title}>Videos zu &quot;Beine & Knie&quot;</Text>
                </View>

                {/* Übungen */}
                {exercises.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                    onPress={() =>
                    router.push({
                        pathname: "/exerciseDetail",
                        params: { title: item.title, duration: item.duration },
                    })
                    }
                    >
                        <View style={globalStyles.card}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: wp(4) }}>
                                
                                <Image
                                source={item.thumbnail}
                                style={{
                                    width: wp(25),
                                    height: hp(12),
                                    borderRadius: 10,
                                }}
                                />

                                <View style={{ flex: 1 }}>
                                    <Text style={globalStyles.heading}>{item.title}</Text>
                                    <Text style={globalStyles.text}>{item.duration}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={{ height: 70, backgroundColor: colors.background }} />
        </SafeAreaView>
    );
}