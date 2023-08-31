import Chris from '../../assets/images/quotes/chris.png';
import Gina from '../../assets/images/quotes/gina.png';
import Isaac from '../../assets/images/quotes/isaac.png';
import Sky from '../../assets/images/quotes/sky.png';
import bronzeAvatar from '../../assets/images/shareholder/bronze.png';
import greenAvatar from '../../assets/images/shareholder/green.png';
import greyAvatar from '../../assets/images/shareholder/grey.png';
import purpleAvatar from '../../assets/images/shareholder/purple.png';
import redAvatar from '../../assets/images/shareholder/red.png';
import yellowAvatar from '../../assets/images/shareholder/yellow.png';
import { StyledOptions } from './styles';

export const mockSideBarContent = [
    {
        photo: Chris,
        name: 'Chris',
        invested: 'Beach City Hydroponics',
        text: 'Very excited to be partnering up with Budbo and using the Budbo Connect platform!.'
    },
    {
        photo: Gina,
        name: 'Gina DeSito',
        invested: 'Club Nirvana',
        text: 'This is the potential amazon of the cannabis, cbd, and hemp industries, its a one stop shop for finding and buying!'
    },
    {
        photo: Isaac,
        name: 'Isaac Rodriguez',
        invested: 'Austin, TX',
        text: 'The blockchain integration and underlying technology is what attracted me to budbo as an early investor'
    },
    {
        photo: Sky,
        name: 'Sky Grizzly',
        invested: 'GI Grow',
        text: 'The platform does a lot of magic for me, makes things easy, glad its here '
    },

]
export const perks = [
    {
        title: '5k',
        value: 1000,
    },
    {
        title: '10k',
        value: 2500,
    },
    {
        title: '50k',
        value: 5000,
    },
    {
        title: '100k',
        value: 10000,
    },
    {
        title: '250k',
        value: 25000,
    },
    {
        title: '500k+',
        value: 50000,
    }
]

export const options = [
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $495 - $999<span>2,531 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $1000 - $2999<span>1,036 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $3000 - $4999<span>912 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $5000 - $9999<span>447 Investors</span></StyledOptions>
    },
    {
        value: '500', label: <StyledOptions className='w-100 d-flex align-items-center justify-content-between'>
            $10000<span>210 Investors</span></StyledOptions>
    },
];

export const colorsAvatars = {
    yellow: {
        img: yellowAvatar,
    },
    red: {
        img: redAvatar,
    },
    green: {
        img: greenAvatar,
    },
    purple: {
        img: purpleAvatar,
    },
    grey: {
        img: greyAvatar,
    },
    bronze: {
        img: bronzeAvatar,
    }
}
