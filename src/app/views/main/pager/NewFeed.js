import React from 'react';
import { View }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';
import Home from "../tabs/Home";
import Contact from "../tabs/Contact";
import SavedPoster from "../tabs/SavedPoster";
import Notification from "../tabs/Notification";
import Header from "../header/Header";
import SearchAround from "../tabs/SearchAround";

export default class NewFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    _openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this._openMenu.bind(this)} navigation={navigation} />
                <TabNavigator tabBarStyle={{backgroundColor: '#BDBDBD',}}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Trang chủ"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Icon name="home" size={20} color="white" />}
                        renderSelectedIcon={() => <Icon name="home" size={20} color="#F44336" />}
                        titleStyle={{ fontFamily: 'Regular', fontSize: 12 }}
                        selectedTitleStyle={{ color: "#F44336" }}
                    >
                        <Home navigation={navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'save'}
                        title="Yêu thích"
                        onPress={() => this.setState({ selectedTab: 'save' })}
                        renderIcon={() => <Icon name="heart" size={20} color="white" />}
                        renderSelectedIcon={() => <Icon name="heart" size={20} color="#F44336" />}
                        titleStyle={{ fontFamily: 'Regular', fontSize: 12 }}
                        selectedTitleStyle={{ color: "#F44336" }}
                    >
                        <SavedPoster navigation={navigation}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search_around'}
                        title="Gần đây"
                        onPress={() => this.setState({ selectedTab: 'search_around' })}
                        renderIcon={() => <Icon name="location-arrow" size={20} color="white" />}
                        renderSelectedIcon={() => <Icon name="location-arrow" size={20} color="#F44336" />}
                        titleStyle={{ fontFamily: 'Regular', fontSize: 12 }}
                        selectedTitleStyle={{ color: "#F44336" }}
                    >
                        <SearchAround navigation={navigation}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'notification'}
                        title="Thông báo"
                        onPress={() => this.setState({ selectedTab: 'notification' })}
                        renderIcon={() => <Icon name="bell" size={20} color="white" />}
                        renderSelectedIcon={() => <Icon name="bell" size={20} color="#F44336" />}
                        titleStyle={{ fontFamily: 'Regular', fontSize: 12 }}
                        selectedTitleStyle={{ color: "#F44336" }}
                        badgeText="1"
                    >
                        <Notification />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Liên hệ"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Icon name="comments" size={20} color="white" />}
                        renderSelectedIcon={() => <Icon name="comments" size={20} color="#F44336" />}
                        titleStyle={{ fontFamily: 'Regular', fontSize: 12 }}
                        selectedTitleStyle={{ color: "#F44336" }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}