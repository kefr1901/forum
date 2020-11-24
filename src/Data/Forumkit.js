const ROOT_URL = `https://lab.willandskill.eu`
const POST_LIST = `${ROOT_URL}/api/v1/forum/posts/`
const POST_CREATE = `${ROOT_URL}/api/v1/forum/posts/`
const POST_CREATE_REPLIES = `${ROOT_URL}/api/v1/forum/posts/`
const CAT_URL = `${ROOT_URL}/api/v1/forum/categories/`;


export default class Forumkit {
    static createPost(payload) {
        return fetch(POST_CREATE, {
            'Content-Type': 'application/json',
            method: "POST",
            headers: this.getPrivateHeaders(),
            body: JSON.stringify(payload),
        })
    }

    static getPostList() {
        return fetch(POST_LIST, {
            'Content-Type': 'application/json',
            headers: this.getPrivateHeaders(),
        })
    }

    static getPostDetail(id) {
        return fetch(`${ROOT_URL}/api/v1/forum/posts/${id}/`, {
            'Content-Type': 'application/json',
            headers: this.getPrivateHeaders(),
        })

    }
    static getCategoryList() {
        return fetch(CAT_URL, {
            'Content-Type': 'application/json',
            headers: this.getPrivateHeaders(),
        })

    }

    static getPostReplies(id){
      return fetch(`${ROOT_URL}/api/v1/forum/posts/${id}/replies`, {
            headers: this.getPrivateHeaders()
        })
    }

    static createReplies(payload){
        return fetch(POST_CREATE_REPLIES, {
            headers: this.getPrivateHeaders(),
            method: "POST",
            body: JSON.stringify(payload)
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

