import React, { useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SimplesContext from '../contexts/SimplesProvider';


export function Home({navigation}){
    const {user1} = useContext(SimplesContext);

    return(
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="white"/>
            <View style={ styles.head}>
                <Text style={styles.titulo}>ATIVIDADE CONTEXT - {user1}</Text>
            </View>

            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('page1')}>
                <Text style={styles.buttonText}>Dados Pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('page2')}>
                <Text style={styles.buttonText}>Dados Profissionais</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={()=>navigation.navigate('page3')}>
                <Text style={styles.buttonText}>Resumo dos Dados</Text>
            </TouchableOpacity>
            
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