import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  facebookImgPath:string='../assets/images/social/fbook.png';
  instagramImgPath:string='../assets/images/social/instagram.png';
  twitterImgPath:string='../assets/images/social/twitter.png';

  constructor() { }

  ngOnInit(): void {
  }

}
