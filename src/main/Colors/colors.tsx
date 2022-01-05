import React from 'react'
import style from './colors.module.css';

const Color: React.FC = () => {

    return <div className={style.squareColor}>
        <div className={style.item}>#d73d6c</div>
        <div className={style.item}>#d57276</div>
        <div className={style.item}>#d6c2bc</div>
        <div className={style.item}>#c0cccc</div>
        <div className={style.item}>#65b2c6</div>
    </div>

}

export default Color;