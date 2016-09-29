import { Component, OnInit } from 'angular2/core';
import { ArtistItemComponent } from './artist-item.component';
import { ArtistDetailsComponent } from './artist-details.component';
import { SearchPipe } from './search.pipe';
import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [ArtistItemComponent, ArtistDetailsComponent],
  pipes: [SearchPipe],
  styleUrls: ['css/app.css'],
  providers: [ArtistService]
})

export class AppComponent implements OnInit{
  artists: Artist[];
  currentArtist: Artist;

  constructor(private artistService: ArtistService) {}

  getArtists(): void {
    this.artistService.getArtistsSlowly().then(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();
  }

  showArtist(item: Artist): void {
    this.currentArtist = item;
  }
}
