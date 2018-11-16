import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

//import Counter from './Counter'

import {
    StackNavigator,
} from 'react-navigation';

export default class ChatScreen extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }


    static navigationOptions = {
        title: 'ChatScreen',
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{height:90, fontSize: 20,backgroundColor: '#689', color: '#F28B05', textAlign: 'justify',}}>我是默认页面</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container:{

        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',

    }




});