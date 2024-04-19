import { Injectable } from '@nestjs/common';
import * as Firebird from 'node-firebird';
import { dbOptions } from 'src/config/firebird-config';

@Injectable()
export class FirebirdService {
  async connect() {
    return new Promise((resolve, reject) => {
      Firebird.attach(dbOptions, (err, db) => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      });
    });
  }

  async executeQuery(db: any, query: string, params: any[] = []) {
    return new Promise((resolve, reject) => {
      db.execute(query, params, (err: any, result: unknown) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async disconnect(db: any) {
    return new Promise((resolve, reject) => {
      db.detach((err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(null);
        }
      });
    });
  }
}
