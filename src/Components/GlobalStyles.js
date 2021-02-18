import React from "react";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Noto Sans KR", sans-serif;
        position: relative;
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .show {
        display: block;
    }

    .hide {
        display: none;
    }
`;

export default GlobalStyles;