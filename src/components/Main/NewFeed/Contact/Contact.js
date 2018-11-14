import React from 'react';
import { Text, View, StyleSheet, Dimensions }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { width, height } = Dimensions.get('window');
export default class Contact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}></View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Name company</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Address company</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Hot line</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD',
    },
    topContainer: {
        margin: 5,
        height: height / 3,
        backgroundColor: '#FFF',
    },
    viewStyle:{
        margin: 5,
        marginTop: 0,
        height: 40,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    textStyle:{
        marginLeft: 5,
        fontFamily: 'Regular',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 16
    }
});