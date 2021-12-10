import React from "react";
import { FlatList, Text, View } from "react-native";
import { database } from "../../../Home";
import firestore from "@react-native-firebase/firestore";
import { Loja } from "../../../../models/Loja";

interface Input{
    navigation: any
}

function atualizarDados(){

    firestore()
    .collection('produto_fitness')
    .onSnapshot(document =>{
        if(database.length > 0) 
        database.splice(0, database.length);

        document.docs.map((doc) => {
            const loja = doc.data() as Loja;
            database.push({
                cod_produto: doc.id,
                ...loja
            })
       // database.push(doc.data() as Loja);
        });

        console.log(database)

    });
}

const Listar = ({ navigation } : Input) => {


    React.useEffect(() => {
        
        const subscribe = navigation.addListener('focus',
            atualizarDados
        );

        return subscribe;
        
    }, [navigation]);
    return (
        <View style={{flex:1 }}>
            <Text> Cadastros </Text>
            <FlatList 
                extraData={[]}
                data = {database}
                renderItem = {
                    ({ item }) => 
                    <Text> {item.nome}</Text>
                }
            />
        </View>
    )
};

export default Listar;