import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity }
    from 'react-native';

const { height, width } = Dimensions.get('window');

export default class SearchAround extends React.Component{
    render(){
        return(
            <View>
                <Text>Tim kiem quanh day (API gg)</Text>
            </View>
        );
    }
}