import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { CadastroUsuarioComponent } from 'app/user-profile/cadastro-usuario/cadastro-usuario.component';
import { CadastroEmpresaComponent } from 'app/user-profile/cadastro-empresa/cadastro-empresa.component';
import { CadastroProdutoComponent } from 'app/user-profile/cadastro-produto/cadastro-produto.component';
import { PainelEmpresaComponent } from 'app/user-profile/painel-empresa/painel-empresa.component';
import { ListaUsuarioComponent } from 'app/user-profile/lista-usuario/lista-usuario.component';
import { CadastroClienteComponent } from 'app/user-profile/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from 'app/user-profile/lista-cliente/lista-cliente.component';
import { ListaProdutoComponent } from 'app/user-profile/lista-produto/lista-produto.component';
import { ListaEmpresaComponent } from 'app/user-profile/lista-empresa/lista-empresa.component';
import { PainelControleComponent } from 'app/user-profile/painel-controle/painel-controle.component';
import { LoginComponent } from 'app/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { MaskPointDirective } from 'app/directives/mask-point.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CadastroUsuarioComponent,
    CadastroEmpresaComponent,
    CadastroProdutoComponent,
    PainelEmpresaComponent,
    ListaUsuarioComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    ListaProdutoComponent,
    ListaEmpresaComponent,
    PainelControleComponent,
    LoginComponent,
    MaskPointDirective
  ]
})

export class AdminLayoutModule {}
