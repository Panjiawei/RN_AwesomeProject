/** @format */

import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation'
import App from './App';
import ChatScreen from './testsApp/ChatScreen'
import five from './testsApp/five'
import six from './testsApp/six'
import {name as appName} from './app.json';



const appNav = StackNavigator({
    app: { screen: App },
    Chat: { screen: ChatScreen },
    five:{screen:five},
    six:{screen:six},
});

AppRegistry.registerComponent(appName, () => appNav);
