import React from 'react';
import { Text, View, TouchableOpacity }
    from 'react-native';

export default class History extends React.Component {
    _gotoMain() {
        this.props.navigation.navigate('Main');
    }
    render() {
        return (<View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._gotoMain.bind(this)}>
                <Text style={{ fontSize: 30 }}>
                    History
                </Text>
            </TouchableOpacity>
        </View>);
    }
}