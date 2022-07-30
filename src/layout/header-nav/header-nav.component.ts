import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  theme = 'Dark-Theme'
  changetheme(){
    document.body.classList.toggle('dark-theme');
    if(this.theme=='Dark-Theme'){
      this.theme='Light-Theme'
    }else{
      this.theme='Dark-Theme'
    }
  }

}
