import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Input,Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private http:HttpClient,private router: Router,private fb:FormBuilder,private userService:UserServiceService){

  }
  
  registerForm!:FormGroup;
  user: any;
  submitted:boolean=false;
  @Input() item:string='';
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(){
    this.registerForm=this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
    age: ['',[Validators.required]],
    role: ['',[Validators.required]],

    })
  }
    


  onSubmit() {
    this.submitted=true;
    if(this.registerForm.valid){
      this.user=this.registerForm.value;
      this.userService.addUser(this.user.name,this.user.email,this.user.password,this.user.age,this.user.role,)
      .subscribe((res)=>{
        console.log(res);
      })
      console.log(this.registerForm.value);
      this.router.navigate(['home'])

    }}
    
  get f(){
    return this.registerForm.controls;
  }
 

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  

}

