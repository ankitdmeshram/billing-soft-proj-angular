import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontEnd';


  isSideBarOpen: boolean = false

  ngOnInit(): void {
    if (screen.width < 900) {
      this.isSideBarOpen = true
    }
  }




  sidebarToggle(event:any) {
    this.isSideBarOpen = !this.isSideBarOpen

  }



}
