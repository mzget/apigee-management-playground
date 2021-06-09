import fetch from 'node-fetch';

type Options = { path: string; data?: any };

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

  async get<T>({ path }: Options): Promise<T> {
    try {
      const url = `${this.host}${path.replace('{org_name}', this.orgName)}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Basic ${this.credentials}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        return await response.json();
      }
    } catch (ex) {
      console.log('Error', ex.message);
    }
  }

  async post<T>({ path, data }: Options): Promise<T> {
    try {
      const url = `${this.host}${path.replace('{org_name}', this.orgName)}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Basic ${this.credentials}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (response.ok) {
        return response.json();
      } else {
        return await response.json();
      }
    } catch (ex) {
      console.log('Error', ex.message);
    }
  }
}
