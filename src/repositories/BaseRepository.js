import User from '../models/User';

class BaseRepository {
    constructor(model) {
        this.Model = model;
    }
  async create() {
    await this.Model.create();
  }

  async get() {
    await this.Model.get();
  }

  async getById() {
    await this.Model.findById();
  }

  async update() {
    await this.Model.update();
  }

  async delete() {
    await this.Model.destroy();
  }
}

export default new BaseRepository();