import $api from '../http';

export default class AuthService {
  static async register(firstName, surname, email, password) {
    return $api.post('/Auth/register', {
      name: firstName, surname, email, password,
    });
  }

  static async login(email, password) {
    return $api.post('/Auth/login', {
      email, password,
    });
  }

  static async logout() {
    return $api.post('/Auth/logout');
  }
}
