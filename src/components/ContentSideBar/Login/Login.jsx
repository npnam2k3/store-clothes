import React from 'react'
import styles from './style.module.scss'
import InputCommon from '@components/InputCommon/InputCommon'
import Button from '@components/Button/Button'

const Login = () => {
    const {container, title, boxRemember, boxBtn, lostPass} = styles
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label={"Username or email"} type={'text'} isRequire={true}/>
      <InputCommon label={"Password"} type={'password'} isRequire={true}/>

      <div className={boxRemember}>
        <input type="checkbox" name="" id="" />
        <span>Remember me</span>
      </div>
      <div className={boxBtn}>
        <Button content={"LOGIN"} />
      </div>
      <div className={lostPass}>Lost your password?</div>
    </div>
  )
}

export default Login
