/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,  TextInput,TouchableOpacity} from 'react-native';


//import  ChatScreen from'./testsApp/ChatScreen';


export default class Buttons extends Component {


    _onPressButton=()=> {
        const {onclik}=this.props
        onclik();
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }


    render() {

        const {text,bj}=this.props;
        return (

            <View style={styles.container}>


                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={[{
                        height: 50,
                        backgroundColor: 'red',
                        borderRadius: 30,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 80,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },{backgroundColor :bj}]}>
                        <Text style={{color: '#FFF', fontSize: 25,}}>{this.props.text}</Text>
                    </View>

                </TouchableOpacity>

            </View>


        );
    }
}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
    },

});
