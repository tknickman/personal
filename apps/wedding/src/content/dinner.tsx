import Cow from '@components/icons/Cow'
import Carrot from '@components/icons/Carrot'
import Chicken from '@components/icons/Chicken'

import { Dinner } from '@types'

const DINNER: Array<Dinner> = [
  {
    id: 'steak',
    name: 'Filet Mignon',
    shortName: 'Filet Mignon',
    Icon: Cow,
    description:
      'Rosemary infused demi-glace over white cheddar polenta and chef’s selection of seasonal vegetables',
  },
  {
    id: 'chicken',
    name: 'Roasted Herb Chicken',
    shortName: 'Roasted Herb Chicken',
    Icon: Chicken,
    description:
      'Herb rubbed and roasted to a golden crispy brown served with a pistachio gremolata roasted garlic smashed potatoes and chef’s selection of seasonal vegetables',
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Risotto Cake',
    shortName: 'Veg. Risotto Cake',
    Icon: Carrot,
    description:
      'Layered grilled vegetables and pesto ricotta atop a butternut squash risotto',
  },
]

export { DINNER }
