import { Input } from 'antd';
import React, { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useActionsCreators } from '../../hooks/useActionCreator';

interface ProfileStatusType {
	status: string,
	autMe: boolean
}

interface formInput {
	status: string
}

const ProfileStatus: FC<ProfileStatusType> = ({ status, autMe }) => {

	const [editMode, setEditMode] = React.useState(false)
	const { control, handleSubmit } = useForm<formInput>()
	const { saveStatus } = useActionsCreators()

	let deactivateStatus = (data: formInput) => {
		
		setEditMode(false)
		saveStatus(data.status)
	}

	let activeStatus = () => {
		setEditMode(true)
	}

	return <div>
		{
			!autMe
				? <span>{status}</span>
				: <span
					onClick={activeStatus}>
					{status || 'create status'}
					{
						editMode &&
						<form onBlur={handleSubmit(deactivateStatus)}>
							<Controller
								name="status"
								control={control}
								defaultValue={status}
								render={({ field }) => <Input
									{...field}
								/>}
							/>
						</form>
					}
				</span>
		}
	</div>
}

export default ProfileStatus;