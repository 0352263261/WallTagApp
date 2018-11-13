import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity }
    from 'react-native';

const { height, width } = Dimensions.get('window');

const pic2 = require('../../../images/pic2.jpg');

class ItemPost extends React.Component {

    _gotoDetailPoster() {
        const { navigation } = this.props;
        const { item } = this.props;
        navigation.navigate('DetailPost', {
            result_post: item,
            back_history: "Main"
        });
    }

    //TODO: Chinh giao dien.

    render() {
        const { item } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={pic2} />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.textInfoStyle}>{item.wallType[0].type} - {item.width * item.height}m2 - {item.price.text}K/m2</Text>
                        <TouchableOpacity onPress={this._gotoDetailPoster.bind(this)}>
                            <Text style={{ color: '#FF3D00', fontStyle: 'italic' }}>Detail>></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPosts: []
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
                this.setState({ listPosts: responseJson.data });
            } else {
                alert(`Type poster is empty`);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerStyles}>
                    <Text style={styles.textTitleStyle}>Poster nổi bật</Text>
                </View>
                <View style={{ marginBottom: 35 }}>
                    <FlatList
                        data={this.state.listPosts}
                        renderItem={({ item, index }) => {
                            return (<ItemPost
                                // name={item.wallType[0].type}
                                // size={item.width * item.height}
                                // price={item.price.text}
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
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        padding: 5,
        paddingBottom: 0
    },
    textTitleStyle: {
        fontFamily: 'Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F44336',
        fontStyle: 'italic'
    },
    textInfoStyle: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#9E9E9E',
        fontStyle: 'italic'
    },
    imageStyle: {
        width: widthImg,
        height: heightImg
    }
});