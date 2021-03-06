import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
const PagesRoutes: Routes = [
    { path: '',
     component: PagesComponent ,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progres', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]}
];
// tslint:disable-next-line:eofline
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);