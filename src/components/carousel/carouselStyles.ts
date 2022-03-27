import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    bullet: {
        backgroundColor: Colors.White,
        borderRadius: wp('4%'),
        height: wp('2%'),
        width: wp('2%'),
    },
    cardContainer: {
        backgroundColor: Colors.PrimaryColor,
        borderRadius: wp('3%'),
        height: hp('54%'),
        width: wp('95%'),
    },
    cardMainContainer: {
        alignItems: 'center',
        height: hp('60%'),
        marginStart: wp('2.5%'),
        width: wp('95%'),
    },
    carouselContentContainer: {
        paddingHorizontal: '10%',
    },
    cardTitleText: {
        color: Colors.White,
        fontSize: wp('8.5%'),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentCardText: {
        color: Colors.White,
        fontSize: wp('4.3%'),
    },
    contentCardGeneral: {
        flexDirection: 'row',
        marginStart: wp('1.5%'),
    },
    contentRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: hp('3.5%'),
    },
    circleIndicator: {
        backgroundColor: Colors.White,
        borderRadius: wp('2%'),
        height: wp('4.5%'),
        marginHorizontal: wp('2%'),
        width: wp('4.5%'),
    },
    circleIndicatorBold: {
        backgroundColor: Colors.PrimaryColor,
        borderRadius: wp('2%'),
        height: wp('4.5%'),
        marginHorizontal: wp('2%'),
        width: wp('4.5%'),
    },
    cardIndicator: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('2%'),
        width: '100%',
    },
    image: {
        height: hp('20%'),
        width: '100%',
    },
    imageIndicator: {
        height: hp('20%'),
        width: wp('100%'),
    },
    mainContainerCarousel: {
        marginTop: hp('2%'),
    },
    mainContainerCarouselContent: {
        paddingEnd: wp('2%'),
    },
    mainContainer: {
        marginTop: hp('2%'),
    },
    secondTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
        textAlign: 'center',
    },
    secondTitleText: {
        color: Colors.White,
        fontSize: wp('8%'),
        fontWeight: 'bold',
    },
    secondTitleTextBold: {
        color: Colors.PrimaryColor,
        fontSize: wp('8%'),
        fontWeight: 'bold',
    },
});
