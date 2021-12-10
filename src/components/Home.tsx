import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import { Loja } from "../models/Loja";


export let database : Loja [] = [{
    nome: 'Sem Registro',
}];

interface Input{
    navigation: any
}

export const Home = ( {navigation} : Input)=> {
    return (
        <View>
             <Button
                title="Novo"
                onPress={() => navigation.navigate('Novo')}/>
            <Button
                title="Editar"
                onPress={() => navigation.navigate('Editar')}/>
            <Button
                title="Listar"
                onPress={() => navigation.navigate('Listar')}/>   
             
        </View>
    );
};

export default Home;