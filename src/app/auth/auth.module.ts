import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { AuthRoutingModule } from "./auth.routing.module";
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class AuthModule {

}