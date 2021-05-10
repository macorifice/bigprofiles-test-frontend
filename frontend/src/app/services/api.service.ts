import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private headers: HttpHeaders;
  private apiLocation: string;

  constructor(private http: HttpClient) {
    this.apiLocation = 'http://localhost:3000/api/v1.0/';
    this.headers = new HttpHeaders();
  }

  /**
   * Common handler for get requests to API
   * @param url
   * @param params (optional)
   * @returns {Promise<any>}
   */
  async get(url: string, params?: object) {
    return await this.request('get', url, null, params);
  }

  /**
   * Common handler for post requests to API
   * @param url
   * @param body
   * @param params (optional)
   * @returns {Promise<any>}
   */
  async post(url: string, body: object, params?: string) {
    return await this.request('post', url, body, params);
  }

  /**
   * Common handler for delete requests to API
   * @param url
   * @param params (optional)
   * @returns {Promise<any>}
   */
  async delete(url: string, params?: string): Promise<any> {
    return await this.request('delete', url, null, params);
  }

  /**
   * Common handler for put requests to API
   * @param url
   * @param body
   * @param params (optional)
   * @returns {Promise<any>}
   */
  async put(url: string, body: object, params?: string): Promise<any> {
    return await this.request('put', url, body, params);
  }

  private async request(method, url, body, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }

    const opts = {
      params: httpParams,
      headers: this.headers,
    };

    let response: Observable<any>;
    if (method === 'put' || method === 'post' || method === 'patch') {
      response = this.http[method](this.apiLocation + url, body, opts);
    } else {
      response = this.http[method](this.apiLocation + url, opts);
    }

    const isSuccess = (code) => code >= 200 && code < 300;

    try {
      const res = await response.toPromise();
      if (res && res.data && isSuccess(res.code)) {
        return res.data;
      } else {
        console.log('Error: API Service - unexpected response format');
        throw res;
      }
    } catch (err) {
      console.log('Error: API Service - ' + JSON.stringify(err.error));
      throw err;
    }
  }
}
