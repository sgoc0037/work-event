import { Button, Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React, { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { SaveProfiletype } from '../../types/ProfileType'

export const Settings: FC = () => {

    const {} = useTypeSelector(state=>state)

    const { TextArea } = Input
    const { control, handleSubmit } = useForm()
    const {
        lookingForAJobDescription, lookingForAJob, aboutMe, fullName, contacts
    } = useTypeSelector(state => state.profile.profile)

    const [check, setCheck] = useState<boolean>(lookingForAJob)
    const onClick = () => setCheck(!check);
    const onSubmit: SubmitHandler<SaveProfiletype> = (data) => {
        console.log(data)
    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="lookingForAJobDescription"
            control={control}
            defaultValue={lookingForAJobDescription}
            render={({ field }) => <TextArea {...field}
                placeholder='Skills for a job'
            />}
        />
        <Controller
            name="lookingForAJob"
            control={control}
            defaultValue={check}
            render={({ field }) => <Checkbox {...field}
                checked={check}
                onClick={onClick} />}
        />
        <Controller
            name="aboutMe"
            control={control}
            defaultValue={aboutMe}
            render={({ field }) => <Input {...field}
                placeholder="About me"
            />}
        />
        <Controller
            name="fullName"
            control={control}
            defaultValue={fullName}
            render={({ field }) => <Input {...field}
                placeholder="Full name"
            />}
        />
        {
            Object.keys(contacts).map((item: string) => {

                return <Controller
                    key={item}
                    name={`contacts.${item}`}
                    control={control}
                    render={({ field }) => <Input {...field}
                        placeholder={item.toUpperCase()}
                    />}
                />
            })
        }
        <Button onClick={handleSubmit(onSubmit)} type='primary'>Save changes</Button>
    </form>
}