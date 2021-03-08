import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CadastroUsuarioComponent } from 'app/user-profile/cadastro-usuario/cadastro-usuario.component';
import { CadastroEmpresaComponent } from 'app/user-profile/cadastro-empresa/cadastro-empresa.component';
import { CadastroProdutoComponent } from 'app/user-profile/cadastro-produto/cadastro-produto.component';
import { ListaUsuarioComponent } from 'app/user-profile/lista-usuario/lista-usuario.component';
import { CadastroClienteComponent } from 'app/user-profile/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from 'app/user-profile/lista-cliente/lista-cliente.component';
import { ListaProdutoComponent } from 'app/user-profile/lista-produto/lista-produto.component';
import { ListaEmpresaComponent } from 'app/user-profile/lista-empresa/lista-empresa.component';
import { AuthGaurdService } from 'app/service/auth-gaurd.service';
import { LoginComponent } from 'app/login/login.component';
import { LogoutComponent } from 'app/logout/logout.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: DashboardComponent,canActivate:[AuthGaurdService] },
    { path: 'Painel de Controle', component: DashboardComponent, canActivate:[AuthGaurdService] },
    { path: 'Cadastros',   component: UserProfileComponent,
    children: [
        {
          path: 'cadastroUsuario', // child route path
          component: CadastroUsuarioComponent, canActivate:[AuthGaurdService] // child route component that the router renders
        },
        {
          path: 'cadastroEmpresa',
          component: CadastroEmpresaComponent, canActivate:[AuthGaurdService] // another child route component that the router renders
        },
        {
          path: 'cadastroProduto',
          component: CadastroProdutoComponent, canActivate:[AuthGaurdService] // another child route component that the router renders
        },
        {
           path: 'cadastroProduto',
           component: CadastroProdutoComponent, canActivate:[AuthGaurdService] // another child route component that the router renders
        },
        {
           path: 'listarUsuario',
            component: ListaUsuarioComponent, canActivate:[AuthGaurdService] 
         },
         {
            path: 'cadastrarCliente',
             component: CadastroClienteComponent, canActivate:[AuthGaurdService] 
          },
          {
            path: 'listarCliente',
             component: ListaClienteComponent, canActivate:[AuthGaurdService] 
          },
          {
            path: 'listarProduto',
             component: ListaProdutoComponent, canActivate:[AuthGaurdService] 
          },
          {
            path: 'listarEmpresa',
             component: ListaEmpresaComponent, canActivate:[AuthGaurdService] 
          },
      ], canActivate:[AuthGaurdService]
    },
    { path: 'Listas',     component: TableListComponent, canActivate:[AuthGaurdService] },
    { path: 'typography',     component: TypographyComponent, canActivate:[AuthGaurdService] },
    { path: 'icons',          component: IconsComponent, canActivate:[AuthGaurdService] },
    { path: 'maps',           component: MapsComponent, canActivate:[AuthGaurdService] },
    { path: 'notifications',  component: NotificationsComponent, canActivate:[AuthGaurdService] },
    { path: 'upgrade',        component: UpgradeComponent, canActivate:[AuthGaurdService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];
