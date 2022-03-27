import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import Styles from '@Home/styles/homeStyles';
import { Images } from '@Assets/index';
import CarouselComponent from '@Components/carousel/carouselComponent';
import Constants from '@Utils/constants';
import TeamComponent, { ITeamMember } from '@Components/team/teamComponent';
import FooterComponent from '@Components/footer/footerComponent';
import WorkWithUsComponent from '@Components/workWithUs/workWithUsComponent';
import WelcomeComponent from '@Components/welcome/welcomeComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams, Screens } from '@Navigation/root';
import FetchTeamObservable, { IFetchTeamResponse } from '@Home/observables/fetchTeamObservable';
import { useDispatch } from 'react-redux';
import { actionFetchTeamMembers } from '@Home/state/homeActions';

interface Props extends StackScreenProps<NavigationParams, Screens.Home> { };

let positionY = 0;

const HomeComponent: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();
    const scrollRef = useRef<ScrollView>(null);

    const [team, setTeam] = useState<ITeamMember[]>([]);

    useEffect(() => {
        const fetchTeamObservable = FetchTeamObservable.subscribe(({ team }: IFetchTeamResponse) => {
            setTeam(team);
        });
        return () => {
            fetchTeamObservable.unsubscribe();
        };
    }, []);

    useEffect(() => {
        dispatch(actionFetchTeamMembers());
    }, []);

    const handleOnScrollToInformation = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: positionY, animated: true });
        }
    };

    const handleOnSavePositionY = (posY: number) => {
        positionY = posY;
    };

    const handleOnPressBePartOf = () => navigation.navigate(Screens.SignUp);

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
                <CarouselComponent handleOnSavePositionY={handleOnSavePositionY} items={Constants.CarouselItems} />
                <WorkWithUsComponent handleOnPressBePartOf={handleOnPressBePartOf} />
                <TeamComponent team={team}/>
                <FooterComponent />
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeComponent;
