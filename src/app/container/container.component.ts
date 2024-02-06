import { Component } from '@angular/core';

@Component({
  // selector as html tag <app-container></app-container>
  // selector: 'app-container',

// selector as html attribute
// selector:'[app-container]',

// selector as css class
selector:'.app-container',

  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
// here we write logic (just a example)
onButtonClick() {
  alert('Button clicked!');
}
searchText : string='';
onSearchTextEntered(searchValue: string){
this.searchText=searchValue;
// console.log(this.searchText);

}
}
