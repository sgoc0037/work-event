import React, { FC } from 'react';
import { WorkspaceType } from '../../types/types';
import style from './workspace.module.css';
import WorkspaceCell from './workspaceCell';

const daysOfWeek: string[] =
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const Workspace: FC<WorkspaceType> = ({ daysIsMonth, setCurrentDay }) => {

    const handleClick = (e: any) => {
        e.target === e.currentTarget && 
        console.log('das')
        if (!isNaN(+e.target.lastChild.innerText)) {
            setCurrentDay(+e.target.innerText)
        }
        console.log(e.target.lastChild.innerText)
    }

    return <div
        onClick={handleClick}
        className={style.workspace}>
        {
            daysOfWeek.map((item: any) => {
                return <div key={item}>{item}</div>
            })
        }
        {
            daysIsMonth.map((item: any) => {
                return <WorkspaceCell 
                key={item.date +''+ item.months}
                day={item.date}
                month={item.months}
                year={item.years} />
            })
        }
    </div>
}

export default Workspace;