import HorseInnHero from '../images/favorites/horse-inn.jpg'
import LucaHero from '../images/favorites/luca.jpg'
import PassengerHero from '../images/favorites/passenger.jpg'
import CabalarHero from '../images/favorites/cabalar.jpg'
import FridgeHero from '../images/favorites/fridge.png'
import CentralHero from '../images/favorites/central.jpg'
import { Favorite } from '@types'
import FathomGoals from '@/lib/fathomGoals'

const FAVORITES: Array<Favorite> = [
  {
    title: 'The Horse Inn',
    href: 'https://horseinnlancaster.com/',
    trackingId: FathomGoals.favoriteHorseInn,
    category: { name: 'Food' },
    address: '540 E Fulton St, Lancaster, PA 17602',
    directions: {
      marriott: {
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+25+S+Queen+St,+Lancaster,+PA+17603/Horse+Inn,+East+Fulton+Street,+Lancaster,+PA/@40.0415486,-76.3145679,16z/data=!3m1!5s0x89c6248aeff50fa9:0xe7d0b016c0a23f0d!4m14!4m13!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c624bfd44b1913:0xe1260add5591963!2m2!1d-76.294286!2d40.042855!3e2',
        walkingDistance: '0.9 mi',
        walkingTime: '19 min',
      },
    },
    description: '',
    image: HorseInnHero,
  },
  {
    title: 'Passenger Coffee',
    href: 'https://www.passengercoffee.com/',
    trackingId: FathomGoals.favoritePassenger,
    directions: {
      marriott: {
        walkingTime: '1 min',
        walkingDistance: '217 ft',
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+25+S+Queen+St,+Lancaster,+PA+17603/Passenger+Coffee+%26+Tea+Showroom,+West+King+Street,+Lancaster,+PA/@40.0378515,-76.3062455,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c624edf2d08989:0x41504fcf66a0d339!2m2!1d-76.3063086!2d40.0379806!3e2',
      },
    },

    category: { name: 'Coffee' },
    address: '7 W King St, Lancaster, PA 17602',
    description: '',
    image: PassengerHero,
  },
  {
    title: 'Luca',
    href: 'https://lucalancaster.com/',
    trackingId: FathomGoals.favoriteLuca,
    directions: {
      marriott: {
        walkingTime: '21 min',
        walkingDistance: '0.9 mi',
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+25+S+Queen+St,+Lancaster,+PA+17603/LUCA,+West+James+Street+%23101,+Lancaster,+PA/@40.0415486,-76.3145679,16z/data=!3m2!4b1!5s0x89c6248aeff50fa9:0xe7d0b016c0a23f0d!4m14!4m13!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c6248ae56eb2c7:0x39e295b09f9606d5!2m2!1d-76.3153194!2d40.0449444!3e2',
      },
    },
    category: { name: 'Food' },
    address: '436 W James St, Lancaster, PA 17603',
    description: '',
    image: LucaHero,
  },
  {
    title: 'Central Market',
    href: 'https://lucalancaster.com/',
    trackingId: FathomGoals.favoriteMarket,
    directions: {
      marriott: {
        walkingTime: '3 min',
        walkingDistance: '0.1 mi',
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+South+Queen+Street,+Lancaster,+PA/central+market/@40.0381483,-76.3081708,17z/am=t/data=!3m1!5s0x89c624f25ca2e685:0x54bdd57846cb2fe8!4m13!4m12!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c624f26dac0c0b:0x73d0a19351b249f!2m2!1d-76.3064763!2d40.038375',
      },
    },
    category: { name: 'Food' },
    address: '23 N Market St, Lancaster, PA 17603',
    description: '',
    image: CentralHero,
  },
  {
    title: 'Cabalar Meat Co.',
    href: 'https://www.cabalarmeatco.com',
    trackingId: FathomGoals.favoriteCabalar,
    directions: {
      marriott: {
        walkingTime: '9 min',
        walkingDistance: '0.4 mi',
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+South+Queen+Street,+Lancaster,+PA/cabalar+meat/@40.0405562,-76.3078601,17z/am=t/data=!3m1!5s0x89c6248d66b060c7:0xe7600312a8943b3c!4m14!4m13!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c6248d688680dd:0xdd75d0cdffc6fbc7!2m2!1d-76.30659!2d40.043421!3e2',
      },
    },
    category: { name: 'Food' },
    address: '325 N Queen St, Lancaster, PA 17603',
    description: '',
    image: CabalarHero,
  },
  {
    title: 'The Fridge',
    href: 'http://beerfridgelancaster.com',
    trackingId: FathomGoals.favoriteFridge,
    directions: {
      marriott: {
        directionsHref:
          'https://www.google.com/maps/dir/Lancaster+Marriott+at+Penn+Square,+South+Queen+Street,+Lancaster,+PA/the+fridge/@40.0420589,-76.3129972,16z/am=t/data=!4m14!4m13!1m5!1m1!1s0x89c624edfc14acf1:0xfe4ece8e552b391d!2m2!1d-76.3050616!2d40.0376609!1m5!1m1!1s0x89c6248b8d2637a9:0xf0e8d73f6d284179!2m2!1d-76.3121325!2d40.0464193!3e2',
        walkingTime: '18 min',
        walkingDistance: '0.8 mi',
      },
    },
    category: { name: 'Food' },
    address: '534 N Mulberry St, Lancaster, PA 17603',
    description: '',
    image: FridgeHero,
  },
]

export { FAVORITES }
