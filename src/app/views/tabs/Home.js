import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, ScrollView, RefreshControl }
    from 'react-native';
import apiManager from "../../network/APIManager";

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
                            <Text style={styles.item_textStyle}>{item.dateCreated}</Text>
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
        apiManager.request_poster(this.getPosterCallBack)
    }

    getPosterCallBack = (responseJson) => {
        if (responseJson === undefined) {
            alert(`Lỗi tải dữ liệu`)
            return
        }

        if (responseJson.success === true) {
            posts = responseJson.data.map((item, i) => {
                item.saved = false;
                return item;
            })
            this.setState({ listPosts: posts });
        } else {
            alert(`Không có dữ liệu`)
        }
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
        color: '#F44336',
        fontStyle: 'italic'
    },
    img_style: {
        width: (height * 0.2) + 30,
        height: height * 0.2
    },
    item_wrapper: {
        flex: 1,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: height * 0.2,
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    item_textStyle: {
        height: (height * 0.2) / 5.5,
        justifyContent: 'center'
    },
    item_price: {
        height: (height * 0.2) / 5.5,
        justifyContent: 'center',
        color: '#FF3D00'
    }
});