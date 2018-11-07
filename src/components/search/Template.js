import React from 'react';
import { Text, View, Image }
from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Template extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Thiet ke template',
        tabBarIcon: ({tintColor})=>(
            <Icon name="map-marker" size={18} color="#900"/>
        ),
    }
    render(){
        return(<View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 30}}>
                  tab2 
            </Text>
        </View>);
    }
}