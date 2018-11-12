import React from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Image,
     KeyboardAvoidingView, TouchableOpacity, Dimensions, SafeAreaView }
    from 'react-native';
import { Container, Body, ListItem, Left, Right, CheckBox, Content, List, View } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ic_search = require('../images/ic_search.png');
const tim_kiem = require('../images/tim_kiem.png');
const { width, height } = Dimensions.get('window');

export default class Location extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input_location: '',
            input_m2: '',
            input_price: '',
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
        navigate('ResultSearch');
        // var values_array = [];
        // // Dia diem phai lay ra.
        // this.state.input_location === '' ? values_array.push("") : values_array.push(this.state.input_location);
        // this.state.checkBoxs1.forEach(i => {
        //     if (i.checked == true) {
        //         values_array.push(i.name);
        //     }
        //     // Neu khong check dua "" vao mang.
        // });

        // this.state.checkBoxs2.forEach(j => {
        //     if (j.checked == true) {
        //         values_array.push(j.name);
        //     }
        // });
        // this.state.input_m2 === '' ? values_array.push("") : values_array.push(this.state.input_m2);
        // this.state.input_price === '' ? values_array.push("") : values_array.push(this.state.input_price);
        // if (values_array.length > 0) {
        //     alert(`Da chon tieu chi`);
        // } else {
        //     alert(`Chua chon tieu chi`);
        // }
        // navigate('PostsScreen', { input_search: values_array })
        // return;
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
        return (<ListItem key={checkbox1.id} style={styles.itemStyle}>
            <Body>
                <Text style={styles.textBoxStyle}>{checkbox1.name}</Text>
            </Body>
            <Right>
                <CheckBox
                    color='red'
                    checked={checkbox1.checked}
                    onPress={this._handleCheckBox1.bind(this, checkbox1)} />
            </Right>
        </ListItem>);
    }

    convertProductToListItem2 = (checkbox2) => {
        return (<ListItem key={checkbox2.id} style={styles.itemStyle}>
            <Body>
                <Text style={styles.textBoxStyle}>{checkbox2.name}</Text>
            </Body>
            <Right>
                <CheckBox
                    color='red'
                    checked={checkbox2.checked}
                    onPress={this._handleCheckBox2.bind(this, checkbox2)} />
            </Right>
        </ListItem>);
    }

    _gotoHome() {
        this.props.navigation.navigate('Main');
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <SafeAreaView>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={this._gotoHome.bind(this)}>
                        <Icon name="long-arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>WallTag</Text>
                    <View />
                </View>

                <ScrollView >
                    <Container style={styles.containerStyle}>
                        <Content>
                            <ListItem style={styles.item} icon>
                                <Left>
                                    <Icon name="search" size={18} style={{ marginLeft: 15 }} />
                                </Left>
                                <Body>
                                    <TextInput underlineColorAndroid={'transparent'}
                                        style={{ fontSize: 14, fontFamily: 'Regular', fontStyle: 'italic' }}
                                        placeholder="Tên Quận/Phường/Đường" onChangeText={(input_location) => {
                                            this.setState({ input_location })
                                        }} />
                                </Body>
                            </ListItem>

                            <Text style={styles.mainTopicStyle}>BỘ LỌC</Text>
                            <Text style={styles.topicStyle}>THỂ LOẠI POSTER</Text>

                            <List style={{ marginTop: 5 }}>
                                {this.state.checkBoxs1.map(this.convertProductToListItem)}
                            </List>

                            <Text style={styles.topicStyle}>THỂ LOẠI TƯỜNG</Text>

                            <List style={{ marginTop: 5 }}>
                                {this.state.checkBoxs2.map(this.convertProductToListItem2)}
                            </List>

                            <Text style={styles.mainTopicStyle}>KÍCH THƯỚC</Text>
                            <ListItem noBorder style={styles.listItemStyle}>
                                <Body style={{ backgroundColor: '#FFFFFF' }}>
                                    <KeyboardAvoidingView behavior='padding' enabled>
                                        <TextInput underlineColorAndroid={'transparent'}
                                            style={styles.inputStyle}
                                            keyboardType="numeric"
                                            placeholder="Kích thước"
                                            onChangeText={(input_m2) => { this.state.input_m2 }}
                                        />
                                    </KeyboardAvoidingView>
                                </Body>
                                <Right>
                                    <Text style={{ fontFamily: 'Regular' }}>Mét vuông</Text>
                                </Right>
                            </ListItem>

                            <Text
                                style={styles.mainTopicStyle}>KINH PHÍ</Text>
                            <ListItem
                                noBorder style={styles.listItemStyle}>
                                <Body
                                    style={{ backgroundColor: '#FFFFFF', }}>
                                    <KeyboardAvoidingView behavior='padding' enabled>
                                        <TextInput
                                            underlineColorAndroid={'transparent'}
                                            style={styles.inputStyle}
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
                                onPress={this._handleCheckboxSelected.bind(this, navigate)}>
                                <View style={styles.wrapper}>
                                    <Image source={tim_kiem} style={styles.btnSearchStyle} />
                                </View>
                            </TouchableOpacity>
                        </Content>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const img_width = width - 40;
const img_height = (img_width * 54) / 335;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#EFEFF4', marginBottom: 20
    },
    wrapper: {
        margin: 20,
        alignItems: 'center',
        marginBottom: 40
    },
    item: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 38,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 25
    },
    headerStyle: {
        padding: 10,
        height: height / 13,
        backgroundColor: '#F44336',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    titleStyle: {
        fontFamily: 'Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    btnSearchStyle: {
        height: img_height,
        width: img_width
    },
    itemStyle: {
        marginHorizontal: 20, backgroundColor: '#FFFFFF', height: 38
    },
    listItemStyle: {
        marginHorizontal: 20,
        height: 38,
        marginTop: 5
    },
    topicStyle: {
        marginHorizontal: 20,
        fontSize: 12,
        marginTop: 15,
        fontFamily: 'Regular',
        fontWeight: 'bold',
    },
    mainTopicStyle: {
        marginHorizontal: 20,
        fontSize: 14,
        marginTop: 15,
        fontFamily: 'Regular',
        fontWeight: 'bold',
    },
    inputStyle: {
        fontSize: 14,
        height: 38,
        marginLeft: 10,
        fontStyle: 'italic'
    },
    textBoxStyle:{
        marginLeft: 15,
        fontSize: 12,
        fontFamily: 'Regular',
        fontStyle: 'italic'
    }
});