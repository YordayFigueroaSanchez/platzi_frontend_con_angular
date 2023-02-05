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
}
