import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const {width, height} = Dimensions.get('window');
export default class Contact extends React.Component {

    _gotoDetail(){
        this.props.navigation.navigate('DetailPost');
    }

    render() {
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
});