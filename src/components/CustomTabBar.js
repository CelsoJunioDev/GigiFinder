import React from 'react'
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export default ({ navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem >
                <HomeIcon width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem >
                <SearchIcon width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem >
                <SearchIcon width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem >
                <SearchIcon width="24" height="24" fill="#FFFFFF" />
            </TabItem>          
        </TabArea>
    );
}