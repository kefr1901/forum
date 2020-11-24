const ROOT_URL = `https://lab.willandskill.eu`
const USER_LOGIN_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`
const USER_CREATE_URL = `${ROOT_URL}/api/v1/auth/users/`
const USER_INFO_URL = `${ROOT_URL}/api/v1/me/`
const USER_LIST = `${ROOT_URL}/api/v1/countries/`

export default class AuthKit {
    static registerUser(formData) {
        const payload = formData
        return fetch(USER_CREATE_URL, {
            headers: this.getPublicHeaders(),
            method: 'POST',
            body: JSON.stringify(payload),
        })
    }

    static loginUser(formData) {
        const payload = formData
		return fetch(USER_LOGIN_URL, {
			headers: this.getPublicHeaders(),
			method: 'POST',
			body: JSON.stringify(payload),
		})
    }
    
    static getCountry(){
        return fetch(USER_LIST, {
            headers: this.getPublicHeaders(),
        })
    }
        
        static getUserInfo() {
            return fetch(USER_INFO_URL, {
                headers: this.getPrivateHeaders(),
            })
        }
        
     
        static getPublicHeaders() {
            return {
                'Content-Type': 'application/json',
            }
        }
    
        static getPrivateHeaders() {
            return {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.getToken()}`,
            }
        }
    
        static getToken() {
            return localStorage.getItem('token')
        }
    
        static setToken(token) {
            return localStorage.setItem('token', token)
        }
    
        static removeToken() {
            return localStorage.removeItem('token')
        }
        
}