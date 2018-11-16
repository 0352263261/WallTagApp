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
            end_date: ''
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
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="2016-05-01"
                maxDate="2016-06-01"
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
                    <Text>Ngày bắt đầu</Text>
                    {my_datePicker}
                    <Text>Ngày kết thúc</Text>
                    {my_datePicker}
                </View>

                <View></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    input_style: {
        fontFamily: 'Regular',
        height: 40,
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontSize: 14
    }
});