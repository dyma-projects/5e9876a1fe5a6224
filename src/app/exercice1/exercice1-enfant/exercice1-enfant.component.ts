import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {


  @Input() public compteur: number = 0; 
  @Output() public decrementerEvt: EventEmitter<number> = new EventEmitter();
  @Output() public incrementerEvt: EventEmitter<number> = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  public Incrementer()
  {
    this.incrementerEvt.emit(this.compteur);
  }
  public Decrementer()
  {
    this.decrementerEvt.emit(this.compteur);
  }
}
