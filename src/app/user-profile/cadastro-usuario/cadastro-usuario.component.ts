import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Empresa } from 'app/model/empresa-model';

import { User } from 'app/model/user-model';
import { EmpresaService } from 'app/service/empresa.service';
import { UsuarioService } from 'app/service/usuario.service';
import { first } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user: User = new User();
  empresas: Empresa[]= [];
  selectedEmpresa: number;
  mask:string;
  quantidadeUsuario : number;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // loadForm = this.fb.group({
  //   empresaUser: [''],
  //   loginUser: ['', Validators.required],
  //   senhaUser: ['', Validators.required],
  //   nomeUser: ['', Validators.required],
  //   cpfUser: ['', Validators.required],
  //   emailUser: ['', Validators.required],
  //   rgUser: ['', Validators.required],
  //   cltUser: [''],
  //   celularUser: ['', Validators.required],
  //   obsUser: ['']
  // });

  constructor(private userService: UsuarioService, private empresaService: EmpresaService,
    private fb: FormBuilder,
    private router: Router) {     }

  ngOnInit(): void {
    this.getEmpresas();
  }

  postUsuario(): void{
    this.userService.salvar(this.user).subscribe(res=>{
      this.user = new User();
    })
  }

  getEmpresas(){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.empresaService.getAll().pipe(first()).subscribe((data)=>{
      this.empresas = data;
      this.selectedEmpresa = this.empresas[0].idEmpresa;
    }); 
  }

  load() {
    location.reload()
  }

  

}
