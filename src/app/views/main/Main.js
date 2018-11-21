import React from 'react';
import Menu from "./drawer/Menu";
import NewFeed from "../main/pager/NewFeed";
import Drawer from 'react-native-drawer'

export default class Main extends React.Component {
    _closeControlPanel = () => {
        this.drawer.close()
    };
    _openControlPanel = () => {
        this.drawer.open()
    };

    render() {
        const {navigation} = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={< Menu  navigation = {navigation}/>}
                tapToClose={true}
                openDrawerOffset={0.4}
            >
                <NewFeed open={this._openControlPanel.bind(this)} navigation={navigation}/>
            </Drawer>
        )
    }
}