import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');

const pic2 = require('../../../images/pic2.jpg');

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
        const {item} = this.props;
        return (
            <View>
                <TouchableOpacity onPress={this._gotoDetail.bind(this)}>
                    <View style={styles.item_wrapper}>
                        <View style={{ backgroundColor: 'red', flex: 2 }}>
                            {/* <Image source={pic2} style={{width: img_width, height: img_height}}/> */}
                        </View>
                        <View style={{ flex: 3, marginLeft: 10, padding: 10 }}>
                            <Text style={styles.item_textStyle}>WallType</Text>
                            <Text style={styles.item_textStyle}>PosterType</Text>
                            <Text style={styles.item_textStyle}>Kich thuoc</Text>
                            <Text style={styles.item_price}>Gia</Text>
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

    componentDidMount(){
        //TODO: Lay data
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
    }
});