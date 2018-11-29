import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity }
    from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { AppServer } from '../../../common/Constants';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { height, width } = Dimensions.get('window');

export default class SearchAround extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng: '',
            error: ''
        };
    }

    componentDidMount(){
        alert(`h`)
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    _search() {
        alert(this.state.lat);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._search.bind(this)}>
                    <View style={styles.wrapper}>
                        <Text style={styles.textStyle}>Tìm kiếm quanh đây</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        backgroundColor: 'red',
        height: width / 8,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    }
});