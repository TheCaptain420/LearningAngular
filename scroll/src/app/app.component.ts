import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
query:string;
artists:object;


  showArtist( item){
    this.query = item.name; 
    item.highlight = !item.highlight;
  }

  constructor(private http:HttpClient){
    this.query = ''
  }

  ngOnInit():void {
    //()=location
    this.http.get<Object>('./assets/data.json').subscribe(data => {
      this.artists =data; 
    })


  }
}
