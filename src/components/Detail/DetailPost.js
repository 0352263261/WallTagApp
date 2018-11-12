import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions }
    from 'react-native';
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');
const pic2 = require('../../components/images/pic2.jpg');
const pic1 = require('../../components/images/pic1.jpg');
export default class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            post: this.props.navigation.state.params.result_post,
            screen: this.props.navigation.state.params.back_history
        }
    }

    _handleContact() {
        alert(`Lien he`);
    }

    _gotoHome() {
        this.props.navigation.navigate(this.state.screen);
    }

    _savePoster() {
        alert(`Đã lưu Poster`);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={this._gotoHome.bind(this)}>
                        <Icon name="long-arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleHeaderStyle}>Chi tiết poster</Text>
                    <View></View>
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

                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ fontFamily: 'Regular', fontSize: 16, fontWeight: 'bold' }}>THÔNG TIN CHI TIẾT</Text>
                </View>

                <View style={styles.wrapperInfo}>
                    <Text style={styles.textStyle}>Style Poster</Text>
                </View>

                <View style={styles.wrapperInfo}>
                    <Text style={styles.textStyle}>Style Wall</Text>
                </View>

                <View style={styles.wrapperInfo}>
                    <Text style={styles.textStyle}>Size</Text>
                </View>

                <View style={styles.wrapperInfo}>
                    <Text style={styles.textStyle}>Price</Text>
                </View>

                <Text style={{ textAlign: 'right', marginRight: 10, fontFamily: 'Regular', fontStyle: 'italic' }}>Tổng phí</Text>
                <Text style={styles.textPriceStyle}>1,000,000 VND</Text>

                <View style={styles.btnWrapperStyle}>
                    <TouchableOpacity style={styles.btnSaveStyle} onPress={this._savePoster.bind(this)}>
                        <View>
                            <Text style={{ color: '#212121', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <View></View>
                    <TouchableOpacity style={styles.btnContactStyle} onPress={this._handleContact.bind(this)}>
                        <View>
                            <Text style={{ color: '#FFF', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>Liên hệ</Text>
                        </View>
                    </TouchableOpacity>
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
        backgroundColor: '#BDBDBD',
        justifyContent: 'space-between'
    },
    headerStyle: {
        padding: 10,
        height: height / 13,
        backgroundColor: '#F44336',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleHeaderStyle: {
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
    btnWrapperStyle: {
        height: height / 13,
        margin: 20,
        shadowColor: '#212121',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapperInfo: {
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        shadowColor: '#212121',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 5
    },
    titleStyle: {
        fontFamily: 'Regular',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },
    textStyle: {
        fontFamily: 'Regular',
        fontStyle: 'italic',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textPriceStyle: {
        textAlign: 'right',
        marginRight: 10,
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#F44336'
    },
    btnSaveStyle: {
        width: width / 3,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContactStyle: {
        width: width / 3,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});