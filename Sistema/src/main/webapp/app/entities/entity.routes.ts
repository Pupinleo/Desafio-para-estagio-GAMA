import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'metaAlunoApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'meta',
    data: { pageTitle: 'metaAlunoApp.meta.home.title' },
    loadChildren: () => import('./meta/meta.routes'),
  },
  {
    path: 'aluno',
    data: { pageTitle: 'metaAlunoApp.aluno.home.title' },
    loadChildren: () => import('./aluno/aluno.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
