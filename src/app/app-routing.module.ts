import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './authorization/guard/authorization.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
        canMatch: [AuthorizationGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
