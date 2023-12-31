  import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NO_PER_PAGE, User, UserData, UserResp } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {

  }

  getUsers(page: number): Observable<UserData> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('per_page',NO_PER_PAGE);

    return this.http.get<UserData>(this.apiUrl, { params });

  }

  getUser(id: string): Observable<UserResp> {

    return this.http.get<UserResp>(this.apiUrl + "/" + id);

  }
}
