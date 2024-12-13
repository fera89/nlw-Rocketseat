import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/src/styles/theme"

export const stl = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 56,
        height: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14,


    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize:16,
    }
})