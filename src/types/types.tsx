
export interface WorkspaceType {
    daysIsMonth: Array<object>,
    setCurrentDay: (value: number) => void;
}

export interface WorkspaceCellType {
    day: number,
    month: number,
    year: number,
}

export interface PopUpType {
    toggle: boolean,
    setToggle: (value: boolean) => void,
}

export interface FormDataType {
    login: string,
    password: string,
    rememberMe: boolean
}

export interface UserTypes {
    followed: boolean,
    id: number,
    name: string,
    photos: {},
    status: string
}