import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export default function RegistrationScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [visibilityPassword, setVisibilityPassword] = useState(true);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassw, setFocusedPassw] = useState(false);
    const [focusedLogin, setFocusedLogin] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
        setFocusedEmail(false);
        setFocusedPassw(false);
        setFocusedLogin(false);
    };

    const onFocusLogin = () => {
        setIsShowKeyboard(true);
        setFocusedLogin(true);
    };

    const onBlurLogin = () => {
        setFocusedLogin(false);
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
                    flex: isShowKeyboard ? 0.8 : 0.63,
                    //width: dimensions,
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.wrap}>
                        <View style={styles.wrapPhoto}></View>
                        <View style={styles.wrapIcon}>
                            <Image
                                source={require("../assets/icon/icon-plus.png")}
                            ></Image>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.text}>Registration</Text>

                        <View style={styles.form}>
                            <View>
                                <TextInput
                                    style={[
                                        styles.input,
                                        focusedLogin && {
                                            borderColor: "#FF6C00",
                                            backgroundColor: "#fff",
                                        },
                                    ]}
                                    placeholder="Login"
                                    placeholderTextColor="#BDBDBD"
                                    onFocus={() => onFocusLogin()}
                                    onBlur={() => onBlurLogin()}
                                    value={state.login}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            login: value,
                                        }))
                                    }
                                />
                            </View>
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
                                <Text style={styles.btnTitle}>
                                    Registration
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Pressable style={{ alignItems: "center" }}>
                            <Text style={styles.linkText}>
                                Already have an account? Sign in
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

    wrap: { marginBottom: 32,
    position: "relative",
      },

    wrapPhoto: {
        position: "absolute",
              alignSelf: "center",
              top: -60,
              width: 120,
              height: 120,
              backgroundColor: "#F6F6F6",
              borderRadius: 16,
    },

    wrapIcon: {
         position: "absolute", // Zmiana na absolute

               top: 40,
               alignSelf: "center", // Wycentrowanie ikony
               transform: [{ translateX: 60 }, { translateY: -20}], // Przesunięcie o połowę szerokości ikony (12.5)
               color: "#FF6C00",
               backgroundColor: "#fff",
               borderWidth: 1,
               borderColor: "#FF6C00",
               borderRadius: 15,
               width: 25,
               height: 25,
               justifyContent: "center",
               alignItems: "center",
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
