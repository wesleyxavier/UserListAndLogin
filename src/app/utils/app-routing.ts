import { Routes, Route } from '@angular/router';

const applicationRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../core/pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./../core/pages/user/user.module').then(m => m.UserModule)
  }
];

export { applicationRoutes };
