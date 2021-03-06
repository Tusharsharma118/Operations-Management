import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  private serverUrl = environment.serverUrl+ environment.serverPort +environment.serverPrefix;
  constructor(private http:Http) { }

    get(url){

      return this.http.get(this.serverUrl+url);
    }

    post(url,body){

      return this.http.post(this.serverUrl+url,body);
    }

}
