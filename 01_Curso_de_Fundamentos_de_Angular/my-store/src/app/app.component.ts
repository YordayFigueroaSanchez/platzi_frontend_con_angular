import { Component } from '@angular/core';
import { Product } from './product.model';

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

  products : Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/01.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/02.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/03.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/04.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/05.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/06.jpg'
    }
  ]

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
