import { Button } from 'antd'
import React from 'react'
import style from './index.module.less'

export default function Header() {
  return (
    <div className={style['aia-header']}>Header
      <Button type='primary'>Logout</Button>
    </div>
  )
}
