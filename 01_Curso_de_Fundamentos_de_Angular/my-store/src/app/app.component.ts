import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  age = 39;
  name = 'YFS';
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    age : 39,
  name : 'YFS',
  img : 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names : string[] = ['name01','name02','name03','name04',]
  newName : string = '';

  onToggle(){
    this.btnDisabled = !this.btnDisabled;
  }

  addAge(){
    this.person.age +=1;
  }

  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  onChange(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName(){
    this.names.push(this.newName)
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }
}
