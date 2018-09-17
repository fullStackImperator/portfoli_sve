import React, { Component } from 'react';
import { Container, Flex } from 'theme/Grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H1, H2, P } from 'theme/types';


export default class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Title> About Me </Title>
                <H2 align="right"> Whaaa? Do you play a sport? Uuuh yea, I do</H2>
                <Flex>
                    <P align="right"> Check out </P>
                    <VideoContainer>
                        <ReactPlayer
                            width='100%'
                            controls
                            url={require('assets/ycMovement.mp4')}
                        />
                    </VideoContainer>
                </Flex>
            </Container>
        );
    }
}

