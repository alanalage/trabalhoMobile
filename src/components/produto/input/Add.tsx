import { firebase, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import React, { useState } from "react";
import { Button, View } from "react-native";
import { Loja } from "../../../models/Loja";
import { database } from "../../Home";
import Form from "./Form";
import firestore from '@react-native-firebase/firestore'

function salvar (loja: Loja){
    firestore()
    .collection ('pro_fitness')
    .add(loja)
    .then((data) =>{
        console.log(data);
        console.log("Novo Produto Criado!");
    });
}

const Add = () => {

    const [loja, setLoja] = useState<Partial<Loja>>({});

    return (
        <View>
            <Form loja={loja as Loja} setLoja = {setLoja}/>
            <Button title='Salvar'
             onPress={ () => {
                 salvar(loja as Loja)
             }}/>
        </View>
    )

};

export default Add;