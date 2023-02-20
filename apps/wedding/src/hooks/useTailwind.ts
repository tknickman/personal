import resolveConfig from 'tailwindcss/resolveConfig'
import { Config } from 'tailwindcss/types'
import tailwindConfig from '../../tailwind.config'

const config = resolveConfig(tailwindConfig)

type TailwindConfig = Config & {
  theme: {
    colors: {
      primary: '#003438'
      gold: '#C08C5F'
      egg: '#e1dad8'
      maroon: '#4f172e'
    }
  }
}

const useTailwind = () => {
  return config as TailwindConfig
}

export default useTailwind
