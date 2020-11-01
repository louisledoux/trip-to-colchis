import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    TranslateModule,

    NzGridModule,
    NzListModule,
    NzSpaceModule,
    NzButtonModule,
    NzInputModule,

    RouterModule.forChild(routes)
  ]
})
export class HomepageModule { }
