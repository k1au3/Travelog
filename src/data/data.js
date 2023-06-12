
import egypt from '../images/hero/egypt.jpg';
import himalaya from '../images/hero/himalaya1.jpg';
import beach from '../images/hero/beach1.jpg';
import mount from '../images/hero/mount1.jpg';
import beachtAct from '../images/icons/sunbed.png';
import bungee from '../images/icons/bungee-jumping.png';
import city from '../images/icons/buildings.png';
import hiking from '../images/icons/hiking.png';
import jungle from '../images/icons/jungle.png';
import skiing from '../images/icons/ski.png';
import kayak from '../images/icons/kayaking.png';
import dining from '../images/icons/serving-dish.png'



export const ActivityData = [
    {
        id: 1,
        rating: 4.9,
        url: beachtAct,
        title: 'Beach Activity',
        idadi: 196
    },
    {
        id: 2,
        rating: 4.5,
        url: bungee,
        title: 'Bungee Jumping',
        idadi: 108
    },
    {
        id: 3,
        rating: 3.8,
        url: city,
        title: 'City Tours',
        idadi: 130
    },
    {
        id: 4,
        rating: 4.9,
        url: hiking,
        title: 'Hiking trips',
        idadi: 98
    },
    {
        id: 5,
        rating: 4.3,
        url: jungle,
        title: 'Jungle Trekking',
        idadi: 123
    },
    {
        id: 6,
        rating: 4.0,
        url: kayak,
        title: 'Kayaking',
        idadi: 78
    },
    {
        id: 7,
        rating: 3.9,
        url: skiing,
        title: 'Skiing',
        idadi: 56
    },
    {
        id: 8,
        rating: 5.1,
        url: dining,
        title: 'Dining',
        idadi: 230
    }
];



export const SingleCarousel = [
    {
        id:1,
        sub: 'The Himalayan Mountain Ranges',
        title: 'Nepal Country',
        temp: 'Very cold',
        url: himalaya
    },
    {
        id: 2,
        sub: 'Warm Sandy Beaches',
        title: 'Malindi County',
        temp: 'Warm Tropical',
        url: beach
    },
    {
        id:3,
        sub: 'Freezing Tempratures and Snow',
        title: 'Mount Everest',
        temp: 'Freezing',
        url: mount
    },
    {
        id:4,
        sub: 'Pyramids of Giza',
        title: 'Ancient Egypt',
        temp: 'Hot Dry ',
        url: egypt
    }
];
