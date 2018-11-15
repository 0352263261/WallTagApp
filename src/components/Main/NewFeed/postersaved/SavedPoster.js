import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, AsyncStorage }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');

class ItemPoster extends React.Component {
    _gotoDetail() {
        const { navigation } = this.props;
        const { item } = this.props;
        navigation.navigate('DetailPost', {
            result_post: item,
            back_history: "Main",
            type_screen: 1
        });
    }

    render() {
        const { item } = this.props;
        return (
            <View>
                <TouchableOpacity onPress={this._gotoDetail.bind(this)}>
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
            listPosts: []
        };
    }

    componentDidMount() {
        const id_user = AsyncStorage.getItem('@id_user');
        alert(id_user);
        //TODO: Lay data. ID user
        fetch("http://spring-boot-wall-tags.herokuapp.com/adsharingspace/place/favorite", {
            "method": "GET",
            headers: {
                'Authorization': 10000,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success === true) {
                    this.setState({ listPosts: responseJson.data });
                } else {
                    alert(`Có lỗi xảy ra!`);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _back_new_feed() {
        this.props.navigation.navigate('Main');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerStyles}>
                    <Text style={styles.textTitleStyle}>Poster đã lưu</Text>
                </View>
                <View style={{ marginBottom: 35 }}>
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
                </View>
            </View>
        );
    }
}

const widthImg = width - 30;
const heightImg = (widthImg * 300) / 500 - 30;

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
        color: '#FFF',
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
    img_style:{
        width: (height * 0.2) + 30,
        height: height * 0.2
    },
});