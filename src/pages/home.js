import React, { useState } from "react";
import { Button, Input, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function  Home()  {
  const  [resNum, setButtonAdd] =  useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  function handleInput1(e) {
     return setValue1(e.target.value)
  }
  function handleInput2(e) {
    return setValue2(e.target.value)
  }
  function changeRadio(e) {
    return setRadioValue(e.target.value)
  }
  function handleClick()  {
    return setButtonAdd( eval(Number(value1) + radioValue + Number(value2)));
  }

  return <div>
    <p>useState ： 计算器</p>
    <div>
        <Input placeholder="Basic usage" value={value1} onChange={handleInput1} />
        <Radio.Group defaultValue="+" size="small" style={{ marginTop: 16 }} value={radioValue} onChange={changeRadio}>
          <Radio.Button value="+">+</Radio.Button>
          <Radio.Button value="-">-</Radio.Button>
          <Radio.Button value="*">*</Radio.Button>
          <Radio.Button value="/">/</Radio.Button>
        </Radio.Group>
        <Input placeholder="Basic usage" value={value2} onChange={handleInput2} />
    </div>
    <Button type="primary" onClick={handleClick}>
        计算
    </Button>
      <div>结果是: {resNum}</div>
  </div> 
}