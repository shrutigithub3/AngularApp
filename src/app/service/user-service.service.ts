import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getData() {
    throw new Error('Method not implemented.');
  }
  env:string=environment.url;

  constructor(private http:HttpClient ) { 

  }
  getUser() {
    return this.http.get(this.env+ "/newusers")
   
    
  }
  addUser(name:any,email:any,password:any,age:any,role:any){
    return this.http.post(this.env+"/formuser",{name,email,password,age,role})
  }
  deleteUser(_id: any){
  return this.http.delete(`http://localhost:3001/deleteusers/${_id}`)
 }
 putUser(_id:any,body:any){
  return this.http.put(`http://localhost:3001/putusers/${_id}`,body)
 }

}
// getUserbyID(_id:any){
//   return this.http.get(`http://localhost:3001/newusersID/${_id}`)
// }


