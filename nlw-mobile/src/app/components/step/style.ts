import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/src/styles/theme"

export const stl = StyleSheet.create({
    container: {
        width: "100%",
        gap: 16,
        flexDirection: "row",
    },

    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],

    },

    description: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 4,
    }
    
})