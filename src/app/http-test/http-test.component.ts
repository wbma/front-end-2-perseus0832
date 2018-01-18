import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData:string = 'hello';
  imageFolder:string = 'http://media.mw.metropolia.fi/wbma/uploads/'
  imgUrl:string = 'http://placekitten.com/200/300';

  constructor(private http:HttpClient) { }

  getJSON(){
    this.http.get('assets/package.json').subscribe( data => {
      console.log(data);
      this.someData = data.license;
    } )    
  }

  getMedia(){
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe (data1 =>{
      console.log(data1);
      console.log(data1[0].filename);
      this.imgUrl = 'http://media.mw.metropolia.fi/wbma/uploads/' + data1[0].filename;
    })
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}

//const someFunction = (param) => {console.log(param);}
