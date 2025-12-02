import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../theme";
import { exercises } from "../../data/exercises";
import { useRouter } from "expo-router";
import { wp, hp } from "../../theme/responsive";

export default function SchulternArme() {
    
    const router = useRouter();
    const list = exercises.filter(ex => ex.area === "schultern-arme");

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(18) }}>

                <Text style={[ globalStyles.title, {margin: wp(4), textAlign: 'center'} ]}>Ergebnisse für {"\n"} &quot;Schultern & Arme&quot;</Text>

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
                        <View style={[globalStyles.cardForeground, { alignItems: 'center' }]}>
                            <Text style={globalStyles.heading}>{exercise.title}</Text>

                            <Image
                                source={exercise.thumbnail ? exercise.thumbnail : require('../../assets/images/placeholder.png')}
                                style={{ width: wp(40), height: hp(15), borderRadius: 10, marginVertical: hp(5) }}
                            />

                            <Text style={[globalStyles.text, { marginTop: hp(5), marginHorizontal: wp(6), textAlign: 'center' }]}>Beschreibung:{"\n"}{exercise.description}</Text>

                            <Text style={[globalStyles.text, { margin: hp(4), textAlign: 'center' }]}>Dauer: {exercise.duration}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={{ height: 70, backgroundColor: colors.background }} />
        </SafeAreaView>
    );
}
