import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {
   loading: boolean;

  artist:any ={};
  topTracks:any[] =[];

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {

    this.getArtist();
    this.getTopTracks();
  }
  getArtist(){
    this.loading = true;

    this.router.params.subscribe(params =>{
      this.spotify.getArtistInfo(params['id'])
      .subscribe((artist:any)=>{
        this.artist= artist;
        console.log(artist);
        this.loading=false;
      });


    });

  }

  getTopTracks(){
    this.loading = true;

    this.router.params.subscribe(params =>{
      this.spotify.getTopTracks(params['id'])
      .subscribe((topTracks:any)=>{
        this.topTracks= topTracks;
        console.log(this.topTracks);
        this.loading=false;
      });


    });

  }


}
