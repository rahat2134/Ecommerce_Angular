import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
slogan:String = 'Your one stop shop for everything.'
getSlogan():string{
  return 'This is temp';
}
src : string ='https://i.pinimg.com/originals/32/db/95/32db955453a1e357a3034c226a4dcf06.png';

}
