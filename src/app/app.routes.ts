import { Routes } from '@angular/router';
/*
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';*/

export const routes: Routes = [

  /*{path:'page1', component:Page1Component},
  {path:'page2', component:Page2Component},
  {path:'page3', component:Page3Component},*/

  {
    path: 'page1', loadComponent: () => import('./pages/page1/page1.component')
      .then(mod => mod.Page1Component)
  },
  {
    path: 'page2', loadComponent: () => import('./pages/page2/page2.component')
      .then(mod => mod.Page2Component)
  },
  {
    path: 'page3', loadComponent: () => import('./pages/page3/page3.component')
      .then(mod => mod.Page3Component)
  }

];
