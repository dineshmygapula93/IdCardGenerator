import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IdcardGenerator';

  imageurl:string='';
  name:string='';
  designation:String='';
  phonenumber:number=0;
  address:String='';
}
