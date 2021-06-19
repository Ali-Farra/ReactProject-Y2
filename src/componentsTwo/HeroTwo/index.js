import { render } from '@testing-library/react';
import React, {useState} from 'react';
import NavBar from '../NavTwo';
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroButton} from './HeroElement';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const drag =()=> {
        setIsOpen(!isOpen)
    }


    return (
        <HeroContainer>
            <NavBar drag={drag}/>
            <Sidebar isOpen={isOpen} drag={drag}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Sports!</HeroH1>
                    <HeroP>Let's go creative!</HeroP>
                    <HeroButton to="/Sports/Ideas" >Ideas</HeroButton>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
