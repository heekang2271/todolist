import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #2A2A2A;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10px;
`;

const Box = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    animation: Rotate 2s ease-in-out infinite;

    @keyframes Rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

const Text = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`;

export default () => (
    <Container>
        <Box>
            <Circle></Circle>
            <Text>LOADING</Text>
        </Box>
    </Container>
)