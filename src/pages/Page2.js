import React, { useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MyInput} from '../components/MyInput';
import ResumeContext from '../contexts/ResumeProvider';


export function Page2({navigation}){ 
    const { salvarDados } = useContext(ResumeContext);
    const [escolaridade,setEscolaridade] = useState('');
    const [idiomas, setIdiomas] = useState('');
    const [experiencia,setExperiencia] = useState('');
    
    async function handleSave() {
        const data ={
            id: 2,
            nivel: escolaridade,
            linguas: idiomas,
            exp: experiencia,
        }
        
        salvarDados(data);
        navigation.navigate('home');
    }

    return(
        <View style={styles.container}>
            <View style={ styles.head}>
                <Text style={styles.titulo}>DADOS PROFISSIONAIS</Text>
            </View>
            <View style={styles.formContainer}>
                <MyInput textInput="Nível de escolaridade: " value = {escolaridade} onChangeText={setEscolaridade} /> 
                <MyInput textInput="Idiomas: "  value = {idiomas} onChangeText={setIdiomas} /> 
                <MyInput textInput="Experiência: "  value = {experiencia} onChangeText={setExperiencia} />
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
        justifyContent: 'center',
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

    viewInput:{
        flexDirection: 'row',
        alignItems: 'center',
        //borderRadius: 8,
        borderColor:'#9599a2',
        margin: 5,
        borderWidth: 1,
    },
});