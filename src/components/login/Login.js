import React from 'react';
import {
  Text, View, TextInput, Linking,
  StyleSheet, TouchableOpacity,
  SafeAreaView, KeyboardAvoidingView, ImageBackground
}
  from 'react-native';

const bg = require('../images/bg.png');
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      token: ""
    };
  }

  componentDidMount() {
  }

  _onPressLogin() {
    this.props.navigation.navigate('Main');
    // fetch("http://192.168.100.60:8080/adsharingspace/auth/login", {
    //   "method": "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     'phoneOrEmail': this.state.user_name,
    //     'password': this.state.password
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if(responseJson.success == true){
    //       this.setState({token: responseJson.data.id});
    //       alert(this.state.token);
    //       // luu token vao AsynStore
    //       this.setState({user_name: "", password: ""})
    //       this.props.navigation.navigate('Main');
    //     }else{
    //       alert(`Tai khoan nhap chua dung!`);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <ImageBackground source={bg} style={styles.backgroundStyle}>
          <View style={styles.headerTextStyle}>
            <Text style={styles.logoText}>Wall Tag</Text>
            <Text style={styles.sologanText}>Kết nối quảng cáo hiệu quả</Text>
          </View>

          <View style={styles.loginForm}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <TextInput
                style={styles.inputStyle}
                placeholder='example@gmail.com'
                onChangeText={(user_name) => {
                  this.setState({ user_name })
                }}
              />

              <TextInput
                secureTextEntry={true}
                style={styles.inputStyle}
                placeholder='Password'
                onChangeText={(password) => {
                  this.setState({ password })
                }}
              />
            </KeyboardAvoidingView>
            <View style={styles.loginButtonStyle}>
              <TouchableOpacity onPress={this._onPressLogin.bind(this)} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                  Đăng nhập
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.registerButtonStyle}>
            <TouchableOpacity onPress={() => navigate('Register')} style={styles.buttonStyle}>
              <Text style={styles.textStyle}>
                Đăng ký
                  </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },

  topContainer: {
    flex: 2,
  },

  centerContainer: {
    flex: 6,
  },

  bottomContainer: {
    flex: 2,
  },

  backgroundStyle: {
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
    fontSize: 14
  },
  loginButtonStyle: {
    marginTop: 20
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
});

// Luu lai ID de check dang nhap lan sau.