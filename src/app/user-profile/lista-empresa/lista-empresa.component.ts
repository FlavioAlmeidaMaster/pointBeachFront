import { Component, OnInit } from '@angular/core';
import { Empresa } from 'app/model/empresa-model';
import { EmpresaService } from 'app/service/empresa.service';
import { first } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {

  displayedColumns: string[] = ['idEmpresa', 'nomeEmpresa', 'dataCadastro', 'cnpjEmpresa', 'acoesEmpresas'];
  empresas: Empresa[]=[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.getListarEmpresas();
  }

  getListarEmpresas(){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.empresaService.getAll().pipe(first()).subscribe((data)=>{
      console.log(data);
      this.empresas = data;
      for(let i = 0; i < this.empresas.length; i++){
        const mascara = leftFillNum(this.empresas[i].idEmpresa, 3)
        this.empresas[i].idEmpresa = mascara;
      }
    }); 
  }

}
