import React from 'react';
import { Text, Image, TouchableOpacity, ImageBackground }
    from 'react-native';
import { Container, ListItem, List } from 'native-base';

const lien_he = require('../images/lien_he.png');
const back_icon = require('../images/back_icon.png');
const bghd = require('../images/bghd.png');

export default class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.navigation.state.params.resultPost
        }
    }

    _handleContact(){
        alert(`Lien he`);
    }

    render() {
        return (
            <Container style={{ flex: 10 }}>
                <Container style={{ flex: 2 }}>
                    <ImageBackground source={bghd} style={{ height: 100, flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('PostsScreen')}>
                            <Image style={{
                                height: 12, width: 27, marginBottom: 7, marginLeft: 15, padding: 4, alignItems: 'flex-start'
                            }}
                                source={back_icon}
                            />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, height: 27, color: 'white', marginLeft: 20 }}>{this.state.post.address}</Text>
                    </ImageBackground>
                </Container>

                <Container style={{ flex: 6, backgroundColor: 'EFEFF4' }}>
                    <Container style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 16, marginLeft: 20 }}>THÔNG TIN CHI TIẾT</Text>
                        <List>
                            <ListItem style={{ marginHorizontal: 20, height: 38 }}>
                                <Text style={{ fontSize: 14 }}>{this.state.post.stylePost}</Text>
                            </ListItem>

                            <ListItem style={{ marginHorizontal: 20, height: 38 }}>
                                <Text style={{ fontSize: 14 }}>{this.state.post.styleWall}</Text>
                            </ListItem>

                            <ListItem style={{ marginHorizontal: 20, height: 38 }}>
                                <Text style={{ fontSize: 14 }}>{this.state.post.sizePost} m2</Text>
                            </ListItem>

                            <ListItem style={{ marginHorizontal: 20, height: 38 }}>
                                <Text style={{ fontSize: 14 }}>Đơn giá: {this.state.post.price}k/m2</Text>
                            </ListItem>
                        </List>
                        <Text style={{ marginTop: 20, marginRight: 20, fontSize: 14, textAlign: 'right' }}>Tổng phí</Text>
                        <Text style={{ color: 'red', marginTop: 20, marginRight: 20, fontSize: 16, textAlign: 'right' }}>1,200.000 VND</Text>

                    </Container>
                </Container>

                <Container style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <TouchableOpacity 
                        onPress = {this._handleContact.bind(this)}
                        style={{ height: 54, marginHorizontal: 20, marginBottom: 20 }}>
                        <Image source={lien_he} />
                    </TouchableOpacity>
                </Container>
            </Container>
        );
    }
}