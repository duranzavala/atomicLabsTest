import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Styles from '@Components/carousel/carouselStyles';

export interface ICarouselContent {
    text: string;
    isBold?: boolean;
}

export interface ICarouselItem {
    uri: any;
    title: string;
    content: ICarouselContent[][];
    footerIndicator: number;
}

interface Props {
    handleOnSavePositionY: (posY: number) => void;
    items: ICarouselItem[];
}

const CarouselComponent: React.FC<Props> = ({ handleOnSavePositionY, items }) => {
    const renderCarouselContent = (content: ICarouselContent[], index: number) => (
        <View key={`MainContent-${index}`} style={Styles.contentRow}>
            <View style={Styles.bullet} />
            <Text style={Styles.contentCardGeneral}>
                {content.map((itemContent: ICarouselContent, index: number) => (
                    <Text
                        key={`Content-${index}`}
                        style={[
                            Styles.contentCardText,
                            { fontWeight: itemContent.isBold ? 'bold' : 'normal' }
                        ]}
                    >
                        {`${itemContent.text} `}
                    </Text>
                ))}
            </Text>
        </View>
    );

    const renderCard = (item: ICarouselItem, index: number) => (
        <View key={`${index}-${item.title}`} style={Styles.cardMainContainer}>
            <View style={Styles.cardContainer}>
                <Image
                    resizeMode='contain'
                    style={Styles.image}
                    source={item.uri}
                />
                <Text style={Styles.cardTitleText}>{item.title}</Text>
                <View style={Styles.carouselContentContainer}>
                    {item.content.map(renderCarouselContent)}
                </View>
            </View>
            <View style={Styles.cardIndicator}>
                <View style={[Styles.circleIndicator, item.footerIndicator === 1 ? Styles.circleIndicatorBold : {} ]}/>
                <View style={[Styles.circleIndicator, item.footerIndicator === 2 ? Styles.circleIndicatorBold : {} ]}/>
                <View style={[Styles.circleIndicator, item.footerIndicator === 3 ? Styles.circleIndicatorBold : {} ]}/>
            </View>
        </View>
    );

    return (
        <View
            onLayout={(event) =>{
                const layout = event.nativeEvent.layout;
                handleOnSavePositionY(layout.y);
            }}
            style={Styles.mainContainer}
        >
            <Text style={Styles.secondTitleContainer}>
                <Text style={Styles.secondTitleText}>SOMOS EL BRAZO DERECHO</Text>
                <Text style={Styles.secondTitleTextBold}> DE LA TECNOLOGÍA</Text>
            </Text>
            <ScrollView
                horizontal
                bounces={false}
                style={Styles.mainContainerCarousel}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={Styles.mainContainer}
            >
                {items.map(renderCard)}
            </ScrollView>
        </View>
    );
};

export default CarouselComponent;
