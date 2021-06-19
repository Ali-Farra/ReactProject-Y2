import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {IoFootballSharp} from 'react-icons/io5'

export const Nav= styled.nav `
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div `
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: #fff;


p {
    transform: transate(-175%, 100%);
    font-weight: bold;
}
`


export const Bars = styled(IoFootballSharp) `
    font-size: 2rem;
    transform: translate(-50%, -15%);
`