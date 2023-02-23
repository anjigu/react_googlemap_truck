import React from 'react';
import styled from 'styled-components';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Map from '../components/Map';

const Main = (props) => {

  return (
    <Layout>
      <Col>
        <Header>
        </Header>
        <Row>
          <Map />
          <Aside />
        </Row>
      </Col>
      {/* <Button
</Row>
      </Col>
      width={100} height={50} text={"button"} /> */}
    </Layout>
  );
};



export default Main;

const Layout = styled.div`
        display:flex;
        width:100%;
        height:100%;
        position:relative;
        /* background-color:red; */
        `

const Row = styled.div`
        display:flex;
        width:100%;
        height:100%;
        `
const Col = styled.div`
        display:flex;
        flex-direction: column;
        width:100%;
        height:100%;
        `

