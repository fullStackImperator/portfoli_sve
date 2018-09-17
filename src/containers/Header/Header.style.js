import styled from 'styled-components';
import { Flex, Div } from 'theme/Grid';
import { blue, yellow, red } from 'theme/variables';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    width: 100%;
    right: 0;
    // right: 2em;
    // top: 1.8em;
    color: ${red};
    box-shadow: 0px 5px 5px grey;
`;

export const NavItem = styled(NavLink)`
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${blue};
    position: relative;
    text-decoration: none;

    &:hover {
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: red;
            z-index: -1;
            transform: scale(1.3, 1.5);
        }
    }

`;
