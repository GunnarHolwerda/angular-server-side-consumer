import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RenderService {

  constructor(private http: HttpClient) { }

  public getHtml(id: string): Promise<string> {
    return this.http.get(`http://localhost:4201/${id}`, { responseType: 'text'}).toPromise();
  }

}
