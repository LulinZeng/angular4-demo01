import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  email:string;
  phone:number;
  address:Address;
  hobbies:any[];
  isEdit:boolean=false;
  constructor() { }
  deleteHobby(index){
    this.hobbies.splice(index,1);
  }
  addHobby(Hobby){
    if(Hobby!=""){
      this.hobbies.unshift(Hobby);
    }
    
  }
  toggleInput(){
    this.isEdit=!this.isEdit;
  }
  ngOnInit() {
    this.name="Anna";
    this.email="zenglulin0712@sina.com";
    this.phone=13510915375;
    this.address={
      city:"深圳市",
      street:"锦龙大道",
      state:"坪山新区"
    }
    this.hobbies=["打篮球","写代码","看书"];
  }

}
interface Address{
  city:string,
  street:string,
  state:string
}
