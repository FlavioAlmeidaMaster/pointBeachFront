import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'app/model/user-model';
import { UsuarioService } from 'app/service/usuario.service';
import { first } from 'rxjs/operators';

export interface DialogData {
  usuarioDelConfirma: number;
}

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: User[] =[];
  usuario: User;
  usuarioConfirma: number;
  displayedColumns: string[] = ['idUsuario', 'nomeUser', 'dataCadastro', 'cpfUser', 'emailUser', 'celularUser', 'acoesUser'];
  dataSource = this.usuarios;
  
  constructor(private userService: UsuarioService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) {
     
     }

  ngOnInit(): void {
    this.getListarUsuarios();
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
     data: { usuarioDelConfirma: id }
      });
    dialogRef.afterClosed().subscribe(result => {
      this.usuarioConfirma = result;
    });
  }

  getListarUsuarios(){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.userService.getAll().pipe(first()).subscribe((data)=>{
      this.usuarios = data;
      for(let i = 0; i < this.usuarios.length; i++){
        const mascara = leftFillNum(this.usuarios[i].idUsuario, 3)
        this.usuarios[i].idUsuario = mascara;
      }
    }); 
  }

  getUsuario(id: number){
    function leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0);
    }
    this.userService.getById(id).pipe(first()).subscribe((data)=>{
      console.log(data);
      this.usuario = data;
        const mascara = leftFillNum(this.usuario.idUsuario, 5)
        console.log(leftFillNum(this.usuario.idUsuario, 5));
        this.usuario.idUsuario = mascara;
        }); 
      }
    }

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {

  constructor(private userService: UsuarioService, @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<DialogDataExampleDialog>,) {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteUsuario(id: number): void{
    console.log("Id sendo deletado: " + id);
    this.userService.delete(id).pipe(first()).subscribe((data)=>{
      this.load();
    })
  }

  load() {
      location.reload()
  }
}