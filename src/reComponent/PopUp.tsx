import React from 'react';
import { PopUpType } from '../types/types';
import style from './PopUp.module.css';
import cnBind from 'classnames/bind';

let cx = cnBind.bind(style);

const Popup:React.FC<PopUpType> = ({ toggle, setToggle, children }) => {

    let cxPopup = cx('popup', { active: toggle })
    let cxPopupContent = cx('popup__content', { content__active: toggle })

    return (
        <div className={cxPopup} onClick={(e) => {
            e.stopPropagation()
            setToggle(false)
        }}>
            <div className={cxPopupContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup;