import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/LoginScreenBackground.jpg')} style={styles.image}>

                    <Text style={styles.AlgText}>Algorithm</Text>
                    <Text style={styles.VisText}>Visualization</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="EMAIL ADDRESS"
                        placeholderTextColor="#949191"
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="PASSWORD"
                        placeholderTextColor="#949191"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                    <View style={styles.BtnContainer}>
                        <TouchableOpacity style={styles.Btn} onPress={this.handleLogin}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Sign in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn} onPress={() => this.props.navigation.navigate("Register")}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
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
        textAlign: "left",
        alignSelf: "stretch",
        fontSize: 36,
        justifyContent: "flex-start",
        paddingLeft: 30,
        color: "#fff",
        textShadowColor: "#262624",
        textShadowOffset: { width: 0.75, height: -0.5 },
        textShadowRadius: 1,
        fontFamily: "monospace",
    },
    VisText: {
        textAlign: "left",
        alignSelf: "stretch",
        fontSize: 36,
        justifyContent: "flex-start",
        paddingLeft: 30,
        color: "#fff",
        textShadowColor: "#262624",
        textShadowOffset: { width: 0.75, height: -0.5 },
        textShadowRadius: 1,
        fontFamily: "monospace"

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
