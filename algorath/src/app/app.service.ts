import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get('http://localhost:3000/users');
  }

  getUsersConnections(){
    
  }

  getUserById(){

  }

  connectUsers(){
    
  }
}
