import React from 'react'

interface UsersProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function Users<T>(props: UsersProps<T>) {
    return <div>
        {
            props.items.map(props.renderItem)
        }
    </div>
}