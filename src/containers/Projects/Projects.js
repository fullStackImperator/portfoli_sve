import React, { Component } from 'react';
// import { Background } from './Projects.style';
import { Background } from 'theme/globalStyle';
import { Container, Relative, Flex } from 'theme/Grid';
import { A } from 'theme/types';
import { ImageButton, Index, ImageContainer, Title } from './Projects.style'
import ParallaxImage from 'react-image-parallax2';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <Title> Completed Projects </Title>
                <Relative marginTop="100px" marginBottom="50px">
                    <Index>
                        <h1>01</h1>
                    </Index>
                    <h1> First Project - <A href=""> Interactive Dashboards </A> </h1>
                </Relative>
                <Flex justify={'center'} marginBottom="4em">
                    Image here
                </Flex>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>02</h1>
                    </Index>
                    <h1> Second Project - <A href=""> Online Option Pricer </A> </h1>
                </Relative>
                <Flex justify={'center'}>
                    Image here
                </Flex>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>03</h1>
                    </Index>
                    <h1> Third Project - <A href=""> Zertifikate Tracker </A> </h1>
                </Relative>
                <ImageContainer>
                    <ParallaxImage
                        reduceHeight={1/3}
                        src="https://picsum.photos/g/200/300"
                    />
                </ImageContainer>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>04</h1>
                    </Index>
                    <h1> Fourth Project - <A href=""> Digitales DGSVO für Ärtzte </A> </h1>
                </Relative>
                <ImageContainer>
                    <ParallaxImage
                        reduceHeight={1/3}
                        src="https://picsum.photos/g/200/300"
                    />
                </ImageContainer>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>04</h1>
                    </Index>
                    <h1> Fifth Project - <A href=""> What Do I need? App </A> </h1>
                </Relative>
                <ImageContainer>
                    <ParallaxImage
                        reduceHeight={1/3}
                        src="https://picsum.photos/g/200/300"
                    />
                </ImageContainer>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>04</h1>
                    </Index>
                    <h1> Sixth Project - <A href=""> Blockchain API </A> </h1>
                </Relative>
                <ImageContainer>
                    <ParallaxImage
                        reduceHeight={1/3}
                        src="https://picsum.photos/g/200/300"
                    />
                </ImageContainer>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
        );
    }
}
/*
                <ReactZoomy
                    imageUrl={require('assets/stanford.png')}
                    renderThumbnail={({ showImage }) =>
                        <button onClick={showImage}>Show Image</button>
                    }
                />
*/

/*
                <ReactZoomy
                    // imageUrl={require('assets/stanford.png')}
                    imageUrl={'https://images.unsplash.com/photo-1441986300917-64674bd600d8?dpr=2&auto=format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop='}
                    renderThumbnail={({ showImage }) => <button onClick={showImage}>Show Image</button>}
                    // scale={[1.1, 1.1]}
                    // imageProps={{
                    //     style: {
                    //         width: '100vw',
                    //         height: 'auto',
                    //     }
                    // }}
                />

*/
