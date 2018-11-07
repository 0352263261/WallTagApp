import React from 'react';
import { Text, View, TouchableOpacity }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Authentication extends React.Component {

    _gotoMain(){
        this.props.navigation.navigate('Main');
    }

    render() {
        return (<View style={{ flex: 1, }}>
            <TouchableOpacity onPress={this._gotoMain.bind(this)}>
                <Text style={{ fontSize: 30 }}>
                    Authentication
            </Text>
            </TouchableOpacity>
        </View>);
    }
}