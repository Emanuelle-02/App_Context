import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export function MyInput(props){ 
    return(
            <View style={styles.viewInput}>
                <TextInput
                    placeholder={props.textInput}
                    placeholderTextColor="#b2b2b2"
                    onChangeText={props.onChangeText}
                    style={styles.input} 
                    value={props.value}
                    keyboardType={props.keyboardType}
                    />
            </View>
    )
}

const styles = StyleSheet.create({

    viewInput:{
        flexDirection: 'row',
        alignItems: 'center',
        //borderRadius: 8,
        borderColor:'#9599a2',
        margin: 5,
        borderWidth: 1,
    },

    input: {
        flex: 1,
        margin: 10,
        color: 'black',
        fontSize: 18,
       //backgroundColor: 'white',
        borderRadius: 8,
    },
});