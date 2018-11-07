import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions }
    from 'react-native';
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';

const lien_he = require('../images/lien_he.png');
const { height, width } = Dimensions.get('window');
const pic2 = require('../../components/images/pic2.jpg');
const pic1 = require('../../components/images/pic1.jpg');
export default class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // post: this.props.navigation.state.params.resultPost
        }
    }

    _handleContact() {
        alert(`Lien he`);
    }

    _gotoHome() {
        this.props.navigation.navigate('NewFeed');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={this._gotoHome.bind(this)}>
                        <Icon name="long-arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Chi tiết poster</Text>
                    <TouchableOpacity>
                        <Icon name="heart" size={20} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapper}>
                    <View style={{ flex: 1 }}>
                        <Swiper showsButtons scrollEnabled={false}>
                            <View>
                                <Image source={pic2} style={styles.imageStyle} />
                            </View>
                            <View>
                                <Image source={pic1} style={styles.imageStyle} />
                            </View>
                            <View>
                                <Image source={pic2} style={styles.imageStyle} />
                            </View>
                        </Swiper>
                    </View>
                </View>

                <View style={styles.wrapperInfo}>
                    
                </View>
            </View>
        );
    }
}

const widthImg = width - 30;
const heightImg = (widthImg * 300) / 500;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD'
    },
    headerStyle: {
        padding: 10,
        height: height / 13,
        backgroundColor: '#F44336',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontFamily: 'Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    imageStyle: {
        height: heightImg,
        width: widthImg,
    },
    wrapper: {
        height: height * 0.31,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#212121',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 5
    },
    wrapperInfo:{
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#212121',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 5
    }
});