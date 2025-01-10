import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
path:any;
isClicked:boolean = false;
openModal(src:any) {
this.path = src;
this.isClicked = true;
}
closeModal() {
this.isClicked = false;
}
}
