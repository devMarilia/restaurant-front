import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: var(--primary);
        font-family: 'Roboto', sans-serif;
    }
    :root {
        --primary: #233000;
        --secondary: #5E6600;
        --tertiary: #9CAA00;
        --quaternary: #0000;
        --quinary: #4D4D4D;
        --senary: #B0B0B0;
        --septenary: #FFFF;
        --large-text: 32px; // h1
        --medium-text: 24px; // h2
        --small-text: 16px; // h3
    }

    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: var(--tertiary);
    }
    li {
        display: list-item;
        list-style: none;
    }

`;