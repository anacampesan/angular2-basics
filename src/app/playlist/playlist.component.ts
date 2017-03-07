import { Component, OnInit, Input } from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() currentVideo;

  // currentVideo: string = 'No video has been selected.';
  videos: Array<Video>;

  constructor()
  {
    this.videos =
    [
      new Video(1, 'First video', 'This is my first awesome video'),
      new Video(2, 'Second video', 'This is my second awesome video')
    ]
  }

  ngOnInit() {
    this.currentVideo = 'No video is selected at the moment.';
  }

  onSelect(v:Video)
  {
    this.currentVideo = v.title + ' is selected.';
  }

}
