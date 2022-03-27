import { Images } from '@Assets/index';
import { CarouselItem } from '@Components/carousel/carouselComponent';
import { TeamMember } from '@Components/team/teamComponent';
import Strings from '@Utils/strings';

const CarouselItems: CarouselItem[] = [
    {
        uri: Images.carouselFirstImage,
        title: Strings.imagine,
        content: [
            [{ isBold: true, text: 'Estrategia' }, { text: 'Digital' }],
            [{ text: 'Big Data &' }, { isBold: true, text: 'Analysis' }],
            [{ isBold: true, text: 'Consultoria' }, { text: 'Tecnólogica' }],
            [{ isBold: true, text: 'Reducción' }, { text: 'de costos TI' }],
        ],
        footerIndicator: 1,
    },
    {
        uri: Images.carouselSecondImage,
        title: Strings.explore,
        content: [
            [{ text: 'Innovación' }, { isBold: true, text: 'y creación tecnológica' }],
            [{ isBold: true, text: 'UI / UX' }],
            [{ isBold: true, text: 'innovación' }],
        ],
        footerIndicator: 2,
    },
    {
        uri: Images.carouselThirdImage,
        title: Strings.conquer,
        content: [
            [{ text: 'Desarrollo tecnológico' }, { isBold: true, text: 'y creación tecnológica' }],
            [{ isBold: true, text: 'Ciberseguridad' }],
            [{ isBold: true, text: 'Servicios de la Nube' }],
        ],
        footerIndicator: 3,
    },
];

const TeamMembers: TeamMember[] = [
    {
        uri: Images.firstTeamMember,
        name: 'Ramón Gómez',
        role: 'Front-end developer',
    },
    {
        uri: Images.secondTeamMember,
        name: 'Ximena Mejía',
        role: 'UX Designer',
    },
    {
        uri: Images.thirdTeamMember,
        name: 'Jaime Domínguez',
        role: 'Back-end developer',
    },
]

export default { CarouselItems, TeamMembers };
