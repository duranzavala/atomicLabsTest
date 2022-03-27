import Colors from '@Utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.PrimaryColor,
        height: '5%',
        justifyContent: 'center',
        marginTop: '5%',
        width: '40%',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: Colors.White,
        color: Colors.PrimaryColor,
        height: '5%',
        marginTop: '5%',
        paddingStart: '2%',
        width: '60%',
    },
})