import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import * as S from './styles'
import Logo from '../../assets/logoBlack.png'

export default ({navigation}) => {

    const banda = [
        {   
            id: '1',
            nome: 'David Getta',
            func: ['piano', 'violao', 'violino'],
            local: 'Gama, setor Sul'
        },  
        {
            id: '2',
            nome: 'Celso Junio',
            func: 'Piano, teclado e vocal',
            local: 'Gama, setor Leste'
        },
        {
            id: '3',
            nome: 'Juninho portugal',
            func: 'vocal, teclado e violãovocal, teclado e violãovocal, teclado e violão',
            local: 'Valparaiso de Goiás'
        },
        {   
            id: '4',
            nome: 'David Getta',
            func: 'Back, bateria',
            local: 'Gama, setor Sul'
        },  
        {
            id: '5',
            nome: 'Celso Junio',
            func: 'Piano, teclado e vocal',
            local: 'Gama, setor Leste'
        },
        {
            id: '6',
            nome: 'Juninho portugal',
            func: 'vocal, teclado e violão',
            local: 'Valparaiso de Goiás'
        },
        {   
            id: '7',
            nome: 'David Getta',
            func: 'Back, bateria',
            local: 'Gama, setor Sul'
        },  
        {
            id: '8',
            nome: 'Celso Junio',
            func: 'Piano, teclado e vocal',
            local: 'Gama, setor Leste'
        },
        {
            id: '9',
            nome: 'Juninho portugal',
            func: 'vocal, teclado e violão',
            local: 'Valparaiso de Goiás'
        },

    ]
    return (
        <S.Container>

            <S.Text>HOME</S.Text>
            <TouchableOpacity
            onPress={() => alert('PRESS')}
            onLongPress={() => navigation.navigate('Login')}
            >
                <S.Text>SAIR</S.Text>
            </TouchableOpacity>

            <FlatList
            data={banda}
            keyExtractor={item => item.id}
            renderItem={({item, index}) =>(
                <S.UserArea key={index}
                onPress={() => navigation.navigate('UserDetails', {name: item.nome, location: item.local, especialidade: item.func})}
                >
                   <S.CardLeft>
                       <S.ImageProfile 
                       source={{uri: 'http://github.com/celsojuniodev.png'}}
                       resizeMode="contain"
                       />
                   </S.CardLeft>
                   
                    <S.CardRight>
            <S.TextName>{item.nome}</S.TextName>
            <S.TextFunction numberOfLines={2}>{item.func}</S.TextFunction>
            
            <S.TextLocal>{item.local}</S.TextLocal>
                    </S.CardRight>
            </S.UserArea>
            )}
            />

            
        </S.Container>
        
    )
}
