import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window');


export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPass: ""
    };
  }

  _handleRegister() {
    if (this.state.password === this.state.confirmPass) {
      fetch("http://192.168.100.60:8080/adsharingspace/auth/register", {
        "method": "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          'emailOrPhone': this.state.email,
          'password': this.state.password
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == true) {
            alert(`Dang ky thanh cong`);
            this.props.navigation.navigate('Login');
          } else {
            alert(`Tai khoan da ton tai!`);
          }
        })
        .catch((error) => {
          console.error(error);
        })
    } else {
      alert('Mat khau chua dung!');
    }
  }

  _back_login(){
    this.props.navigation.navigate('Login');
  }

  render() {
    const {
      backgroundStyle,
      headerTextStyle,
      logoText,
      sologanText,
      loginForm,
      inputStyle,
      registerButtonStyle
    } = styles;

    return (
      <View style={backgroundStyle}>
        <View style={styles.headerStyles}>
          <TouchableOpacity onPress={this._back_login.bind(this)}>
            <Icon name="long-arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textTitleStyle}>Đăng ký tài khoản</Text>
          <View ></View>
        </View>
        <View style={headerTextStyle}>
          <Text style={logoText}>Chào mừng bạn đến với</Text>
          <Text style={sologanText}>WallTag</Text>
        </View>

        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={loginForm}>

            <TextInput
              style={inputStyle}
              placeholder='example@gmail.com'
              keyboardType="email-address"
              onChangeText={(email) => {
                this.setState({ email })
              }}
            />

            <TextInput
              secureTextEntry={true}
              style={inputStyle}
              placeholder='Mật khẩu'
              onChangeText={(password) => {
                this.setState({ password })
              }}
            />

            <TextInput
              secureTextEntry={true}
              style={inputStyle}
              placeholder='Nhập lại mật khẩu'
              onChangeText={(confirmPass) => {
                this.setState({ confirmPass })
              }}
            />

          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={this._handleRegister.bind(this)}>
          <View style={loginForm}>
            <Text style={inputStyle}>Dang Ky</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: '#333333',
    width: '100%',
    height: '100%'
  },
  headerTextStyle: {
    marginTop: 100,
    marginLeft: 30
  },
  logoText: {
    fontSize: 27,
    color: '#FFFFFF'
  },
  sologanText: {
    color: '#FFFFFF',
    marginTop: 10
  },
  loginForm: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  inputStyle: {
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 17
  },
  headerStyles: {
    padding: 10,
    height: height / 13,
    backgroundColor: '#F44336',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, textTitleStyle: {
    fontFamily: 'Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  }
};

