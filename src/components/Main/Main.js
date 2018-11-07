import React from 'react';
import { Text, View, Image, TouchableOpacity }
    from 'react-native';
import Menu from "./Menu";
import NewFeed from "./NewFeed/NewFeed";
import Drawer from 'react-native-drawer'

export default class Main extends React.Component {
    _closeControlPanel = () => {
        this._drawer.close()
    };
    _openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        const {navigation} = this.props;
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={< Menu  navigation = {navigation}/>}
                tapToClose={true}
                openDrawerOffset={0.4}
            >
                <NewFeed open={this._openControlPanel.bind(this)} navigation={navigation}/>
            </Drawer>
        )
    }
}