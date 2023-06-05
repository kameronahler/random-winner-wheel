import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        margin: unset;
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
