import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../../shared';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  url: string = '../../../assets/user-data.json';

  constructor(private httpClient: HttpClient) { }

  public getUserDetails(): Observable<UserDetails> {
    return this.httpClient.get<UserDetails>(this.url);
  }

}
