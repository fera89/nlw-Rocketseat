import { Image, Text, View } from "react-native"
import { Step } from "../step"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

import { stl } from "./styles"
import { colors } from "@/src/styles/theme"

export function Steps() {
    return (
        <View style={stl.container}>
            
        <Text>Veja como funciona:</Text>

        <Step icon={IconMapPin} title ="Encontre estabelecimentos" description="Veja locais perto de você que são parceiros Nearby"/>

        <Step icon={IconQrcode} title ="Ative o cupom com QR Code" description="Escaneia o código no estabelecimento para usar o benefício."/>

        <Step icon={IconTicket} title ="Encontre estabelecimentos" description="Veja locais perto de você que são parceiros Nearby"/>
        </View>
)}