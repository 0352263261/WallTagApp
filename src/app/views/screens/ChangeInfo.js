import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { width, height } = Dimensions.get('window');
export default class ChangeInfo extends React.Component {
    _gotoMain() {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={this._gotoMain.bind(this)}>
                        <Icon name="chevron-left" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.titleHeaderStyle}>Thông tin cá nhân</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Icon name="edit" size={25} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapperContainer}>
                    <View style={styles.wrapper_content}>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Tên khách hàng:</Text>
                            <Text style={styles.text_content}>Bui Ngoc Hoang</Text>
                        </View>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Giới tính:</Text>
                            <Text style={styles.text_content}>Nam</Text>
                        </View>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Ngày sinh:</Text>
                            <Text style={styles.text_content}>01-03-1996</Text>
                        </View>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Email:</Text>
                            <Text style={styles.text_content}>buihoang@gmail.com</Text>
                        </View>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Số điện thoại:</Text>
                            <Text style={styles.text_content}>123456789</Text>
                        </View>
                        <View style={styles.wrapper_text}>
                            <Text style={styles.textStyle}>Địa chỉ:</Text>
                            <Text style={styles.text_content}>Cầu Giấy - Hà Nội</Text>
                        </View>
                    </View>
                    <View style={styles.btnWrapper}>
                        <TouchableOpacity style={styles.btnBackStyle}>
                            <View>
                                <Text>Quay lại</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnSendStyle}>
                            <View>
                                <Text>Lưu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        height: height - (height / 13),
        margin: 5,
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
    btnWrapper: {
        marginLeft: 20,
        marginRight: 20,
        height: height / 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    btnBackStyle: {
        width: width / 3,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnSendStyle: {
        width: width / 3,
        backgroundColor: '#33eaff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper_content: {
        height: height - (2 * height / 12),
        padding: 5
    },
    textStyle: {
        fontFamily: 'Regular',
        fontSize: 16
    },
    wrapper_text: {
        height: 60,
        color: '#E0E0E0',
        marginTop: 5,
    },
    text_content:{
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 16,
        fontStyle: 'italic',
    }
});