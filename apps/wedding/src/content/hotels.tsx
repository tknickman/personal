import { Hotel } from '@types'

const HOTELS: Array<Hotel> = [
  {
    name: 'Cork Factory Hotel',
    key: 'cork',
    description: '',
    address: {
      line1: '480 New Holland Ave #3000',
      line2: 'Lancaster, PA 17602',
    },
    href: 'https://www.corkfactoryhotel.com/',
  },
  {
    name: 'Lancaster Marriott at Penn Square',
    key: 'marriott',
    description: '',
    address: {
      line1: '25 S Queen St',
      line2: 'Lancaster, PA 17603',
    },
    href: 'https://www.marriott.com/en-us/hotels/lnsmc-lancaster-marriott-at-penn-square/overview/',
  },
  {
    name: 'Lancaster Arts Hotel',
    key: 'arts',
    description: '',
    address: {
      line1: '300 Harrisburg Ave',
      line2: 'Lancaster, PA 17603',
    },
    href: 'https://www.lancasterartshotel.com/',
  },
]

export default HOTELS
