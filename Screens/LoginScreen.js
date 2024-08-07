import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

const initialState = {
    email: "",
    password: "",
};

export default function LoginScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [visibilityPassword, setVisibilityPassword] = useState(true);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassw, setFocusedPassw] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
        setFocusedEmail(false);
        setFocusedPassw(false);
    };

    const onFocusEmail = () => {
        setIsShowKeyboard(true);
        setFocusedEmail(true);
    };

    const onBlurEmail = () => {
        setFocusedEmail(false);
    };

    const onFocusPassw = () => {
        setIsShowKeyboard(true);
        setFocusedPassw(true);
    };

    const onBlurPassw = () => {
        setFocusedPassw(false);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
                style={{
                    ...styles.container,
                    flex: isShowKeyboard ? 0.68 : 0.61,
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View>
                        <Text style={styles.text}>Sign in</Text>

                        <View style={styles.form}>
                            <View style={{ marginTop: 16 }}>
                                <TextInput
                                    style={[
                                        styles.input,
                                        focusedEmail && {
                                            borderColor: "#FF6C00",
                                            backgroundColor: "#fff",
                                        },
                                    ]}
                                    placeholder="Email"
                                    placeholderTextColor="#BDBDBD"
                                    onFocus={() => onFocusEmail()}
                                    onBlur={() => onBlurEmail()}
                                    value={state.email}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            email: value,
                                        }))
                                    }
                                />
                            </View>
                            <View style={styles.inputPassword} floatingLabel>
                                <TextInput
                                    style={[
                                        styles.input,
                                        focusedPassw && {
                                            borderColor: "#FF6C00",
                                            backgroundColor: "#fff",
                                        },
                                    ]}
                                    secureTextEntry={visibilityPassword}
                                    placeholder="Password"
                                    placeholderTextColor="#BDBDBD"
                                    onFocus={() => onFocusPassw()}
                                    onBlur={() => onBlurPassw()}
                                    value={state.password}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            password: value,
                                        }))
                                    }
                                />
                                <Text
                                    style={styles.textBtn}
                                    onPress={() =>
                                        setVisibilityPassword(
                                            !visibilityPassword
                                        )
                                    }
                                >
                                    {visibilityPassword
                                        ? "Show"
                                        : "Hide"}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.btn}
                                onPress={keyboardHide}
                            >
                                <Text style={styles.btnTitle}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <Pressable style={{ alignItems: "center" }}>
                            <Text style={styles.linkText}>
                                Don't have an account? Register now
                            </Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        margin: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },

    text: {
        marginTop: 32,
        marginBottom: 32,
        fontSize: 30,
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#212121",
    },

    textBtn: {
        position: "absolute",
        right: 16,
        top: 12,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
    },

    form: {
        marginBottom: 16,
    },

    inputPassword: { marginTop: 16 },

    input: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",

        textAlign: "left",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#212121",
    },

    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    btnTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },

    linkText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
        alignItems: "center",
    },
});
