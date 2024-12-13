import { Image, Text, View } from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import { stl } from "./style"
import { colors } from "@/src/styles/theme"

type Props = {
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: Props) {
    return (
    <View style={stl.container}>
        {Icon && <Icon size={32} color={colors.red.base} />}

        <View style={{flex: 1,}}>
            <Text style={stl.title}>{title}</Text>
        <Text style={stl.description}>{description}</Text>
    </View>
    </View>
)}