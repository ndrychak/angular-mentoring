import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'})
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule { }
