import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::after,
    ::before {
        box-sizing: inherit;
    }

    html {
        font-size: 100%;
    }

    body {
        font-family: Inter, sans-serif;
        font-size: 1em;
        margin: unset;
    }

    h1 {
        font-family: inherit;
    }

    #root {
        height: 100vh;
        margin: unset;
    }

    @supports (-webkit-touch-callout: none) {
        #root {
            height: -webkit-fill-available;
        }
    }
`;

export default GlobalCss;
