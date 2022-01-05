import React, { useState } from 'react';
import Popup from '../../reComponent/PopUp';
import { WorkspaceCellType } from '../../types/types';
import style from './workspaceCell.module.css';

const WorkspaceCell: React.FC<WorkspaceCellType> = ({ day, month, year }) => {

    const [toggle, setToggle] = useState(false);

    return <div
        onClick={() => setToggle(!toggle)}
        className={style.cell}>
        {day}
        <Popup
            toggle={toggle}
            setToggle={setToggle}>
            <span className={style.date}>{day}-{month}-{year}</span>
        </Popup>
    </div>
}

export default WorkspaceCell;