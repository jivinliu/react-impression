/* sourceCode:start */
import React from 'react'
import { Checkbox } from 'react-impression'

const onChange = (event, label) => {
  console.log(event.target.checked)
}
const CheckBoxBasic = () => {
  return (
    <div>
      <Checkbox onChange={onChange}>CheckBox</Checkbox>
    </div>
  )
}
/* sourceCode:end */

CheckBoxBasic.title = '基本用法'
CheckBoxBasic.desc = `> 最简单的Checkbox`

export default CheckBoxBasic