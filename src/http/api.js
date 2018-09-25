import request from './request'

const api = {
  /**
   * search
  */
  getUsers: (q) => request.get('/search/users', {...q}),
  /**
   * isMe
  */
  getMe: () => request.get(`/user`),
  login: (username, password) => request.post('/login', {username, password}),
}

export default api
