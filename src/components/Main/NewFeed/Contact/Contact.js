import React from 'react';
import { Text, View }
from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Contact extends React.Component{
    render(){
        return(<View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 30}}>
                  Contact 
            </Text>
        </View>);
    }
}