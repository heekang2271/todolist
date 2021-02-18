import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Time from "./Time";
import google from "../img/google.png";
import naver from "../img/naver.png";
import youtube from "../img/youtube.png";
import TodoList from "./TodoList";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(200, 200, 200, 1);
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
        box-shadow: 0px 0px 3px -2px #D7D7D7;
    }
    &::-webkit-scrollbar-track {
        /* background-color: #D7D7D7; */
        background-color: transparent;
        border-radius: 10px;
        /* box-shadow: 0px 0px 2px 1px #D7D7D7; */
    }
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    & > div {
        margin: 20px;
        border-radius: 25px;
        padding: 20px;
        box-shadow: 0 3px 16px -20px rgba(50, 50, 93, 0.4),
        0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.425);
    }
`

const TimeBox = styled.div`
    width: 100%;
    height: 180px;
    background-color: #F0F0F0;

    & div:nth-child(1) {
        font-size: 14px;
        font-weight: 600;
    }
    & div:nth-child(2) {
        margin-top: 5px;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
    }
    & div:nth-child(3) {
        margin-top: 65px;
        font-size: 36px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
    }
`;

const WeatherBox = styled.div`
    width: 100%;
    height: 180px;
    background-color: #619CD2;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Error = styled.span`
    color: #FFF;
    font-size: 14px;
`;

const City = styled.div`
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
`;

const Temp = styled.div`
    margin-top: 7px;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
`;

const Icon = styled.div`
    & img {
        width: 40px;
        height: auto;
        display: block;
    }
`;

const Weather = styled.p`
    font-size: 16px;
    line-height: 1.2;
    font-weight: 500;
`;

const LogoBox = styled.a`
    display: block;
    width: 100%;
    height: 106px;
    & img {
        height: 100%;
    }
    margin: 20px;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0 3px 16px -20px rgba(50, 50, 93, 0.4),
    0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.425);

    &:hover {
        box-shadow: 0 3px 16px 0px rgba(0, 0, 0, 0.6),
        0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.625);
    }
`;

const SearchBox = styled.form`
    margin: 20px;
    border-radius: 25px;
    height: 45px;
    width: 100%;
    display: flex;
    box-shadow: 0 3px 16px -20px rgba(50, 50, 93, 0.4),
    0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.425);
    border: 2px solid #D7D7D7;
`;

const SearchBar = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 700;
    font-family: "Noto Sans KR", sans-serif;
    &::placeholder {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 700;
    }
`;

const SearchIcon = styled.button`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #D7D7D7;
    cursor: pointer;
    color: #707070;
`;

export default ({ weatherData, error }) => {
    const { city, icon, description, temp } = weatherData;
    const search = useRef();
    const searchSubmit = (e) => {
        e.preventDefault();
        if (search.current) {
            let term = search.current.value;
            term = term.replace(/ /gi, "+");
            window.open(`https://www.google.com/search?q=${term}`);
            search.current.value = "";
        }
    }

    return (
        <Container>
            <Row>
                <TimeBox>
                    <Time />
                    {/* <div>수요일</div>
                    <div>2/17</div>
                    <div>20:04</div> */}
                </TimeBox>

                <WeatherBox>
                    {error ? (
                        <Error>위치정보를<br />받을 수 없습니다.</Error>
                    ) : (
                            <>
                                <div>
                                    <City>{city}</City>
                                    <Temp>{`${temp}˚`}</Temp>
                                </div>
                                <div>
                                    <Icon>
                                        <img src={`https://openweathermap.org/img/w/${icon}.png`} />
                                    </Icon>
                                    <Weather>{ description }</Weather>
                                </div>
                            </>
                    )}
                </WeatherBox>
            </Row>
            <Row>
                <LogoBox href="https://www.google.com/" target="_blank"><img src={ google } /></LogoBox>
                <LogoBox href="https://www.naver.com/" target="_blank"><img src={ naver } /></LogoBox>
                <LogoBox href="https://www.youtube.com/" target="_blank"><img src={ youtube } /></LogoBox>
            </Row>
            <Row>
                <SearchBox onSubmit={searchSubmit}>
                    <SearchBar ref={search} type="text" placeholder="검색"/>
                    <SearchIcon type="submit">
                        <span className="material-icons">search</span>
                    </SearchIcon>
                </SearchBox>
            </Row>
            <Row>
                <TodoList />
            </Row>
        </Container>
    )
}