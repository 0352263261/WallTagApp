import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image }
    from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

// SignOut.
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
});
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: true };
    }

    _gotoAuthenication() {
        const { navigation } = this.props;
        navigation.navigate('Authentication');
    }

    _gotoHistory() {
        const { navigation } = this.props;
        navigation.navigate('History');
    }

    _gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.navigate('Changeinfo');
    }
    _handleSignOut() {
        const { navigation } = this.props;;
        navigation.dispatch(resetAction);
    }

    render() {
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.textStyle}>Sign In</Text>
                </TouchableOpacity>
            </View>

        );

        const loginJSX = (
            <View style={styles.loginContainer}>
                <Text style={styles.textUserStyle}>Bui Ngoc Hoang</Text>
                <View>
                    <TouchableOpacity style={styles.btnSignInStyle} onPress={this._gotoHistory.bind(this)}>
                        <Text style={styles.textSignInStyle}>Lịch sử</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSignInStyle} onPress={this._gotoChangeInfo.bind(this)}>
                        <Text style={styles.textSignInStyle}>Thông tin cá nhân</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSignInStyle} onPress={this._handleSignOut.bind(this)}>
                        <Text style={styles.textSignInStyle}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const showJSX = this.state.isLogin ? loginJSX : logoutJSX;

        return (
            <View style={styles.container}>
                <Image style={styles.profileStyle}></Image>
                {showJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFD8DC',
        borderRightWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center',
    },
    profileStyle: {
        backgroundColor: '#8E24AA',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 5
    },
    btnStyle: {
        marginTop: 30,
        height: 40,
        paddingHorizontal: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textStyle: {
        color: '#EF9A9A',
        fontFamily: 'Regular',
        fontSize: 16
    },
    btnSignInStyle: {
        marginTop: 10,
        height: 40,
        paddingHorizontal: 60,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderRadius: 10
    },
    textSignInStyle: {
        color: '#EF9A9A',
        fontFamily: 'Regular',
        fontSize: 16
    },
    textUserStyle: {
        marginTop: 10,
        fontFamily: 'Regular',
        fontSize: 16
    },
    loginContainer: {
        flex: 1, justifyContent: 'space-between', alignItems: 'center'
    }
});