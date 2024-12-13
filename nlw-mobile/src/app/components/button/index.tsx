import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator} from "react-native"

import { stl } from "./styles"
import { colors } from "@/src/styles/theme"
import { isLoading } from "expo-font"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"


type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

export function Button( { children, style, isLoading = false, ...rest }: ButtonProps ) {
    return (
    <TouchableOpacity 
        style={[stl.container, style]}
        disabled={isLoading}
        {...rest}
        > 
        { isLoading ? (
            <ActivityIndicator size="small" color={colors.gray[100]}/>
         ) : (

              children
        )}
        
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps) {
    return <Text style={stl.title}>{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}
function Icon({ icon: Icon} : IconProps){
    return <Icon size={24} color={colors.gray[100]}/>
}


Button.Title = Title
Button.Icon = Icon