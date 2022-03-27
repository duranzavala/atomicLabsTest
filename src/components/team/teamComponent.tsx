import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '@Components/team/teamStyles';

export interface ITeamMember {
    uri: any;
    name: string;
    role: string;
}

interface Props {
    team: ITeamMember[];
}

const TeamComponent: React.FC<Props> = ({ team }) => {
    const renderTeamCardMember = (teamMeber: ITeamMember, index: number) => (
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
            {team.map(renderTeamCardMember)}
        </View>
    );
};

export default TeamComponent;
