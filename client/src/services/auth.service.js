import {
    LOGIN_ENDPOINT,
    REFRESH_ENDPOINT,
    REGISTER_ENDPOINT,
  } from './auth.constants';
  
  import request from './api.request';
  // import at top - AuthService.method()
  class AuthService {
    constructor() {
      this.login = this.login.bind(this);
    }
  // AuthService.login(email, password)
    async login(email, password) {
      try {
        const response = await request({
          url: LOGIN_ENDPOINT,
          method: 'POST',
          data: {
            email,
            password,
          },
        });
  
        if (response.data.access) {
          return this.setToken(response);
        }
      } catch (error) {
        return error.response;
      }
    }
  //AuthService.logout()
    logout() {
      localStorage.removeItem('user');
    }
  //AuthService.register(username, email, password, firstname, lastname)
    async register({
      username,
      email,
      password,
      firstName,
      lastName,
    }) {
      try {
        await request({
          url: REGISTER_ENDPOINT,
          method: 'POST',
          data: {
            username,
            email,
            password,
            first_name: firstName,
            last_name: lastName,
          },
        });
  
        await this.login(email, password);
      } catch (error) {
        return error.response;
      }
    }
  
    setToken(response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    }
  
    async refreshToken() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
  
        if (user.refresh) {
          const response = await request({
            url: REFRESH_ENDPOINT,
            method: 'POST',
            data: {
              refresh: user.refresh,
            },
          });
  
          return response.data;
        }
      } catch (error) {
        return error.response;
      }
    }
  }
  
  export default new AuthService();