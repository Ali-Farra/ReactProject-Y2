import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElement';

const SidebarElement = ({isOpen, drag}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={drag}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Stadiums</SidebarLink>
                <SidebarLink to="/">World Records</SidebarLink>
                <SidebarLink to="/">Ultimate Teams</SidebarLink>
                <SidebarLink to="/">Best Players</SidebarLink>
                <SidebarLink to="/">Facts</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">{`Tech =>>`} </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SidebarElement