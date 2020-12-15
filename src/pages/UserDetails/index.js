import React, {useState} from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as S from'./styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function UserDetails({navigation, route}) {

    const [data, setData] = useState(route.params)
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <S.Header>
                

                <TouchableOpacity 
                style={{alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigation.goBack()}
                >
                <Icon name='arrow-back-ios' color='#fff' size={20} />
                <S.HeaderTextLocal>Voltar</S.HeaderTextLocal>
                </TouchableOpacity>
                

                <S.HeaderImageProfile 
                source={{uri: 'http://github.com/celsojuniodev.png'}}
                />

            <S.HeaderTextName>{data.name}</S.HeaderTextName>
                <S.HeaderTextLocal>{data.location}</S.HeaderTextLocal>
            </S.Header>
            <S.Container>

            <S.InfoArea>

            <S.TextTitle>Sobre</S.TextTitle>
            <S.Description>
                <S.TextDescription>
                Lorem ipsum dolor sit ametehicula purus id rutrumenatis molestquet.eros. Integer varius id neque ac congue. Sed in posuere nulla. Aliquam commodo sagittis massa, non hendrerit mauris consectetur ac.
                </S.TextDescription>
            </S.Description>
            </S.InfoArea>

            
            <S.InfoArea>

            <S.TextTitle>Especialidades</S.TextTitle>
            <S.Description>
                <S.TextDescription>
                    {data.especialidade}
                </S.TextDescription>
            </S.Description>
            </S.InfoArea>

            
            <S.InfoArea>

            <S.TextTitle>Trabalhos</S.TextTitle>
            <S.Description>
                <S.TextDescription>
                Lorem ipsum dolor sit ametehicula purus id rutrumenatis molestquet.eros. Integer varius id neque ac congue. Sed in posuere nulla. Aliquam commodo sagittis massa, non hendrerit mauris consectetur ac.
                </S.TextDescription>
            </S.Description>
            </S.InfoArea>
            
                
            </S.Container>
        </View>
    )
}
