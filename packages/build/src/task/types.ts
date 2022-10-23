import { Project } from 'ts-morph'

export const generateTypesDefinitions = async () => {
  const project = new Project({
    compilerOptions: {
      declaration: true,
    },
  })
}
