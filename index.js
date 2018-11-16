/** @format */

import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation'
import App from './App';
import ChatScreen from './testsApp/ChatScreen'
import {name as appName} from './app.json';



const appNav = StackNavigator({
    app: { screen: App },
    Chat: { screen: ChatScreen },

});

AppRegistry.registerComponent(appName, () => appNav);
