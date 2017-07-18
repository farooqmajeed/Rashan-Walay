import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
// import { DrawerView } from 'react-navigation';

class SideBar extends Component {
    render() {
        const { container, profile, avatar, name } = styles;
       
        return (
            <View style={container}>
                <View style={profile}>
                   
                    <Text style={name}> Farooq </Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    profile: {
        height: 300,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    }
};

// export default connect(state => ({
//     user: state.authentication.user
// }))(SideBar);

export default SideBar;