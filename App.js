/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput,TouchableOpacity,Button} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

import  Buttons from './testsApp/compoment/Buttons';
import * as Dimensions from "react-native/Libraries/Utilities/Dimensions";


// var {width,height}=Dimensions.get('window');

import {StackNavigator} from 'react-navigation'
export default class App extends Component<Props> {

    static navigationOptions = {
        title: 'Welcome',
       // headerStyle:
    };


    _onPressButton=()=> {
       alert('You tapped the button!')
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }



    render() {


        return (


            <View style={styles.container}>
                <View style={styles.sta}>
                    <Text style={styles.sta2}/>
                    <Text style={styles.welcome}>快捷登录</Text>
                    <Text style={styles.sta2}>跳过</Text>
                </View>
                <View style={styles.cont}>
                    <Image source={require('./android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png')}
                           style={{width: 120, height: 120,marginTop:20, borderRadius: 100, alignItems: 'center'}}/>
                </View>
                <View style={{height: 60, flexDirection: 'row'}}>

                    <TextInput
                        style={{
                            flex: 1, flexDirection: 'row', height: 60, borderColor: '#F67710',
                            borderWidth: 0, marginRight: 10, marginLeft: 10, fontSize: 20,
                        }}
                        placeholder="请输入手机号码"
                        onChangeText={(text) => this.setState({text})}
                        keyboardType={'number-pad'}
                        maxLength={11}
                    />
                </View>

                <View style={{height: 1, backgroundColor: '#F28B05', marginLeft: 15, marginRight: 15}}/>


                <View
                    style={{
                        flex: 0,
                        marginTop: 20,
                        marginBottom: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <TextInput
                        style={{
                            flex: 1,
                            height: 60,
                            fontSize: 20,
                            justifyContent: 'flex-start',
                            marginLeft: 15,
                            color: '#000'
                        }}
                        placeholder="请输入短信验证码"
                        onChangeText={(text) => this.setState({text})}
                        keyboardType={'number-pad'}
                        maxLength={6}
                    />
                    <View style={{
                        height: 36,
                        backgroundColor: '#cccccc',
                        borderRadius: 20,
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginRight: 15,
                        justifyContent: 'center'
                    }}>
                        <Text style={{flex: 0, fontSize: 20, color: '#F28B05', alignItems: 'center'}}>获取验证码</Text>

                    </View>
                </View>

                <View style={{height: 1, backgroundColor: '#F28B05', marginLeft: 15, marginRight: 15}}/>



                {/*<TouchableOpacity onPress={this._onPressButton}>*/}
                    {/*<View style={{*/}
                        {/*height: 50,*/}
                        {/*backgroundColor: '#F28B05',*/}
                        {/*borderRadius: 30,*/}
                        {/*marginRight: 20,*/}
                        {/*marginLeft: 20,*/}
                        {/*marginTop: 80,*/}
                        {/*alignItems: 'center',*/}
                        {/*justifyContent: 'center'*/}
                    {/*}}>*/}
                        {/*<Text style={{color: '#FFF', fontSize: 25,}}>登录</Text>*/}
                    {/*</View>*/}

                {/*</TouchableOpacity>*/}


                <Buttons text="确定"bj="#F28B05" onclik={()=>{alert("被点击了！wooiwows")}}/>

                <Button title='确定' onPress={() => this.props.navigation.navigate('Chat')}/>
            </View>


        );
    }
}


const styles = StyleSheet.create({


    stk: {
        flex: 1,
        textAlign: 'left',
        color: '#333333',
        fontSize: 20,
        marginTop: 70,
        marginLeft: 20,
    },

    stl: {
        flex: 1,
        textAlign: 'left',
        color: '#333333',
        fontSize: 20,
        marginLeft: 16,

    },


    stk2: {
        flex: 1,
        textAlign: 'left',
        color: '#333333',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 20,
    },


    sta: {
        flex: 0,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    },
    sta2: {
        flex: 1,
        textAlign: 'right',
        color: '#333333',
        fontSize: 20,
        marginRight: 10,
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
    },


    cont: {
        flex: 0,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },


    welcome: {
        flex: 5,
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 70,
        marginBottom: 5,
    },


    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },


});
