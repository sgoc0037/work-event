import React, { FC } from 'react'
import style from './PopUp.module.css';
import cnBind from 'classnames/bind';

let cx = cnBind.bind(style)

interface PopupType {
    changePopup:boolean;
    setChangePopup:(value:boolean)=> void;
}

let Popup:FC<PopupType> = ({ changePopup, setChangePopup, children }) => {

    let cxPopup = cx('popup', { active: changePopup })
    let cxPopupContent = cx('popup__content', { content__active: changePopup })

    return (
        <div className={cxPopup} onClick={(e) => {
            e.stopPropagation()
            setChangePopup(false)
        }}>
            <div className={cxPopupContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup;