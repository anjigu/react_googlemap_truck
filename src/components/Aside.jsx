import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import DropDown from './DropDown';
import axios from 'axios';


const Aside = props => {
  const handleButtonClick = () => {
    axios.get('/order')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  return (
    <Layout>
      <Nav>
        <DropDown 
        icon={true} 
        menuType="location" 
        menuData={["set1", "set2", "set3", "set4", "set5"]}>
        Set Data.</DropDown>
        {/* <DropDown icon={true} menuType="location" menuData={["test1", "test2"]}>test no</DropDown> */}
        <Button 
        width={350} 
        type="submit"
        onClick={handleButtonClick}
        >세부 결과 확인</Button>
      </Nav>
      {/* <Title>선택한 시뮬레이션 데이터</Title>

      <SimulationList>
        <SimulationItem>시뮬레이션 지역 : {}</SimulationItem>
        <SimulationItem>시뮬레이션 시간 : {} </SimulationItem>
        <SimulationItem>트럭기준 : {}</SimulationItem>
        <SimulationItem>메뉴 조리 시간 기준 : {}</SimulationItem>
        <SimulationItem>시뮬레이션 횟수 : {}</SimulationItem>

      </SimulationList> */}
      {/* <Table>
        <TableHeader>
          <Cell>Fleet 데이터</Cell>
          <Cell></Cell>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>set 당 주문 수량 평균</Cell>
            <Cell>{}</Cell>

          </Row>

          <Row>
            <Cell>set 당 평균 배달 시간</Cell>
            <Cell>{}</Cell>

          </Row>

          <Row>
            <Cell>set 당 평균 이동 거리</Cell>
            <Cell></Cell>

          </Row>

          <Row>
            <Cell>set 당 평균 유휴 시간</Cell>
            <Cell></Cell>

          </Row>

          <Row>
            <Cell>set 당 평균 대기 시간</Cell>
            <Cell></Cell>

          </Row>


        </TableBody>
      </Table> */}
      
      <Table>
        <TableHeader>
          <Cell>Set 데이터</Cell>
          <Cell></Cell>
        </TableHeader>
         {/*표2 데이터 값*/}
        <TableBody>
          <Row>
            <Cell>배달 시작 시간</Cell>
            <Cell></Cell>
          </Row>

          <Row>
            <Cell>배달 종료 시간</Cell>
            <Cell></Cell>

          </Row>

          <Row>
            <Cell>총 배달 주문량</Cell>
            <Cell></Cell>

          </Row>

          <Row>
            <Cell>총 배달 소요 시간</Cell>
            <Cell></Cell>

          </Row>
        </TableBody>
      </Table>

    </Layout>
  );
};

Aside.propTypes = {

};

export default Aside;

const Layout = styled.div`
  width:100%;
  min-width:400px;
  max-width:400px;
  height:100%;
  background-color: whitesmoke;
  border-left: 1px solid gray;
  padding:10px;
`

const Nav = styled.div`
  display:flex;
  height:40px;
`

const Title = styled.div`
  text-align:center;
  font-weight: bold;
  margin-top:20px;
  padding-top: 30px;
`

const SimulationList = styled.ul`
font-size:14px;
padding-bottom: 30px;
`

const SimulationItem = styled.li`
font-size:15px;
`


const Table = styled.div`
width:100%;
height:auto;
border:1px solid rgb(128,128,128,0.4);
margin-top: 30px;
margin-bottom: 50px;
`

const TableHeader = styled.div`
font-weight: bold;
width:100%;
height:30px;
background: rgb(128,128,128,0.2);
display:flex;
  border-top:1px solid rgb(128,128,128,0.2);
  border-bottom:1px solid rgb(128,128,128,0.2);
`

const TableBody = styled.div`
  background-color:white;
`


const Cell = styled.div`
  width:100%;
  height:auto;
  display:flex;
  justify-content:Center;
  align-items:Center;
  border-right:1px solid rgb(128,128,128,0.2);
  border-left:1px solid rgb(128,128,128,0.2);
  border-bottom:1px solid rgb(128,128,128,0.2);
  padding: 5px;
`

const Row = styled.div`
  display:flex;
  
  
`