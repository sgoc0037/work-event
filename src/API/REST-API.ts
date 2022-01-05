import axios from 'axios';

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "c2fec3f3-7764-4a05-acfb-e91ac110e776"
	}
})

export let userAPI = {
	requestUsers(currentPage = 1, userPage = 10) {
		return instance.get(`users?page=${currentPage}&count=${userPage}`)
			.then(response => {
				return response.data
			})
	},
	getNextUsersPage(value:number, userPage:number) {
		return instance.get(`users?page=${value}&count=${userPage}`)
			.then(response => {
				return response.data
			})
	},
	postUsersFollowing(item:number, value:string) {
		if (value === 'delete') {
			return instance.delete(`/follow/` + item)
				.then(response => {
					return response
				})
		} else if (value === 'post') {
			return instance.post(`/follow/` + item)
				.then(response => {
					return response
				})
		}
	}
}
export let profileAPI = {
	getProfile(selectedUserId:number) {
		return instance.get(`/Profile/` + selectedUserId)
			.then(response => {
				return response.data
			})
	},
	getLogin() {
		return instance.get(`/auth/me`)
			.then(response => {
				return response
			})
	},
	getStatus(selectedUserId:number) {
		return instance.get(`/Profile/status/` + selectedUserId)
			.then(response => {
				return response
			})
	},
	uppdateStatus(status:string) {
		return instance.put(`/Profile/status`, { status })
			.then(response => {
				return response
			})
	},
	authLogin(email:string, password:string, rememberMe:boolean) {
		debugger
		return instance.post(`/auth/login`, { email, password, rememberMe })
			.then(response => {
				return response
			})
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => {
				return response
			})
	},
	savePhotos(file:Blob) {
		let formData = new FormData()
		formData.append('image', file)
		return instance.put(`/Profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(obj:{}) {
		return instance.put(`/Profile`, obj)
			.then(response => {
				return response
			})
	}
}