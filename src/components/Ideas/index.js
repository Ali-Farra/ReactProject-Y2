import React from 'react'
import {
    IdeasContainer,
    IdeasHeading,
    IdeaImg,
    IdeaInfo,
    IdeaName,
    IdeaBio,
    IdeaNotice,
    IdeaCard,
    IdeasWrapper,

} from './IdeasElement'

const Ideas = ({heading, data}) => {
    return (
        <IdeasContainer >
             <IdeasHeading>{heading}</IdeasHeading>
             <IdeasWrapper>
                {data.map((Idea, index) => {
                    return(
                        <IdeaCard key={index}>
                            <IdeaImg src={Idea.img} alt={Idea.alt} />
                            <IdeaInfo>
                                <IdeaName>{Idea.Name}</IdeaName>
                                <IdeaBio>{Idea.about}</IdeaBio>
                                <IdeaNotice>{Idea.notice}</IdeaNotice>
                            </IdeaInfo>
                        </IdeaCard>
                    )
                })}
            </IdeasWrapper>
        </IdeasContainer>
    )
}

export default Ideas;
