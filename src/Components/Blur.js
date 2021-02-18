import React, {useState, useRef} from "react";
import styled from "styled-components";
import { bgArr } from "./BgArr";

const OPEN = "open";
const WIDTH = "500px";

const Container = styled.div`
    position: relative;
    top: 0;
    left: ${props => props.open ? "0px" : `-${WIDTH}`};
    width: ${WIDTH};
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;

    @keyframes open {
        0% {
            left: ${`-${WIDTH}`};
        }
        100% {
            left: 0px;
        }
    }

    @keyframes close {
        0% {
            left: 0px;
        }
        100% {
            left: ${`-${WIDTH}`};
        }
    }
`;

const Blur = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(10px);
`;

const Image = styled.img`
    display: none;
`;

const ContentHolder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
`;

const Button = styled.div`
    position: relative;
    width: 40px;
    height: 80px;
    color: #767676;
    background-color: #D7D7D7;
    right: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: -4px 0px 3px 3px #D7D7D7;
    cursor: pointer;
    
    & span {
        font-weight: 700;
    }
`;


export default ({ bgNum, blurOnLoad, children }) => {
    const [open, setOpen] = useState(JSON.parse(localStorage.getItem(OPEN)));
    const element = useRef();
    const clickHandler = () => {
        if (element.current) {
            if (open) {
                setOpen(false);
                element.current.style.animationName = "close";
                localStorage.setItem(OPEN, false);
            } else {
                setOpen(true);
                element.current.style.animationName = "open";
                localStorage.setItem(OPEN, true);
            }
        }
    }
    
    return (
        <Container ref={element} open={open}>
            <Blur bg={bgArr[bgNum]} />
            <Image src={bgArr[bgNum]} onLoad={blurOnLoad} />
            <Button onClick={clickHandler}>
                {open ? (
                    <span className="material-icons">arrow_back_ios</span>
                ) : (
                    <span className="material-icons">arrow_forward_ios</span>
                )}
            </Button>
            <ContentHolder>
                {children}
            </ContentHolder>
        </Container>
    )
}