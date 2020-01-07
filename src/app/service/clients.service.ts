import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _http: HttpClient) {

  }

  getClients() {
    return this._http.get('assets/codebeautify.json');
  }
}
