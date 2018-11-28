import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, AsyncStorage, RefreshControl, ScrollView }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import apiManager from "../../../controller/APIManager"

const { height, width } = Dimensions.get('window');

class ItemPoster extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: this.props.item,
            index: this.props.index,
            onClick: this.props.onClick
        }
    }

    render() {
        const item = this.state.item
        const index = this.state.index
        return (
            <View>
                <TouchableOpacity onPress={() => this.state.onClick(item, index)}>
                    <View style={styles.item_wrapper}>
                        <View style={{ backgroundColor: 'red', flex: 5 }}>
                            <Image source={{ uri: item.imageUrl }} style={styles.img_style} />
                        </View>
                        <View style={{ flex: 5, marginLeft: 10, padding: 10 }}>
                            <Text style={styles.item_textStyle}>{item.wallType[0].type}</Text>
                            <Text style={styles.item_textStyle}>{item.posterType[0].type}</Text>
                            <Text style={styles.item_textStyle}>Kích thước: {item.width * item.height} m2</Text>
                            <Text style={styles.item_price}>Giá: {item.price.text} {item.price.unit}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default class SavedPoster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPosts: [],
            refreshing: false
        };
    }

    componentDidMount() {
        apiManager.refresh_favorite_poster(this.favoritePosterCallback)
    }

    updateItem = (item, action) => {
        if (action === "action_remove") {
            posts = this.state.listPosts.filter(element => element.id !== item.id)
        }
        this.setState({ listPosts: posts });
    }

    _handleClick = (item, index) => {
        this.props.navigation.navigate('DetailPost', {
            result_post: item,
            back_history: "Main",
            callback: this.updateItem
        });
    }

    _onRefreshUpdatePost = () => {
        this.setState({ refreshing: true });
        apiManager.refresh_favorite_poster(this.favoritePosterCallback)
    }

    favoritePosterCallback = (responseJson) => {
        if (responseJson === undefined) {
            alert(`Lỗi cập nhật`)
            return
        }
        if (responseJson.success === true) {
            posts = responseJson.data.map((item, i) => {
                item.saved = true;
                return item;
            })
            this.setState({ listPosts: posts });
            this.setState({ refreshing: false });
        } else {
            alert(`Có lỗi xảy ra!`);
        }
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefreshUpdatePost}
                    />
                }
            >
                <View style={styles.headerStyles}>
                    <Text style={styles.textTitleStyle}>Địa điểm yêu thích</Text>
                </View>
                <View style={{ marginBottom: 35 }}>
                    <FlatList
                        data={this.state.listPosts}
                        renderItem={({ item, index }) => {
                            return (<ItemPoster
                                item={item}
                                index={index}
                                onClick={this._handleClick}
                            />);
                        }}
                        keyExtractor={(item, index) => `${item.id}`}
                    />
                </View>
            </ScrollView>
        );
    }
}

const widthImg = width - 30;
const heightImg = (widthImg * 300) / 500 - 30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    headerStyles: {
        height: height / 18,
        padding: 10
    },
    textTitleStyle: {
        fontFamily: 'Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        fontStyle: 'italic'
    },
    item_wrapper: {
        flex: 1,
        margin: 5,
        marginBottom: 5,
        height: height * 0.2,
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    item_textStyle: {
        height: (height * 0.2) / 4,
        justifyContent: 'center'
    },
    item_price: {
        height: (height * 0.2) / 4,
        justifyContent: 'center',
        color: '#FF3D00'
    },
    img_style: {
        width: (height * 0.2) + 30,
        height: height * 0.2
    },
});