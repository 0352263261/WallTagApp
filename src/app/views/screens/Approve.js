import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DatePicker from 'react-native-datepicker';

const { width, height } = Dimensions.get('window');
export default class Approve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: '',
            end_date: '',
        };
    }

    _gotoDetail() {
        this.props.navigation.navigate('DetailPost');
    }

    render() {
        const my_datePicker = (
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                placeholder="Chọn ngày"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={(date) => { this.setState({ start_date: date }) }}
            />
        );
        return (
            <View>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={this._gotoDetail.bind(this)}>
                        <Icon name="chevron-left" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.titleHeaderStyle}>Thuê địa điểm</Text>
                    </View>
                    <View></View>
                </View>

                <View style={styles.wrapper}>
                    <View style={{ margin: 10 }}>
                        <Text>Mã khách hàng: </Text>
                    </View>

                    <View style={{ margin: 10 }}>
                        <Text>Mã địa điểm: </Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={{ margin: 10 }}>Ngày bắt đầu</Text>
                        <View style={{ marginLeft: 40 }}>
                            {my_datePicker}
                        </View>
                        <Text style={{ margin: 10 }}>Ngày kết thúc</Text>
                        <View style={{ marginLeft: 40 }}>
                            {my_datePicker}
                        </View>
                    </View>
                </View>

                <View style={styles.btnWrapperStyle}>
                    <TouchableOpacity style={styles.btnBackStyle}>
                        <View>
                            <Text style={{ color: '#212121', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>
                                Quay lại
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View></View>
                    <TouchableOpacity style={styles.btnSendStyle}>
                        <View>
                            <Text style={{ color: '#FFF', fontFamily: 'Regular', fontSize: 14, fontWeight: 'bold' }}>Gửi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 20,
        height: 0.75 * height,
    },
    headerStyle: {
        padding: 10,
        height: height / 13,
        backgroundColor: '#F44336',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        marginTop: 10
    },
    titleHeaderStyle: {
        fontFamily: 'Regular',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    input_style: {
        fontFamily: 'Regular',
        height: 40,
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontSize: 14
    },
    btnWrapperStyle: {
        height: height * 0.08,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: '#212121',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    }
});