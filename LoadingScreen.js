//------------------------------------------------------------
// This screen essentially acts as the primary connection
// to firebase; the authentication and state saving 
// is done here. This is the screen that allows you 
// to log in once, close the app, and return to the 
// activity you were just at.
//------------------------------------------------------------

import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        // Font.loadAsync({
        //     'Ubuntu-Title': require('./assets/Ubuntu-Title.ttf'),
        // });

        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
