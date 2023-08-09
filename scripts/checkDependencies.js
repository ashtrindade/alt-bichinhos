const colors = require('colors')

function checkDependencies() {
  const packageJson = require('../package.json')
  const dependencies = Object.keys(packageJson.dependencies)
  const devDependencies = Object.keys(packageJson.devDependencies)

  dependencies.forEach(dependency => {
    const version = packageJson.dependencies[dependency]
    if (version.includes('^') || version.includes('~')) {
      throw new Error(colors.red(`${dependency} has ^ or ~ in its version number: ${version}`))
    } else {
      console.log(colors.green('Good!'))
    }
  })

  devDependencies.forEach(devDependency => {
    const version = packageJson.devDependencies[devDependency]
    if (version.includes('^') || version.includes('~')) {
      throw new Error(colors.red(`${devDependency} has ^ or ~ in its version number: ${version}`))
    } else {
      console.log(colors.green('Good!'))
    }
  })

}

checkDependencies()
