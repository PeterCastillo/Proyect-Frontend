'use client'
import style from "./page.module.scss"
import { useState } from "react"

export default function Page(){
    const [render,setRender] = useState(2)
    return (
        <div className={style.page}>
            <span className={style.title}>Usuario</span>
            <div className={style.tab}>
                <span className={`${render == 0 && style.tabactive}`} onClick={()=> setRender(0)}>Lista</span>
                <span className={`${render == 1 && style.tabactive}`} onClick={()=> setRender(1)}>Crear</span>
                <span className={`${render == 2 ? style.tabactive : style.editdescative}`}>Editar</span>
            </div>
        </div>
    )
}