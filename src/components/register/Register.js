import React, { Component } from 'react';
import { Text, View, TextInput, Linking, KeyboardAvoidingView, TouchableOpacity } from 'react-native';


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
      fetch("http://192.168.100.58:8080/adsharingspace/auth/register", {
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
    }else{
      alert('Mat khau chua dung!');
    }
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
        <View style={headerTextStyle}>
          <Text style={logoText}>Chào mừng bạn đền với</Text>
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
    marginRight: 30
  },
  inputStyle: {
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 17
  }
};

