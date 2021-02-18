import React from "react";
import styled from "styled-components";
import { bgArr } from "./BgArr";

const BackGround = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
    object-position: center center;
`;

export default ({ bgNum, bgOnLoad }) => {
    return (
        <BackGround src={ bgArr[bgNum] } onLoad={bgOnLoad}
        />
    )
}