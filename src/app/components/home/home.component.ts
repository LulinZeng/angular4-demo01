import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any; 
  user={
    id:"",
    name:"",
    email:"",
    phone:""
  }
  isEdit:boolean=false; 
  constructor(public dataService:DataService) {
    this.dataService.getUsers().subscribe(users=>{
      this.users=users;
    })
  }
  onSubmit(isEdit){
    if(isEdit){      
      this.dataService.updataUser(this.user).subscribe(user=>{
        // for(let i = 0;i<this.users.length;i++){
        //   if(this.users[i].id==this.user.id){
        //     this.users.splice(i,1);
        //   }
        // }        
      })
    }else{
      this.dataService.onSubmit(this.user).subscribe(user=>{
        //console.log(this.user);
        this.users.unshift(this.user);
      })
    }    
  }
  deleteUser(id){
    this.dataService.delteUser(id).subscribe(user=>{
      //console.log(id);
      for(let i = 0;i<this.users.length;i++){
        if(this.users[i].id==id){
          this.users.splice(i,1);
        }
      }

    })   
  }
  updateUser(user){   
    this.user = user;
    this.isEdit=true; 
  }
  ngOnInit() {
  }

}
