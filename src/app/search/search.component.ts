import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
entersearchValue : string = '';

@Output()
searchtextchanged:EventEmitter<string> = new EventEmitter<string>();

onsearchtextchanged(){
  this.searchtextchanged.emit(this.entersearchValue);
}




}
