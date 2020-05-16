//----------------------------------------------
//After you succesfully register or log in
//you are taken to this screen. It has
//a message from us and some advice on
//how to use the application
//----------------------------------------------

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = { email: "", displayName: "" };
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/LoginScreenBackground.jpg')} style={styles.image}>
                <Text style={styles.AlgText2}>{'Welcome to our Algorithm Visualizer!'}</Text>

                <Text style={styles.AlgText}>{'Our goal in this project was to be able to provide an educational tool for those studying computer science and software engineering. We felt that\n one of the best ways to do this was by providing a visual aid to help students better understand searching and sorting algorirthms.'}    
                </Text>

                <TouchableOpacity style={styles.Btn} onPress={this.signOutUser}>
                <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace", justifyContent: "center", alignContent:"center" }}>Logout</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        height: 56,
        borderRadius: 50,
        borderColor: "#262624",
        borderWidth: 5,
        position: "relative",
        fontFamily: "monospace"
    },
    BtnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "85%"
    },
    Btn: {
        backgroundColor: "#fff",
        padding: 15,
        width: "45%",
        borderRadius: 50,
        borderColor: "#262624",
        borderWidth: 5,
    },
    BtnText: {
        fontSize: 18,
        textAlign: "center",
    },
    AlgText: {
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        fontSize: 16,
        color: "#fff",
        textShadowColor: "#262624",
        textShadowOffset: { width: 0.75, height: -0.5 },
        textShadowRadius: 1,
        fontFamily: "monospace",
    },
    AlgText2: {
        textAlign: "center",
        fontSize: 24,
        color: "#fff",
        textShadowColor: "#262624",
        textShadowOffset: { width: 0.75, height: -0.5 },
        textShadowRadius: 1,
        fontFamily: "monospace",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: 'center',
    }
});
