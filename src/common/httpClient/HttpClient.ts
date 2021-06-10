import { json } from 'express';
import fetch from 'node-fetch';

type Options = { path: string; data?: any; method?: string };

export class HttpClient {
  host: string;
  orgName: string;
  credentials: string;

  constructor() {
    this.host = process.env.APIGEE_HOST;
    this.orgName = process.env.APIGEE_ORG_NAME;
    this.credentials = Buffer.from(
      `${process.env.APIGEE_USER}:${process.env.APIGEE_PASSWORD}`,
    ).toString('base64');
  }

  private async request(opts: Options) {
    const { path, data, method = 'GET' } = opts;
    try {
      const url = `${this.host}${path.replace('{org_name}', this.orgName)}`;
      const config = {
        headers: {
          Authorization: `Basic ${this.credentials}`,
          'Content-Type': 'application/json',
        },
        method,
      };
      if (data) {
        config['body'] = data ? JSON.stringify(data) : undefined;
      }
      const response = await fetch(url, config);
      try {
        return await response.json();
      } catch {
        throw new Error(response.statusText);
      }
    } catch (ex) {
      return ex.message;
    }
  }

  async get<T>({ path }: Options): Promise<T> {
    return this.request({ path });
  }

  async post<T>({ path, data }: Options): Promise<T> {
    return this.request({ path, data, method: 'POST' });
  }

  async put<T>({ path, data }: Options): Promise<T> {
    return this.request({ path, data, method: 'PUT' });
  }

  async delete<T>({ path, data }: Options): Promise<T> {
    return this.request({ path, data, method: 'DELETE' });
  }
}
