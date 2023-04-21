import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const SPR = false;

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: SPR ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
