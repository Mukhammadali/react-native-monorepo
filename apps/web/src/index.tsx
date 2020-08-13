import { AppRegistry } from 'react-native'

import { AppHeader } from '@dev/shared'

AppRegistry.registerComponent('myprojectname', () => AppHeader)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
