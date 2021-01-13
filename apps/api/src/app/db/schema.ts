import bcrypt from 'bcrypt';
import * as Knex from 'knex';
import { Model } from 'objection';

import connection from '../knexfile';

const knexConnection = Knex(connection);

Model.knex(knexConnection);

export class User extends Model {
  id!: string;
  email!: string;
  password!: string;

  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  getUser() {
    return {
      id: this.id,
      email: this.email,
    };
  }

  async $beforeInsert() {
    const salt = bcrypt.genSaltSync();
    this.password = await bcrypt.hash(this.password, salt);
  }

  verifyPassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }
}
