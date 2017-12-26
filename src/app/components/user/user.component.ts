import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[]; 
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Jhon Doe';
    this.age = 30;
    this.email = 'Roymal1788@gmail.com';
    this.address = {
      street:'50 Main st',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['Write Code', 'Watch Movies','Listen to Music'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      //console.log(posts);
    });
  }

  onClick() {
    this.name='Roy Malka';
    this.hobbies.push('New Hobby');
    console.log('HELLO');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i =0 ; i< this.hobbies.length ; i++){
      if(this.hobbies[i]== hobby){
        this.hobbies.splice(i,1);
      }
    }

  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}
interface Address {
  street:string,
  city:string,
  state:string
}