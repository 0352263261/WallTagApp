import React from 'react';
import {
    Text, StyleSheet, ScrollView, TextInput, Image,
    KeyboardAvoidingView, TouchableOpacity, Dimensions, SafeAreaView
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Container, Body, ListItem, Left, Right, CheckBox, Content, List, View } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ic_search = require('../images/ic_search.png');
const tim_kiem = require('../images/tim_kiem.png');
const { width, height } = Dimensions.get('window');

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

export default class Location extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input_location: '',
            input_m2: '',
            input_price: '',
            data: '',
            detail: '',
            checkBoxs1: [
                { id: 10000, name: 'Poster dán tường' },
                { id: 10001, name: 'Poster vẽ tường' },
                { id: 10002, name: 'Poster điện tử' }
            ],
            checkBoxs2: [
                { id: 10000, name: 'Tường quán cafe' },
                { id: 10001, name: 'Bảng tin, tường khu dân cư, đô thị' },
                { id: 10002, name: 'Bảng tin, tường khu văn phòng' }
            ],
        };
    }

    componentDidMount() {
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

    _handleSearching = (navigate) => {
        var values_array = "lat=20.979732&lng=105.787902&id_poster=";
        // this.state.input_location === '' ? values_array+"" : values_array + this.state.input_location;
        this.state.checkBoxs1.forEach(i => {
            if (i.checked === true) {
                console.log('true', i);
                values_array += i.id + ",";
            }
        });
        values_array += "&id_wall=";
        this.state.checkBoxs2.forEach(j => {
            if (j.checked === true) {
                values_array += j.id + ","
            }
        });
        values_array += "&" + this.state.input_price;
        console.log(this.state.search_style);
        // this.state.input_price === '' ? values_array.push("") : values_array.push(this.state.input_price);
        navigate('ResultSearch', { input_search: values_array })
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
                            <GooglePlacesAutocomplete
                                placeholder='Search'
                                minLength={2}
                                autoFocus={false}
                                returnKeyType={'search'}
                                listViewDisplayed='auto'
                                fetchDetails={true}
                                renderDescription={row => row.description}
                                onPress={(data, details = null) => {
                                    console.log(data, details);
                                    this.setState({ data: data });
                                    this.setState({ detail: details });

                                }}

                                getDefaultValue={() => ''}

                                query={{
                                    key: 'AIzaSyCgD9kYZrWSpOyastga8co513G7G58_TGg',
                                    language: 'vi',
                                    types: '(cities)'
                                }}

                                styles={{
                                    textInputContainer: {
                                        width: "100%",
                                        backgroundColor: "#FFF",
                                        borderRadius: 60,
                                        padding: 4,
                                        margin: 10,
                                        shadowColor: "#263238",
                                        shadowOffset: { width: 0, height: 3 },
                                        shadowRadius: 5,
                                        shadowOpacity: 1.0,
                                        justifyContent: 'center'
                                    },
                                }}

                                // currentLocation={true}
                                nearbyPlacesAPI='GooglePlacesSearch'
                                GoogleReverseGeocodingQuery={{
                                }}
                                GooglePlacesSearchQuery={{
                                    rankby: 'distance',
                                    types: 'food'
                                }}

                                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                                // predefinedPlaces={[homePlace, workPlace]}

                                debounce={200}
                                renderLeftButton={() => <Icon name="search" size={18} style={{ marginLeft: 15, justifyContent: 'center' }} />}
                            />

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
                                onPress={this._handleSearching.bind(this, navigate)}>
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
    textBoxStyle: {
        marginLeft: 15,
        fontSize: 12,
        fontFamily: 'Regular',
        fontStyle: 'italic'
    }
});