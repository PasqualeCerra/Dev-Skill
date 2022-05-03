import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.scss'],
})
export class BottonComponent implements OnInit {
  @Input() testo: string;
  indirizzi:string[]=[];
  @Input() indirizzo:string;

  constructor() {}

  ngOnInit() {
    this.indirizzi.push(this.indirizzo);
  }

}
