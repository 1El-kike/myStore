import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";


@NgModule({
    declarations:[
        AppComponent
        
    ],
imports:[
    BrowserModule,
    RouterModule.forRoot(routes)
],
providers:[],
bootstrap:[AppComponent],
})

export class AppModule {}