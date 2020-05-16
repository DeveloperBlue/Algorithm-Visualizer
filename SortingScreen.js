import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class SortingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                    <Image
                        style={{width: 450, height: 75, marginBottom: 10}}
                        source={require('./assets/testing.png')}/>
                    
                    <View style={styles.BtnContainer}>
                        <TouchableOpacity style={styles.BtnLonger}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Generate New Array</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Merge Sort</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Quick Sort</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn}>
                            <Text style={{ color: "#474747", fontWeight: "500", fontFamily: "monospace" }}>Bubble Sort</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#383838"
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
        flexDirection: "column",
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
        marginTop: 15
    },
    BtnLonger: {
        backgroundColor: "#fff",
        padding: 15,
        width: "60%",
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
