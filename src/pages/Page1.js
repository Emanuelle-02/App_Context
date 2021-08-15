import React, { useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MyInput} from '../components/MyInput';
import ResumeContext from '../contexts/ResumeProvider';

export function Page1({navigation}){
    const { salvarDados } = useContext(ResumeContext);

    const [user,setUser] = useState('');
    const [cpf, setCpf] = useState('');
    const [email,setEmail] = useState('');

    async function handleSave() {
        const data ={
            id: 1,
            name: user,  
            cpf: cpf,
            mail: email,
        }
       
        salvarDados(data);
        navigation.navigate('home');
    }
    
    return(
        <View style={styles.container}>
            <View style={ styles.head}>
                <Text style={styles.titulo}>DADOS PESSOAIS</Text>
            </View>
            
            <View style={styles.formContainer}>
                <MyInput textInput="Nome: " value = {user} onChangeText={setUser} /> 
                <MyInput textInput="CPF: " value = {cpf} onChangeText={setCpf} keyboardType="numeric" /> 
                <MyInput textInput="Email: " value = {email} onChangeText={setEmail} />
                <TouchableOpacity style= {styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 35,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
    head:{
        width: '100%',
        marginTop: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

    titulo:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },

    formContainer:{
        width: "85%",
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    button: {
        backgroundColor: 'black',
        marginTop: 25,
        width: 280,
        padding: 10,
        borderRadius: 5,  
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

});