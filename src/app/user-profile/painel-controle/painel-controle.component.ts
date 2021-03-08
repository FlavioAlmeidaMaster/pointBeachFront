import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit {

  quantidadeEmpresa: number;
  @Input() quantidadeUser : number;
  @Input() quantidadeWork : number;

  constructor() { }

  ngOnInit(): void {

  }



}
