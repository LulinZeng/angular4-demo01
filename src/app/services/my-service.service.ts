import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {  }
  onSubmit(user){
    return this.http.post("http://jsonplaceholder.typicode.com/users",user).map(res=>res);
  }
  getUsers(){
    return this.http.get("http://jsonplaceholder.typicode.com/users").map(res=>res);
  }
  delteUser(id){
    return this.http.delete("http://jsonplaceholder.typicode.com/users/"+id).map(res=>res);
  }
  updataUser(user){
    return this.http.put("http://jsonplaceholder.typicode.com/users/"+user.id,user).map(res=>res);
  }
  getSingleUser(id){
    return this.http.get("http://jsonplaceholder.typicode.com/users/"+id).map(res=>res);
  }
}
