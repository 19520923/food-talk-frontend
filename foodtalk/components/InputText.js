import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../contains/color'

const InputText = (props) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            style={styles.container}
        >
            <Entypo
                name={props.inputIcon}
                size={20}
                style={styles.iconStyle}
            ></Entypo>
            <TextInput
                style={styles.inputStyle}
                placeholder={props.inputName}
                onChangeText={props.setNameText}
            />
        </KeyboardAvoidingView>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 15,
        alignItems: 'center',
    },
    iconStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '90%',
        fontSize: 16,
    }
})