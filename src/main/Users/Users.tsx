import React from 'react'

interface UsersProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function Users<T>(props: UsersProps<T>) {

    return <div style={{
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'space-around',
        width: '100%'
    }}>
        {
            props.items.map(props.renderItem)
        }
    </div>
}