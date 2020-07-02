import UserRepository from '../repositories/UserRepository';

class UserController {
  async create(req, res) {
    try {
      const exemplo = this.Repository.create();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async get(req, res) {
    try {
      const exemplo = this.Repository.create();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getById(req, res) {
    try {
      const exemplo = this.Repository.create();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const exemplo = this.Repository.create();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const exemplo = this.Repository.create();
    } catch (error) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
