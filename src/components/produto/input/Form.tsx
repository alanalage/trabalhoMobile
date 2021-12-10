import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Loja } from "../../../models/Loja";

interface Input{
    loja: Loja,
    setLoja: any
}

const Form = ({loja, setLoja}: Input) => {

    

    return(
        <View>
            <TextInput placeholder="Nome do Produto"
                value={loja.nome}
                onChangeText={ text => setLoja({
                    ...loja,
                    nome: text
                })}
            />
            <TextInput placeholder="Codigo do Produto"
                
                value={loja.cod_produto?.toString()}
                onChangeText={ text => setLoja({
                    ...loja,
                    cod_produto: text
                })}
            />
            <TextInput placeholder="Seção"
                value={loja.secao}
                onChangeText={ text => setLoja({
                    ...loja,
                    secao: text
                })}
            />
            <TextInput placeholder="Valor da Venda"
                keyboardType='numeric'
                value={loja.valor_venda?.toString()}
                onChangeText={ text => setLoja({
                    ...loja,
                    valor_venda: text
                })}
            />
            <TextInput placeholder="Descrição do Produto"
                value={loja.descricao}
                onChangeText={ text => setLoja({
                    ...loja,
                    descricao: text
                })}
            />
            <TextInput placeholder="Marca"
                value={loja.marca}
                onChangeText={ text => setLoja({
                    ...loja,
                    marca: text
                })}
            />
            <TextInput placeholder="Modalidade"
                value={loja.modalidade}
                onChangeText={ text => setLoja({
                    ...loja,
                    modalidade: text
                })}
            />
            <TextInput placeholder="Valor da Compra"
                keyboardType='numeric'
                value={loja.valor_compra?.toString()}
                onChangeText={ text => setLoja({
                    ...loja,
                    vvalor_compra: text
                })}
            />            
        </View>
    )
         
}

export default Form;