import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headerImgPath:string='../assets/images/2102-Restaurante-Picasso-Hamburg.jpg'

  constructor(private router:Router, private menuService: MenuService) {}

  ngOnInit(): void {
      
  }

  toHome() {
    this.router.navigate(['/']);
  }
}
