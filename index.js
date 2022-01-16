import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/App';

import codePush from "react-native-code-push";

AppRegistry.registerComponent(appName, () => codePush(App));
