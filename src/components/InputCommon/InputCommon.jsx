import React, { useState } from 'react'
import styles from './style.module.scss'

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const InputCommon = ({label, type, isRequire = false}) => {
    const {labelInput, boxInput, container, boxIcon} = styles

    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const isShowTextPassword = type === 'password' && showPassword ? 'text': type

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div className={container}>
      <div className={labelInput}>{label} {isRequire && <span>*</span>}</div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && <span className={boxIcon} onClick={handleShowPassword}>
                {showPassword ? <IoEyeOffOutline/>:<IoEyeOutline/>}
            </span>}
      </div>
    </div>
  )
}

export default InputCommon
