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
      fetch("https://spring-boot-wall-tags.herokuapp.com/adsharingspace/auth/register", {
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

  _back_login() {
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
    } = styles;

    return (
      <View style={backgroundStyle}>
        <View style={styles.headerStyles}>
          <TouchableOpacity style={{ justifyContent: 'center' }} onPress={this._back_login.bind(this)}>
            <Icon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.textTitleStyle}>Đăng ký tài khoản</Text>
          </View>
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

        <View style={styles.registerButtonStyle}>
          <TouchableOpacity onPress={() => navigate('Register')} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: '#2196F3',
    width: '100%',
    height: '100%'
  },
  headerTextStyle: {
    fontFamily: 'Regular',
    marginTop: 100,
    marginLeft: 30
  },
  logoText: {
    fontFamily: 'Regular',
    fontStyle: 'italic',
    fontSize: 20,
    color: '#FFFFFF'
  },
  sologanText: {
    fontFamily: 'Regular',
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 10
  },
  loginForm: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  inputStyle: {
    fontFamily: 'Regular',
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
  },
  textTitleStyle: {
    justifyContent: 'center',
    fontFamily: 'Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20,
  },
  registerButtonStyle: {
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB3349',
    height: 54
  }
};

