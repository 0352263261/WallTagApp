import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');

const pic2 = require('../images/pic2.jpg');

class ItemPost extends React.Component {

    _gotoDetailPoster() {
        const { navigation } = this.props;
        const { item } = this.props;
        navigation.navigate('DetailPost', {
            result_post: item,
            back_history: "History"
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={pic2} />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textInfoStyle}>{this.props.name} - {this.props.size}m2 - {this.props.price}K/m2</Text>
                        <TouchableOpacity onPress={this._gotoDetailPoster.bind(this)}>
                            <Text style={{ color: '#FF3D00', fontStyle: 'italic' }}>Detail>></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPosts: [
                { id: 1, pathImg: 'Duong dan', address: 'Hoa Lac', sizePost: '45', price: '100', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
                { id: 2, pathImg: 'Duong dan', address: 'Ha Noi', sizePost: '50', price: '110', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
                { id: 3, pathImg: 'Duong dan', address: 'TP HCM', sizePost: '55', price: '120', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
            ]
        };
    }

    _back_new_feed(){
        this.props.navigation.navigate('Main');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerStyles}>
                    <TouchableOpacity onPress={this._back_new_feed.bind(this)}>
                        <Icon name="long-arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.textTitleStyle}>Poster đã lưu</Text>
                    <View ></View>
                </View>
                <View style={{ marginBottom: 35 }}>
                    <FlatList
                        data={this.state.listPosts}
                        renderItem={({ item, index }) => {
                            return (<ItemPost
                                name={item.address}
                                size={item.sizePost}
                                price={item.price}
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
        padding: 10,
        height: height / 13,
        backgroundColor: '#F44336',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapper: {
        height: height * 0.31,
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
        color: '#FFF',
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