import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElement';

const SidebarElement = ({isOpen, drag}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={drag}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Cars</SidebarLink>
                <SidebarLink to="/">Computers & Laptops</SidebarLink>
                <SidebarLink to="/">Phones</SidebarLink>
                <SidebarLink to="/">AI & Robots</SidebarLink>
                <SidebarLink to="/">Cameras</SidebarLink>
                <SidebarLink to="/">Accessories</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/Sports">{`Sports =>>`}</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SidebarElement