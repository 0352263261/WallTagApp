import React from 'react';
import { Text, View, StyleSheet, Dimensions }
    from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { width, height } = Dimensions.get('window');
export default class Contact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ width: width - 10, height: height / 3, justifyContent: 'center' }}
                        initialRegion={{
                            latitude: 21.0403085,
                            longitude: 105.7722691,
                            latitudeDelta: 0.095,
                            longitudeDelta: 0.0921,
                        }}
                    ></MapView>
                </View>
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
    },
    viewStyle: {
        margin: 5,
        marginTop: 0,
        height: 40,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    textStyle: {
        marginLeft: 5,
        fontFamily: 'Regular',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 16
    }
});