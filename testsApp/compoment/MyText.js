/**
 *  Class: MyText
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class MyText extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        for(var key in props){
            console.log("---key:"+key+"---value:"+props[key]);
        }
    }

    // 渲染
    render() {


        var name = this.props.name;
        var age  = this.props.age;
        return(
            <View style = {{flexDirection:'row'}}>
                <Text style={{fontSize:30}}>{name}</Text>
                <Text style={{fontSize:30}}>{'     '+ age}</Text>
            </View>
        );
    }
}
