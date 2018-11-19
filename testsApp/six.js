/**
 *  Class: six
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class six extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }



    static navigationOptions = {
        title: 'React Native学习跳转传值',
    };


    // 渲染
    render() {
        return (
            <View>
                <Text style={styles.style_1}>
                    {this.props.navigation.state.params.key}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    style_1: {

        fontSize:20,
        color:'#000'

    }

});