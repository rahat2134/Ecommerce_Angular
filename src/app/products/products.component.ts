import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products=[
    {id:1 , name:'Minimalist Analog Watch',available:'yes', price : 109,color:'black' , image:'/assets/iphonex-TA.jpg.webp'},
    {id:1 , name:'Minimalist Analog Watch',available:'yes', price : 109,color:'black' , image:'/assets/iphonex-TA.jpg.webp'},
    {id:1 , name:'Minimalist Analog Watch',available:'no', price : 109,color:'black' , image:'/assets/iphonex-TA.jpg.webp'},
    {id:1 , name:'Minimalist Analog Watch',available:'yes', price : 109,color:'black' , image:'/assets/iphonex-TA.jpg.webp'},
    {id:1 , name:'Minimalist Analog Watch',available:'yes', price : 109,color:'black' , image:'/assets/iphonex-TA.jpg.webp'}
   ]
  
}
