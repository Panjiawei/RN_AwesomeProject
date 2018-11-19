/**
 *  Class: five
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import MyText from "./compoment/MyText";

import {StackNavigator} from 'react-navigation';

export default class five extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};


    static navigationOptions = {
        title: 'React Native学习props和state',
    };


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag: '点击前'
        };
    }

    call_1() {
        this.setState({tag:'你点击了'});


    };


    // 渲染
    render() {
        let str = this.state.tag;

        return (
            <View
    style={styles.style_2}>
                <View style={styles.style_3}>
                    <Text style={styles.style_1} onPress={()=>this.call_1()}>按钮</Text>
                </View>
                <Text style={{fontSize: 30}}>{str}</Text>
                <MyText name='Tom'age='18'></MyText>
                <Text style={styles.style_4}onPress={()=>{this.props.navigation.navigate('six',{key:'123456'})}}>
                    跳转
                </Text>


            </View>
        );
    }
}


const styles = StyleSheet.create({

    style_1: {

        // backgroundColor:'#963',
        //textColor: '#fff',
        // textAlign: 'center',
        //borderRadius:10,
        fontSize: 20,
        color: '#F28B05',
        textAlign: 'center',
        borderRadius: 10,


    },

    style_4: {

         backgroundColor:'#963',
            //textColor: '#fff',
       // textAlign: 'center',
        //borderRadius:10,
        fontSize: 20,
        color: '#F28B05',
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 10,
        paddingBottom: 10,


    },

    style_2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },

    style_3: {
        height: 50,
        marginRight: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE9',
        borderRadius: 10,
    }


});