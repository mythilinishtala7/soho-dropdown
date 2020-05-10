import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AppComponent } from './app.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent, ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [TestModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

