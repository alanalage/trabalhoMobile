import React, { useState } from "react";
import { Button, View } from "react-native";
import { Loja } from "../../../models/Loja";
import Form from "./Form";


function editar (){
    console.log("Editar");
}

function Edit(){
    const [loja, setLoja] = useState<Partial<Loja>>({
        cod_produto: '1',
        nome: 'tenis',
        valor_venda: 100.00,
        secao: 'calçados',
        descricao: 'tenis preto',
        marca: 'nike',
        modalidade: 'corrida',
        valor_compra: 100.00
    });

    return (<View>
        <Form loja = {loja as Loja} setLoja={setLoja} />
        <Button
            title="Salvar Alterações"
            onPress= { editar } />
    </View>)
}

export default Edit;