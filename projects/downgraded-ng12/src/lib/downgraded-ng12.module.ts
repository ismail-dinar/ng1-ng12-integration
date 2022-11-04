import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DowngradedNg12Component } from './downgraded-ng12.component';

@NgModule({
    declarations: [DowngradedNg12Component],
    exports: [DowngradedNg12Component],
    imports: [BrowserModule]
})
export class DowngradedNg12Module implements DoBootstrap {
    public ngDoBootstrap(appRef: ApplicationRef): void {
    }
}
