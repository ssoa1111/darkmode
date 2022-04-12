import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';


const DarkMode = ({onToggle, toggle}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        },1000);
        return () => clearInterval(id);
    },[]);

    return (
        <Container>
            <HeaderWrapper>
                <h1>HongTeacher</h1>
                {!toggle ? (<DarkButton onClick={onToggle} />) : (<LightButton onClick={onToggle} />)}
            </HeaderWrapper>
            <DateTimer>{time.toLocaleDateString()}</DateTimer>
            <HourTimer>{time.toLocaleTimeString()}</HourTimer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-size: 40px;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: ${(props) => props.theme.headerColor};
    h1{
        color: ${(props) => props.theme.headerTextColor};
        font-size: 40px;
    }
`;

const DateTimer = styled.p`
    font-size: 150%;
    text-align: center;
    margin-top: 100px;
`;

const HourTimer = styled.p`
    font-size: 200%;
    text-align: center;
`;

//html 태그 이외의 스타일을 꾸며줄 때 소괄호()로 묶어서 사용
const DarkButton = styled(MdDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;
const LightButton = styled(MdOutlineDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;


export default DarkMode;