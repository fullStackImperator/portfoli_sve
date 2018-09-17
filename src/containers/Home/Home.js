import React, { Component } from 'react';
import { Container } from 'theme/Grid';
import { Background } from 'theme/globalStyle';
import styled from 'styled-components';
import { Image, HafenImage, RevealP } from './Home.style';
import WhenInView from 'components/WhenInView/WhenInView'


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 0,
        };
    }

    // increment() {
    //     this.setState({
    //         data: this.state.data + 1,
    //     });
    // }

    render() {
        return (
            <Container>
                <HafenImage>
                    <h1> Stevan Veljovic </h1>
                    <h2> Full-Stack Developer </h2>
                </HafenImage>
                <WhenInView>
                    {( { isInView }) =>
                        <RevealP hide={!isInView}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {( { isInView }) =>
                        <RevealP hide={!isInView}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {( { isInView }) =>
                        <RevealP hide={!isInView}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </RevealP>
                    }
                </WhenInView>
                {/*<Image src={ require("../../assets/hhHafen4pf.gif")} alt="lb-gif"/>*/}
            </Container>
        );
    }
}

                // <button onClick={this.increment.bind(this)} > Increment </button>
                // <p> {this.state.data}</p>
