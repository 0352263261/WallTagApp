import React from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Image, KeyboardAvoidingView, TouchableOpacity }
    from 'react-native';
import { Container, Body, ListItem, Left, Right, CheckBox, Content, List } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ic_search = require('../images/ic_search.png');
const tim_kiem = require('../images/tim_kiem.png');

export default class Location extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input_location: '',
            input_m2: '',
            input_price: '',
            listPoster: [],
            checkBoxs1: [
                { id: 1, name: 'Poster dán tường' },
                { id: 2, name: 'Poster vẽ tường' },
                { id: 3, name: 'Poster điện tử' }
            ],
            checkBoxs2: [
                { id: 1, name: 'Tường quán cafe' },
                { id: 2, name: 'Bảng tin, tường khu dân cư, đô thị' },
                { id: 3, name: 'Bảng tin, tường khu văn phòng' }
            ],
        };
    }

    // componentDidMount(){
    //     fetch("http://192.168.100.58:8080/adsharingspace/auth/login",{
    //         "method": "POST",
    //         headers: {
    //             'Authorization': 10000,
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //           },
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         if(responseJson.success == true){
    //             this.setState({listPoster: responseJson.data});
    //         }else{
    //             alert(`Type poster is empty`);
    //         }
    //     })
    //     .catch((error)=>{
    //        console.error(error);
    //     });

    //     alert(listPoster.length);
    // }

    static navigationOptions = {
        title: 'WallTag',
        headerBackTitle: null,
        tabBarLabel: 'Tìm địa điểm',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="map-marker" size={20} color="#900" />
        ),
    }

    _onPress_Checked = () => {
        this.setState({
            check_1: !this.state.check_1
        });
    }

    _handleCheckboxSelected = (navigate) => {
        var values_array = [];
        // Dia diem phai lay ra.
        this.state.input_location === '' ? values_array.push("") : values_array.push(this.state.input_location);
        this.state.checkBoxs1.forEach(i => {
            if (i.checked == true) {
                values_array.push(i.name);
            }
            // Neu khong check dua "" vao mang.
        });

        this.state.checkBoxs2.forEach(j => {
            if (j.checked == true) {
                values_array.push(j.name);
            }
        });
        this.state.input_m2 === '' ? values_array.push("") : values_array.push(this.state.input_m2);
        this.state.input_price === '' ? values_array.push("") : values_array.push(this.state.input_price);
        if (values_array.length > 0) {
            alert(`Da chon tieu chi`);
        } else {
            alert(`Chua chon tieu chi`);
        }
        navigate('PostsScreen', { input_search: values_array })
        return;
    }

    _handleCheckBox1 = (checkbox1) => {
        this.state.checkBoxs1.forEach(p => {
            if (checkbox1.id === p.id) {
                p.checked = !p.checked;
            }
            return p;
        });
        this.setState({ checkBoxs1: this.state.checkBoxs1 });
        // AsyncStorage.setItem('@products', JSON.stringify(this.state.products));
    }

    _handleCheckBox2 = (checkbox1) => {
        this.state.checkBoxs2.forEach(p => {
            if (checkbox1.id === p.id) {
                p.checked = !p.checked;
            }
            return p;
        });
        this.setState({ checkBoxs1: this.state.checkBoxs1 });
        // AsyncStorage.setItem('@products', JSON.stringify(this.state.products));
    }

    convertProductToListItem = (checkbox1) => {
        return (<ListItem key={checkbox1.id} style={{ marginHorizontal: 20, backgroundColor: '#FFFFFF', height: 38 }}>
            <Body>
                <Text style={{ marginLeft: 15, fontSize: 12 }}>{checkbox1.name}</Text>
            </Body>
            <Right>
                <CheckBox
                    color='red'
                    checked={checkbox1.checked}
                    onPress={this._handleCheckBox1.bind(this, checkbox1)} />
            </Right>
        </ListItem>);
    }

    convertProductToListItem2 = (checkbox1) => {
        return (<ListItem key={checkbox1.id} style={{ marginHorizontal: 20, backgroundColor: '#FFFFFF', height: 38 }}>
            <Body>
                <Text style={{ marginLeft: 15, fontSize: 12 }}>{checkbox1.name}</Text>
            </Body>
            <Right>
                <CheckBox
                    color='red'
                    checked={checkbox1.checked}
                    onPress={this._handleCheckBox2.bind(this, checkbox1)} />
            </Right>
        </ListItem>);
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <ScrollView >
                <Container style={{ backgroundColor: 'EFEFF4', }}>
                    <Content>
                        <ListItem style={styles.item} icon>
                            <Left>
                                <Icon name="search" size={18} style={{ marginLeft: 15 }} />
                            </Left>
                            <Body>
                                <TextInput underlineColorAndroid={'transparent'} style={{ fontSize: 16 }}
                                    placeholder="Tim kiem dia chi" onChangeText={(input_location) => {
                                        this.setState({ input_location })
                                    }} />
                            </Body>
                        </ListItem>

                        <Text style={{ marginHorizontal: 20, fontSize: 14, marginTop: 15 }}>BỘ LỌC</Text>
                        <Text style={{ marginHorizontal: 20, fontSize: 12, marginTop: 15 }}>THỂ LOẠI POSTER</Text>

                        <List style={{ marginTop: 5 }}>
                            {this.state.checkBoxs1.map(this.convertProductToListItem)}
                        </List>

                        <Text style={{ marginHorizontal: 20, fontSize: 12, marginTop: 15 }}>THỂ LOẠI TƯỜNG</Text>

                        <List style={{ marginTop: 5 }}>
                            {this.state.checkBoxs2.map(this.convertProductToListItem2)}
                        </List>

                        <Text style={{ marginHorizontal: 20, fontSize: 14, marginTop: 15 }}>KÍCH THƯỚC</Text>
                        <ListItem noBorder style={{ marginHorizontal: 20, height: 38, marginTop: 5 }}>
                            <Body style={{ backgroundColor: '#FFFFFF', }}>
                                <KeyboardAvoidingView behavior='padding' enabled>
                                    <TextInput underlineColorAndroid={'transparent'} style={{ fontSize: 14, height: 38, marginLeft: 15 }}
                                        keyboardType="numeric"
                                        placeholder="Kích thước"
                                        onChangeText={(input_m2) => { this.state.input_m2 }}
                                    />
                                </KeyboardAvoidingView>
                            </Body>
                            <Right>
                                <Text>Mét vuông</Text>
                            </Right>
                        </ListItem>

                        <Text
                            style={{ marginHorizontal: 20, fontSize: 14, marginTop: 15 }}>KINH PHÍ</Text>
                        <ListItem
                            noBorder style={{ marginHorizontal: 20, height: 38, marginTop: 5 }}>
                            <Body
                                style={{ backgroundColor: '#FFFFFF', }}>
                                <KeyboardAvoidingView behavior='padding' enabled>
                                    <TextInput
                                        underlineColorAndroid={'transparent'} style={{ fontSize: 14, height: 38, marginLeft: 15 }}
                                        keyboardType="numeric"
                                        placeholder="Kinh phí"
                                        onChangeText={(input_price) => { this.setState({ input_price }) }}
                                    />
                                </KeyboardAvoidingView>
                            </Body>
                            <Right>
                                <Text>Triệu VNĐ</Text>
                            </Right>
                        </ListItem>

                        <TouchableOpacity
                            style={{ marginHorizontal: 20, marginVertical: 40, height: 54 }}
                            onPress={this._handleCheckboxSelected.bind(this, navigate)}
                        >
                            <Image source={tim_kiem} />
                        </TouchableOpacity>
                    </Content>
                </Container>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 38,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 25
    }
});