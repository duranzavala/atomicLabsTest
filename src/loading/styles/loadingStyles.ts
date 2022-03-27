import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    activityIndicator: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: hp('100%'),
        position: 'absolute',
        width: wp('100%'),
        zIndex: 1,
    },
    mainContainer: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: hp('100%'),
        position: 'absolute',
        width: wp('100%'),
        zIndex: 1,
    },
});
