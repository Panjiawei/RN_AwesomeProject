import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';

//import Counter from './Counter'

import {
    StackNavigator,
} from 'react-navigation';

import {Dimensions} from 'react-native'


var {width,height}=Dimensions.get('window');

export default class ChatScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            topic: [
                {
                    title: '岁末清扫有它们，体验大不同',
                    describe: '更轻松、更美好的大扫除攻略',
                    price: '9.9元起',
                },
                {
                    title: '新年一点红，幸运一整年',
                    describe: '那些让你“红”运当头的好物',
                    price: '9.9元起',
                },
            ]
        };
    }



    refreshing(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }
    _onload(){
        let timer =  setTimeout(()=>{
                clearTimeout(timer)
                alert('加载成功')
            },1500)
    }

    static navigationOptions = {
        title: 'ChatScreen',
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{height:90, fontSize: 20,backgroundColor: '#689', color: '#F28B05', textAlign: 'justify',}}>我是默认页面</Text>
                <FlatList
                    data={this.state.topic}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderTopicItem}
                    ItemSeparatorComponent={this._separator}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    refreshing={false}
                    onRefresh={this.refreshing}
                    onEndReached={this._onload}
                    onEndReachedThreshold={0}

                />



            </View>
        );
    }


    renderTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                       style={styles.topicImg}/>
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.title}</Text>
                        <Text style={styles.topicDesc}>{item.describe}</Text>
                    </View>
                    <Text style={styles.topicPrice}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
}

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }


}





const styles = StyleSheet.create({

    container:{

        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',

    },
    topic: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    topicHead:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width*0.7,
        marginLeft:15,
    },
    topicImg: {
        width: width*0.7,
        height: width*0.4,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    topicTitle:{
        fontSize:16,
        color:'#666',
    },
    topicDesc:{
        fontSize:13,
        color:'#999',
        marginTop:3,
    },

    topicPrice: {
        fontSize: 14,
        color: '#b4282d',
    },
    topicText:{

        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',

    },

});