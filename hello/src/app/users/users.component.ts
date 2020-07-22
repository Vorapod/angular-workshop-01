import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  firstName = '';
  lastName = '';
  name = '';
  countInActive = 0;
  countAll = 0;
  users: Users[] = [];

  ngOnInit(): void {
  }
  
  inpurYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastName(input: string): void {
    this.lastName = input
  }

  ok(): void {
    this.name = `${this.firstName} ${this.lastName}`
    let user = new Users();
    user.name = this.name;
    user.isActive = true;
    this.users.push(user)

    this.summary();
  }



  toggle(index: number){
    if(this.users[index].isActive){
      this.users[index].isActive = false
    }else{
      this.users[index].isActive = true
    }

    this.summary();
  }

  summary(){
    this.countAll = this.users.length;
    this.countInActive = this.users.filter(x => !x.isActive).length
  }

}

class Users {
  public name: string;
  public isActive: boolean;
}