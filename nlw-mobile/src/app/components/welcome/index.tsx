import { Image, Text, View } from "react-native"

import { stl } from "./styles"
import { colors } from "@/src/styles/theme"

export function Welcome() {
    return <View>
        <Image source={require("../../../assets/logo.png")} style={stl.logo} />
        <Text style={stl.title}> Boas Vindas ao Nearby!</Text>
        <Text style={stl.subtitle}> Tenha cupons de vatagem para usar em seus {"\n"}estabelecimentos favoritos.</Text>
    </View>
};