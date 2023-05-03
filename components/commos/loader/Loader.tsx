import { FC } from 'react'
import style from './Loader.module.scss'
import { clsx } from '@/lib/clsx'

interface ILoader {
  show: boolean
}

export const Loader: FC<ILoader> = ({ show }) => {
  return (
    <div className={clsx(style.loader_container, !show && style.hidden)}>
      <span className={style.loader}></span>
    </div>
  )
}