import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../contains/color'
import * as Animatable from 'react-native-animatable';

const InputPass = (props) => {

    const [data, setData] = React.useState({
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidPassword: true,
    })

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
            val = props.passwordInital
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const onChange_handle = () => {
        (val)  => handlePasswordChange(val)
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.containerBig}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={20}
                style={styles.container}
            >
                <Entypo
                    name={props.inputIconLeft}
                    size={20}
                    style={styles.iconLeftStyle}
                ></Entypo>
                <TextInput
                    style={[styles.inputStyle]}
                    placeholder={props.inputName}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    //onChangeText = {onChange_handle}   
                    onChangeText = { props.setPassText }        
                />

                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                        <Entypo
                            name='eye-with-line'
                            size={20}
                            style={styles.iconRightStyle}
                        ></Entypo>
                        :
                        <Entypo
                            name='eye'
                            size={20}
                            style={styles.iconRightStyle}
                        ></Entypo>
                    }
                </TouchableOpacity>
            </KeyboardAvoidingView>

            {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorPassword}>Password must be 8 characters long !</Text>
                </Animatable.View>
            }
        </View>
    )
}

export default InputPass

const styles = StyleSheet.create({
    containerBig: {
        marginHorizontal: 25,
        marginBottom: 15,
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    iconLeftStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '80%',
        fontSize: 16,
    },
    iconRightStyle: {
        color: color.textGray,
        width: '100%'
    },
    errorPassword: {
        color: color.errorColor,
        marginLeft: 20,
    }
})