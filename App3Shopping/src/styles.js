import { StyleSheet, Platform } from 'react-native'


export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const commonStyles = StyleSheet.create({
    screenContainer: {
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    sceenTitle: {

        fontSize: 20,
        color: primaryColorRed,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 7,

    },
    button: {
        backgroundColor: primaryColorRed,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,

    }
})