import fetch from 'node-fetch';

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

  async get<T>({ path }: { path: string }): Promise<T> {
    try {
      const url = `${this.host}${path.replace('{org_name}', this.orgName)}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Basic ${this.credentials}`,
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (ex) {
      console.log('Error', ex.message);
    }
  }
}
