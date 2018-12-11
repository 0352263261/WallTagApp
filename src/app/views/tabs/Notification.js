import React from 'react';
import { Text, View, Image }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Notification extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 16, fontFamily: 'Regular', fontStyle: 'italic' }}>
                    Không có thông báo nào
                </Text>
            </View>);
    }
}