import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface FriendListHeaderProps {
    onEditClick: () => void;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const FriendListHeader: React.FC<FriendListHeaderProps> = ({ onEditClick, onSearchChange }) => {
   
    const navigate = useNavigate();


    const handleGoMyPage = () => {
        console.log('마이페이지 이동');
        navigate('/mypage');
    };
   
    return (
        <HeaderContainer>
            <EditContainer>
                <Button onClick={onEditClick}>
                    <EditButton2 onClick={onEditClick} src="/assets/icon.svg"></EditButton2>
                </Button>
            </EditContainer>
            <Title>친구</Title>
            <SearchInput
                type="text"
                onChange={onSearchChange}
            />
            <NewChatContainer>
                <Button onClick={handleGoMyPage}>
                    <NewChatButton src="/assets/profile (3).svg"/>
                </Button>
                <NewChatLabel onClick={handleGoMyPage}>김수현</NewChatLabel>
            </NewChatContainer>
            <DivideLine src="/assets/Vector 564.svg"/>
        </HeaderContainer>
    );
};

export default FriendListHeader;

const HeaderContainer = styled.div`
    max-width: 345px;
    margin: 13px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const EditContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
`;


const EditButton2 = styled.img`
display: block;
`;


const Button = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;

    &:active img {
        transform: scale(0.9); 
    }
`;
const SearchInput = styled.input`
    flex-grow: 1;
    border-radius: 10px;
    width: 100%;
    max-width: 345px;
    height: 39px;
    border: none;
    outline: none;
    background-color: #EAEBF1;
    margin-bottom: 29px; 
    padding: 0 16px; 
    box-sizing: border-box;
`;
const DivideLine = styled.img`
    width: 100%;
    margin-bottom: 9px;
`;
const NewChatButton = styled.img`
display: block;
`;
const NewChatContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const NewChatLabel = styled.span`
font-size: 17px;
font-weight: 600; 
margin-left: 16px;
cursor: pointer;
`;