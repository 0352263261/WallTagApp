import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, ScrollView, RefreshControl }
    from 'react-native';

const { height, width } = Dimensions.get('window');
class ItemPoster extends React.Component {
    _gotoDetail() {
        const { navigation } = this.props;
        const { item } = this.props;
        navigation.navigate('DetailPost', {
            result_post: item,
            back_history: "Main"
        });
    }

    render() {
        const { item } = this.props;
        return (
            <View>
                <TouchableOpacity onPress={this._gotoDetail.bind(this)}>
                    <View style={styles.item_wrapper}>
                        <View style={{ flex: 5 }}>
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

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPosts: [],
            refreshing: false
        };
    }

    componentDidMount() {
        fetch("http://spring-boot-wall-tags.herokuapp.com/adsharingspace/place?category=latest", {
            "method": "GET",
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success == true) {
                    posts = responseJson.data.map((item, i) => {
                        item.saved = false;
                        return item;
                    })
                    this.setState({ listPosts: posts });
                } else {
                    alert(`Type poster is empty`);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onRefreshPostList = () => {
        this.setState({ refreshing: true });
        fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerStyles}>
                    <Text style={styles.textTitleStyle}>Poster nổi bật</Text>
                </View>
                <ScrollView

                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <FlatList
                        data={this.state.listPosts}
                        renderItem={({ item, index }) => {
                            return (<ItemPoster
                                navigation={navigation}
                                item={item}
                            />);
                        }}
                        keyExtractor={(item, index) => `${item.id}`}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD'
    },
    headerStyles: {
        height: height / 18,
        padding: 10
    },
    textTitleStyle: {
        fontFamily: 'Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F44336',
        fontStyle: 'italic'
    },
    img_style: {
        width: (height * 0.2) + 30,
        height: height * 0.2
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
        height: (height * 0.2) / 3.8,
        justifyContent: 'center'
    },
    item_price: {
        height: (height * 0.2) / 4,
        justifyContent: 'center',
        color: '#FF3D00'
    }
});