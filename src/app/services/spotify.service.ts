import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = "Bearer BQDE6nCVC4cC2ccF094rsNVLiZ_DZvzewpJ5tcPd8LGmpQZC8hKgoifco2XzgD0nvo-tPUNdO-R4bZzWbZU";
  constructor(private http:HttpClient) {
      //console.log('Spotify service listo');
   }

   getQuery(query:string){
     const headers = new HttpHeaders({
       'Authorization': this.token
     });
     const url=`https://api.spotify.com/v1/${query}`;

     return this.http.get(url,{headers});
   }

   getNewReleases(){

     return this.getQuery('browse/new-releases')
     .pipe(map(data =>{
           return data['albums'].items;
     }));


   }

   getArtist(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data=>{
      return  data['artists'].items;
    }));

   }

   getTopTracks(id:string){
     return this.getQuery(`artists/${id}/top-tracks?country=es`)
     .pipe(map(data=>{
        return  data['tracks'];
      }));
   }

   getArtistInfo(id:string){

     return this.getQuery(`artists/${id}`)

   }

}
