import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');
const img_search_bar = require('../../../images/search_bar.png');
export default class Header extends React.Component {
    _gotoSearchBar() {
        this.props.navigation.navigate('Location');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <Text style={styles.title_text}>WallTag</Text>
                </View>
                <View style={styles.wrapper_search}>
                    <TouchableOpacity style={styles.btn_drawer_icon} onPress={this.props.onOpen}>
                        <Icon name="bars" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row2} onPress={this._gotoSearchBar.bind(this)}>
                        <View style={styles.searchStyle}>
                            <Icon name="search" size={18} style={{ marginLeft: 15 }} />
                            <Text style={styles.text_search_style}>Tìm kiếm địa điểm</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F44336', height: height / 9
    },
    wrapper_search:{
        flexDirection: 'row', flex: 10
    },
    row1: {
        justifyContent: 'space-between', alignItems: 'center'
    },
    row2: {
        marginTop: 5, alignItems: 'center', flex: 9
    },

    btn_drawer_icon: {
        marginLeft: 10, flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    title_text: {
        marginTop: 5, fontSize: 16, color: 'white', fontFamily: 'Regular', fontWeight: 'bold'
    },
    searchStyle: {
        width: width - 70,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 60
    },
    text_search_style: {
        fontSize: 16,
        fontFamily: 'Regular',
        marginLeft: 15,
        justifyContent: 'center',
        color: '#90A4AE',
        fontStyle: 'italic'
    }
});