import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import DropDown from './DropDown';
import Clock from './Clock';


const Nav = () => {
  const [value, setValue] = useState(undefined);  
  const [timeDisabled, setTimeDisabled] = useState(true);

  const timeDisabling = () => {
    setTimeDisabled(!timeDisabled);
  }
  const handleChange = (e) => {
    const inputValue = e.target.value;

  // function Label({ onClick }) {
  //   return <div onClick={onClick}>{<Label htmlFor="data_algorithm">알고리즘</Label>}</div>;
  // }
  
  // function DropDown({ disabled }) {
  //   return (
  //     <select disabled={disabled}>
  //       <option>지역타입</option>
  //       <option>시작시간</option>
  //       <option>종료시간</option>
  //     </select>
  //   );
  // }


    //입력 횟수 99이하로 제한
    if (inputValue.match(/^\d{0,2}$/) 
    && (inputValue === '' || parseInt(inputValue) >= 1 && parseInt(inputValue) <= 99)
    ) {
      setValue(inputValue);
    }
  }

  // const handleAddBtnOnClick = () => {
  //   if (value === undefined) {
  //     setValue(1)
  //     return;
  //   }
  //   setValue(value + 1)
  // }
  // const handleMinusBtnOnClick = () => {
  //   if (value <= 1) {
  //     alert('1회 미만으로 설정할 수 없습니다.')
  //     return;
  //   }

  //   if (value === undefined) {
  //     setValue(1)
  //     return;
  //   }

  //   setValue(value - 1)
  // }

  const handleCheckBtnOnClick = () => {
    if (value === undefined) {
      setValue(value)
      return;
    }
    setValue(value) 
  }

  return (
    <Layout>
      <Clock />
      <NavContent>
        <RadioBox>
          <InputLabelBox>
          {/*비개발 클릭 시, 횟수 비활성화 및 1회 고정*/}
            <Label htmlFor="dev_false">비개발용</Label>
            <input type="radio" name="dev" id="dev_false" />
          </InputLabelBox>
          <InputLabelBox>
            <Label htmlFor="dev_true">개발용</Label>
            <input type="radio" name="dev" id="dev_true" />
          </InputLabelBox>
        </RadioBox>
        <RadioBox>

          <InputLabelBox>
            <Label htmlFor="data_algorithm">알고리즘</Label>
            <input type="radio" name="data" id="data_algorithm" onChange={timeDisabling}/>
          </InputLabelBox>
          <InputLabelBox>
            <Label htmlFor="data_normal">기존데이터</Label>
            <input type="radio" name="data" id="data_normal" />
          </InputLabelBox>
        </RadioBox>

        <DropDown icon={true} menuType="location" menuData={["빌링게임", "포스터시티", "팔로알토"]}>지역타입</DropDown>
        <DropDown menuType="time" disabled={timeDisabled}>시작시간</DropDown>
        <DropDown menuType="time" disabled={timeDisabled}>종료시간</DropDown>

        <InputBox>
          {/* <InputButtonBox>
            <InputButtonPlus onClick={handleAddBtnOnClick
            }>+</InputButtonPlus>
            <InputButtonMinus onClick={handleMinusBtnOnClick}>-</InputButtonMinus>
          </InputButtonBox> */}
          <InputButtonBox>
            <InputButtonCheck onClick={handleCheckBtnOnClick
            }>∨</InputButtonCheck>
          </InputButtonBox>
            value={value} placeholder={"횟수(100회 미만 가능)"} onChange={handleChange} />
          </InputBox>

        <Button bgColor="blue" width={100}>
          결과 확인
        </Button>
      </NavContent>
      <Text>※ 알고리즘 선택 시, 현재 시각 기준 알고리즘 계산한 값을 조회합니다.</Text>
    </Layout>
  );
};

export default Nav;



const Text = styled.div`
  font-size: 10px;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 390px;
  background-color: white;
  width: 280px;
  text-align: center;
  padding: 2px;
`
const Col = styled.div`
  display:flex;
  justify-content:Center;
  align-items:center;
`
const Layout = styled.div`
  display:flex;
  flex-direction: column;
  position:absolute;
  width:calc(100% - 50px) ;
  top:10px;
  left:0px;
  margin-left: 30px;
  box-sizing: border-box;
  height:auto;
  padding:10px;
  font-size:14px;
  z-index: 1;
  color:black;
  font-weight: bold;
`

const RadioBox = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:10px;
`

const InputLabelBox = styled.div`
  display:flex;
`

const Label = styled.label`
  width:100%;
  max-width:100px;
  text-align:center;
`

const InputBox = styled.div`
  width:fit-content;
  height:38px;
  position:relative;
  background-color:white;
  border-radius: 3px;
  border:1px solid rgb(125,125,125,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:8px;
`

const Input = styled.input`
width: 160px;
border:none;
background:none;
outline: none;
padding-left:10px;
padding-right:12px;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

&::placeholder{
  color:black;
  font-weight:bold;
}
`

const InputButtonBox = styled.div`
  position:absolute;
  right:0;
  /* overflow: hidden; */
`
const InputButtonPlus = styled.button`
border:none;
display:flex;
justify-content:center;
align-items:center;
  width:20px;
  height:19px;

  height:calc(auto - 1px);
  background-color:rgb(128,128,128,0.1);
  border-left:1px solid rgb(128,128,128,0.4);
  font-size:17px;
  &:hover{
    cursor: pointer;
  }

`

const InputButtonMinus = styled(InputButtonPlus)`
border-left:1px solid rgb(128,128,128,0.4);
border-top:1px solid rgb(128,128,128,0.4);
display:flex;
&:hover{
    cursor: pointer;
  }
`

const NavContent = styled.div`
    display:flex;
    width:100%;

  /* background-color:rgb(255,255,255,0.5); */
`

const InputButtonCheck = styled.button `
  height: 38px;
  border: none;
  color: rgb(113,113,113);

  &:hover{
    cursor: pointer;
    background-color: rgb(222,222,222);
    color: white;
  }
`