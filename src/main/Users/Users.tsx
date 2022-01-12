import React from 'react'

interface UsersProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function Users<T>(props: UsersProps<T>) {

    const style = {
        display: 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'space-around',
        width: '100%'
    }

    return <div style={style}>
        {
            props.items.map(props.renderItem)
        }
    </div>
}