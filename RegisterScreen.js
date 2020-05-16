import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/LoginScreenBackground.jpg')} style={styles.image}>
                    <Text style={styles.TopText}>Sign up to get started</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="NAME"
                        placeholderTextColor="#949191"
                        autoCapitalize="none"
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                    ></TextInput>

                    <TextInput
                        placeholder="EMAIL ADDRESS"
                        placeholderTextColor="#949191"
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    ></TextInput>

                    <TextInput
                        placeholder="PASSWORD"
                        placeholderTextColor="#949191"
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    ></TextInput>


                    <TouchableOpacity style={styles.Btn} onPress={this.handleSignUp}>
                        <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace", alignContent: "center", justifyContent: "center"}}>Sign up</Text>
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
    TopText: {
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
