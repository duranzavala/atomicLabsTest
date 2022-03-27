import React, { useRef } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import Styles from '@Home/styles/homeStyles';
import { Images } from '@Assets/index';
import CarouselComponent from '@Components/carousel/carouselComponent';
import Constants from '@Utils/constants';
import TeamComponent from '@Components/team/teamComponent';
import FooterComponent from '@Components/footer/footerComponent';
import WorkWithUsComponent from '@Components/workWithUs/workWithUsComponent';
import WelcomeComponent from '@Components/welcome/welcomeComponent';

const HomeComponent: React.FC = () => {
    const scrollRef = useRef<ScrollView>(null);
    
    const handleOnScrollToInformation = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                y: 920,
                animated: true,
            });
        }
    };

    const handleOnPressBePartOf = () => {
        // navigate to form...
    };

    return (
        <ImageBackground
            source={Images.HomeBackground}
            style={Styles.backgroundImage}
        >
            <ScrollView
                ref={scrollRef}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <WelcomeComponent
                    handleOnPressBePartOf={handleOnPressBePartOf}
                    handleOnScrollToInformation={handleOnScrollToInformation}
                />
                <CarouselComponent items={Constants.CarouselItems} />
                <WorkWithUsComponent handleOnPressBePartOf={handleOnPressBePartOf} />
                <TeamComponent />
                <FooterComponent />
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeComponent;
