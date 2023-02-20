import nextJest from 'next/jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  preset: '@tek/jest-config/dist/presets/app-next',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

export default createJestConfig(customJestConfig)
