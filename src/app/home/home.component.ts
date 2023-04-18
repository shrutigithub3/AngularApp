import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router,private userService:UserServiceService){

  }
  message:string = "Hi There!!"
  number = 100;
  btnName:string = "Show"
  isActive: boolean = true;
  user : any ;
  _id:any;
  userMessage:any;
  image: string="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  saveData(e:any){
    debugger
    console.log("Hello",e);
  }
  abc(){
    console.log("Shruti")
  }
  ngOnInit(): void{
    this.abc()
    this.getUserData()
  
  }
   
  arr=[{
    
      id:1,
      name:"shruti",
      email:"skumra@bebotechnologies.com"
    },
    {
      id:2,
      name:"mansi",
      email:"mansi@bebotechnologies.com"
    },
    {
      id:3,
      name:"anshu",
      email:"anshu@bebotechnologies.com"
    },
  ]
 

   showList(){
   if(this.isActive = !this.isActive){
   this.btnName ="Hide"
   }
   else{
    this.btnName="Show"
   }
}
getUserData(){
  this.userService.getUser().subscribe((res)=>{
    console.log(res);
    this.user = res

  })

  // this.getUserData()

}
deleteUser(_id: any){
  console.log("test id",_id)
  console.log(typeof _id)
  this.userService.deleteUser(_id).subscribe((res: any)=>{
    console.log(res);
    this.user=res
  })
  this.getUserData()

}
editbtn(_id:any,body:any){
  this.userService.putUser(_id,body).subscribe((res:any)=>{
    console.log(res);
    this.user=res
    this.router.navigate(['register/${id}'])
    

  })
  
}
// getUserID(_id:any){
//   this.userService.getUserbyID(_id).subscribe((res:any)=>{
//     console.log(res);
//     this.user = res

//   })

// }

currentItem = 'Television';

items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }


}
