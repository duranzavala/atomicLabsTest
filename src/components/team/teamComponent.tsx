import Constants from '@Utils/constants';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '@Components/team/teamStyles';

export interface TeamMember {
    uri: any;
    name: string;
    role: string;
}

const TeamComponent: React.FC = () => {
    const renderTeamCardMember = (teamMeber: TeamMember, index: number) => (
        <View key={`${index}-${teamMeber.name}`} style={Styles.memberCardContainer}>
            <Image
                resizeMode='contain'
                style={Styles.imageMember}
                source={teamMeber.uri}
            />
            <Text style={Styles.nameText}>{teamMeber.name}</Text>
            <Text style={Styles.roleText}>{teamMeber.role}</Text>
        </View>
    );

    return (
        <View style={Styles.mainContainer}>
            <Text style={Styles.ourTeamText}>
                NUESTRO
                <Text style={Styles.ourTeamTextBold}> EQUIPO</Text>
            </Text>
            {Constants.TeamMembers.map(renderTeamCardMember)}
        </View>
    );
};

export default TeamComponent;
