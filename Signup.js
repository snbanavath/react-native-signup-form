import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import CheckBox from '@react-native-community/checkbox';
export default function SignUpForm(){
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView>
        <View style={styles.signUpContainer}>
            <Text style={styles.formTitle}>User SignUp</Text>
            <Text style={{marginRight: 'auto', marginVertical: 5}}>Name</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput style={[styles.TextInputStyles, {width: '48%'},]} placeholder='First Name' />
                <TextInput style={[styles.TextInputStyles, {width: '48%'},]} placeholder='Last Name' />
            </View>
            <Text style={{marginRight: 'auto', marginVertical: 5}}>Email</Text>
            <TextInput style={[styles.TextInputStyles, {width: '100%'},]} placeholder='example@myapp.com' />
            <Text style={{marginRight: 'auto', marginVertical: 5}}>Mobile</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput editable={false} style={[styles.TextInputStyles, {width: '15%'},]} placeholder='+91' />
                <TextInput keyboardType='numeric' caret={true} style={[styles.TextInputStyles, {width: '83%'},]} placeholder='970XXXXX19' />
            </View>
            <Text style={{marginRight: 'auto', marginVertical: 5}}>Create Password</Text>
            <TextInput secureTextEntry={true} style={[styles.TextInputStyles, {width: '100%'},]} placeholder='be strong here' />
            <Text style={{marginRight: 'auto', marginVertical: 5}}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={[styles.TextInputStyles, {width: '100%'},]} placeholder='be same here' />
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text>Agree to our terms and Conditions</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle}><Text>SignUp</Text></TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        alignItems: 'flex-start',
        padding: 50,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    TextInputStyles: {
        borderWidth: 1,
        borderColor: '#b1b4b120',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5,
        backgroundColor: 'white',
        elevation: 3,

    },
    checkbox: {
        alignSelf: "center",
    },
    buttonStyle: {
        backgroundColor: '#987bff',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 5,
    }
})