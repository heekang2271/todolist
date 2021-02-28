import styled from "styled-components";
import { bgArr } from "./BgArr";


const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 500px;
    height: 100vh;
    
    display: flex;
    align-items: center;
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


export default ({ bgNum, blurOnLoad, children }) => {
    return (
        <Container>
            <Blur bg={bgArr[bgNum]} />
            <Image src={bgArr[bgNum]} onLoad={blurOnLoad} />
            <ContentHolder>
                {children}
            </ContentHolder>
        </Container>
    )
}