import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import UserDetails from './src/pages/UserDetails';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
