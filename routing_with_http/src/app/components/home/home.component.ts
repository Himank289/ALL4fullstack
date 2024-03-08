import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
 
 constructor() {
      console.log('home constructor called');
  }

  ngOnInit():void{
    console.log('Home Component rendered & Initialised');
  }
  ngOnDestroy(): void {
   console.log('home component unloaded');
  
}
}
