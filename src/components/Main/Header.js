import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');
const img_search_bar = require('../images/search_bar.png');
export default class Header extends React.Component {
    _gotoSearchBar() {
        this.props.navigation.navigate('Location');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity style={styles.btnClick1} onPress={this.props.onOpen}>
                        <Icon name="bars" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title_text}>WallTag</Text>
                    <TouchableOpacity style={styles.btnClick2}>
                        <Icon name="cart-plus" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.row2} onPress={this._gotoSearchBar.bind(this)}>
                    <Image source={img_search_bar} />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F44336', height: height / 7
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    row2: {
        marginTop: 5, width: width, alignItems: 'center'
    },
    btnClick1: {
        marginLeft: 10, marginTop: 5
    },
    btnClick2:{
        marginRight: 10, marginTop: 5
    },
    title_text: {
        marginTop: 5, fontSize: 16, color: 'white', fontFamily: 'Regular', fontWeight: 'bold'
    }
});