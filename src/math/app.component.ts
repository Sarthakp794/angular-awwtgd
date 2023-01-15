import { Component, VERSION } from '@angular/core';
import { MathService } from './math/math.service';
@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
 styleUrls: [ './app.component.css' ]
})
export class AppComponent {
 name = 'Angular ' + VERSION.major;
 a: number;
 b: number;
 result: number;
 constructor(private math: MathService) { }
 add(a: number, b: number): void {
 this.result=a+b;
 }
 subtract(a: number, b: number): void {
 this.result=a-b;
 }
 divide(a: number, b: number): void {
 this.result=a/b;
 }
 multiply(a: number, b: number): void {
 this.result=a*b;
 }
}