import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../../../core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
})
export class Dashboard3Component implements OnInit {
  public example: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() { 
    this.example = this.getJSON();
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json")
  }


}
