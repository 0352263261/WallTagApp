import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView }
    from 'react-native';
import apiManager from "../../network/APIManager"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');
export default class DetailPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: this.props.navigation.state.params.result_post,
            back_history: this.props.navigation.state.params.back_history,
            callback: this.props.navigation.state.params.callback
        }
    }

    _handleContact() {
        const {navigation} = this.props
        navigation.navigate('Approve',{
            id_post: this.state.post.id
        });
    }

    _handleBack() {
        this.props.navigation.navigate(this.state.back_history);
    }

    _changePostStatus = () => {
        newPost = this.state.post
        newPost.saved = !this.state.post.saved
        if (newPost.saved) {
            method = "PUT"
        } else {
            method = "DELETE"
        }
        apiManager.change_favorite_poster(this.state.post.id, this.changePosterCallBack, method)
    }
    changePosterCallBack = (responseJson) => {
        if (responseJson === undefined) {
            alert(`Lỗi cập nhật`)
            return
        }
        if (responseJson.success === true) {
            this.setState({ post: newPost })
            if (newPost.saved) {
                alert("Da them thanh cong")
            } else {
                alert("Da xoa thanh cong")
                if (this.state.callback !== undefined) {
                    this.state.callback(newPost, "action_remove")
                }
            }
        } else {
            alert(`Poster đã được lưu`);
        }

    }

    render() {
        const detail = (
            <View style={styles.btnWrapperStyle}>
                <TouchableOpacity style={styles.btnSaveStyle} onPress={this._changePostStatus.bind(this)}>
                    <View>
                        <Text style={{ color: '#212121', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>
                            {this.state.post.saved === true ? "Bỏ lưu" : "Lưu"}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View></View>
                <TouchableOpacity style={styles.btnContactStyle} onPress={this._handleContact.bind(this)}>
                    <View>
                        <Text style={{ color: '#FFF', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>Liên hệ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );

        const detailSelected = detail;

        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={this._handleBack.bind(this)}>
                        <Icon name="chevron-left" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.titleHeaderStyle}>Thông tin chi tiết</Text>
                    </View>
                    <View></View>
                </View>

                <View style={styles.wrapper}>
                    <View style={{ flex: 1 }}>
                        <Swiper showsButtons scrollEnabled={false}>
                            <View>
                                <Image source={{ uri: this.state.post.imageUrl }} style={styles.imageStyle} />
                            </View>
                            <View>
                                <Image source={{ uri: this.state.post.imageUrl }} style={styles.imageStyle} />
                            </View>
                            <View>
                                <Image source={{ uri: this.state.post.imageUrl }} style={styles.imageStyle} />
                            </View>
                        </Swiper>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginLeft: 10, marginTop: 0 }}>
                        <Text style={{ fontFamily: 'Regular', fontSize: 16, fontWeight: 'bold' }}>THÔNG TIN CHI TIẾT</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>{this.state.post.posterType[0].type}</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>{this.state.post.wallType[0].type}</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>Kích thước: {this.state.post.width * this.state.post.height}m2</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>Địa chỉ: {this.state.post.address}</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>Mô tả: {this.state.post.description}</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>Ngày tạo: {this.state.post.dateCreated}</Text>
                    </View>

                    <View style={styles.wrapperInfo}>
                        <Text style={styles.textStyle}>Giá thi công: {this.state.post.constructionPrice}</Text>
                    </View>
                </ScrollView>

                <Text style={{ textAlign: 'right', marginRight: 15, fontFamily: 'Regular', fontStyle: 'italic' }}>Tổng phí</Text>
                <Text style={styles.textPriceStyle}>{this.state.post.price.text} {this.state.post.price.unit}</Text>
                {detailSelected}

            </View>
        );
    }
}

const widthImg = width - 30;
const heightImg = (widthImg * 300) / 500;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    imageStyle: {
        height: heightImg,
        width: widthImg,
    },
    wrapper: {
        height: height * 0.31,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
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