import { injectGlobal } from 'styled-components';
import styled, { css } from 'styled-components';
// import img from 'assets/stevanKandinsky.png';
import img from 'assets/stevanColorful.png';
import { yellow, black } from 'theme/variables'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=VT323');

    body {
        font-family: 'VT323', monospace;
        font-size: 20px;
        color: ${black};
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`



export const Background = styled.div`
    position: fixed;
    left: 10vw;
    width: 80vw;
    height: 80vh;
    top: 10vh;
    background-image: url(${img});
    background-color: ${yellow};
    opacity: 0.2;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99
`;




