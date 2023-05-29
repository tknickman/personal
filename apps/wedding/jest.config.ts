import nextJest from 'next/jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  preset: '@tek/jest-config/dist/presets/app-next',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    // Force module uuid to resolve with the CJS entry point, 
    // because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve('uuid'),
  },
}

export default createJestConfig(customJestConfig)
