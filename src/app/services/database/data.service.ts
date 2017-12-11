import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Club } from "../../classes/club";

import { Observable } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { of } from 'rxjs/observable/of';




@Injectable()
export class DataService {

  localData: Club[] = [];
  urlPrecursor: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Club[]> {
    return this.http.get(this.urlPrecursor + '/api/clubs').pipe(
      map((response: any[]) => {
        this.localData = response;
        return this.localData;
      })
    );   
  }

  public getClub(id: number): Club { 
    console.log(this.localData);        
    let nId = id;
    console.log(this.localData.find(x => x.id === id));
    return this.localData.find(x => x.id === id);        
  }


  // public getClub(id: number): Observable<any> {
  //   console.log("getclub called");
  //   const url = `${this.urlPrecursor}/${id}`;
  //   return this.http.get(url).pipe(
  //     tap(_ => this.log(`fetched club id=${id}`)),
  //     catchError(this.handleError<Club>(`getClub id=${id}`))
  //   );
  // } 

  public createClub(club: Club) {
    this.http.post(this.urlPrecursor + 'api/clubs', club)
      .subscribe( data => {
        console.log(data);
      });
  }

  public deleteClub(club: Club) {

  }

  public updateClub(club: Club) {
    this.http.put(this.urlPrecursor + 'api/clubs', club)
    .subscribe( data => {
      console.log(data);
    });
  }

}