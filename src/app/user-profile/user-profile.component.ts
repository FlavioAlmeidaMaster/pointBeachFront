import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'app/service/empresa.service';
import { UsuarioService } from 'app/service/usuario.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  quantidadeUsuario: number;
  quantidadeEmpresa: number;

  constructor(private userService: UsuarioService,  private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getListarUsuarios();
    this.getListarEmpresas();
  }


  getListarUsuarios(){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.userService.getAll().pipe(first()).subscribe((data)=>{
      const mascara = leftFillNum(data.length, 3);
      this.quantidadeUsuario = mascara;
    }); 
  }
  getListarEmpresas(){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.empresaService.getAll().pipe(first()).subscribe((data)=>{
      const mascara = leftFillNum(data.length, 3)
      this.quantidadeEmpresa = mascara;
    }); 
  }
}
