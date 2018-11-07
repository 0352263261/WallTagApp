import React from 'react';
import { Text, Image, Dimensions }
    from 'react-native';
import { Container, Body, ListItem, Left, Right, CheckBox, Content, List } from 'native-base';
import DetailPost from "../Detail/DetailPost";

var width = Dimensions.get('window').width;
export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_search : this.props.navigation.state.params.input_search,
            resultPosts: [
                { id: 1, pathImg: 'Duong dan', address: 'Hoa Lac', sizePost: '45', price: '100', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
                { id: 2, pathImg: 'Duong dan', address: 'Ha Noi', sizePost: '50', price: '110', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
                { id: 3, pathImg: 'Duong dan', address: 'TP HCM', sizePost: '55', price: '120', stylePost: 'Poster dan tuong', styleWall: 'bang tin' },
                { id: 4, pathImg: 'Duong dan', address: 'Da Nang', sizePost: '65', price: '130', stylePost: 'Poster dan tuong', styleWall: 'bang tin' }
            ]
        };
    }

    componentDidMount(){
        alert(this.state.input_search.length);
    }

    static navigationOptions = {
        title: 'Kết quả tìm kiếm'
    }

    _handlePostSelected = (resultPost) => {
        this.props.navigation.navigate('DetailPost', { resultPost: resultPost });
    }

    convertPostToListItem = (resultPost) => {
        return (
            <ListItem icon key={resultPost.id} style={{ backgroundColor: 'skyblue', height: 196, marginHorizontal: 20, marginTop: 15 }}
                button onPress={this._handlePostSelected.bind(this, resultPost)}
            >
                <Body>
                    <Image style={{ height: 156, backgroundColor: 'red' }}></Image>
                    <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 5 }}>
                        {resultPost.address} - {`${resultPost.sizePost}m2`} - {`${resultPost.price}k/m2`}
                    </Text>
                </Body>
            </ListItem>);
    }

    render() {
        return (
            <Container>
                <Content style={{ flex: 1 }}>
                    <List>
                        {this.state.resultPosts.map(this.convertPostToListItem)}
                    </List>
                </Content>
            </Container>);
    }
}