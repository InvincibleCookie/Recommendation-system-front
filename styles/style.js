import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'cs-black',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'os-semibold',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'os-regular',
    },
    link: {
        fontSize: 18,
        color: '#DE8370',
        fontFamily: 'cs-black',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    input: {
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#25153A',
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 11,
    },
    focusedInput: {
        borderWidth: 1,
        borderColor: '#D18CEC',
    },
    bgImg: {
        flex: 1,
    },
    loginForm: {
        display: 'flex',
        alignItems: 'center',
        gap: 30,
    },
    button: {
        width: 350,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
})