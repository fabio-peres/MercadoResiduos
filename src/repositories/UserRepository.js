import BaseRepository from './BaseRepository'
import User from '../models/User';

class UserController extends BaseRepository {
  constructor() {
    super(User);
  }

}

export default new UserController();