import React, {useContext} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ResumeContext from '../contexts/ResumeProvider';

export function Page3(){
    const {list} = useContext(ResumeContext);

return(
    <View style={styles.container}>
    <View style={styles.head}>
        <Text style={styles.titulo}>RESUMO DOS DADOS: {list.length}</Text>
    </View>
    <View style={styles.listagem}>  
                <FlatList  data={list} keyExtractor={item => item.id.toString()} 
                    renderItem={ ({item}) => (
                        <View style={styles.formContainer}>
                            <Text>Dados Pessoais:</Text>
                            <Text>Nome: {item.name}</Text>
                            <Text>CPF: {item.cpf}</Text>
                            <Text>Email: {item.mail}</Text>
                        </View> 
                        
                    ) }
                />

                <FlatList  data={list} keyExtractor={item => item.id.toString()} 
                    renderItem={ ({item}) => (
                        <View style={styles.formContainer}>
                            <Text>Dados Profissionais:</Text>
                            <Text>Escolaridade: {item.nivel}</Text>
                            <Text>Idiomas: {item.linguas}</Text>
                            <Text>Experiência: {item.exp}</Text>
                        </View> 
                    ) }
                />
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

    formContainer:{
        height: 100,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#c4c3c3',
        backgroundColor: '#F4F4F4',
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

    listagem:{
        width: "95%",
    },
}
);
