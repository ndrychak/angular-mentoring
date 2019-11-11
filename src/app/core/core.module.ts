import { NgModule } from '@angular/core';

import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [],
  imports: [
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'})
  ],
  exports: []
})

export class CoreModule { }
