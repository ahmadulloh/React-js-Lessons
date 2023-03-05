import React, { Component } from "react";
import { Category, Container, Icons, Input, Wrapper } from "./style";
import Body from "./Body";
import Sidebar from "./Sidebar";
import logo from '../asstes/imgs/youtube-logo.png'

export default class Youtube extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.burger />
            <Icons.Logo src={logo} alt="Logo img" />
          </Category>
          <Category>
            <Input placeholder="Search"/>
          </Category>
          <Category>Hello somsa3</Category>
        </Wrapper>

        <Container flex>
          <Sidebar />
          <Body />
        </Container>
      </Container>
    );
  }
}
