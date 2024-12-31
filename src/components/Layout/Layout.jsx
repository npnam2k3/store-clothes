import React from 'react'
import styles from './style.module.scss'

const Layout = ({children}) => {
  const {wrapLayout, container} = styles

  return (
    <main className={wrapLayout}>
      <div className={container}>{children}</div>
    </main>
  )
}

export default Layout
