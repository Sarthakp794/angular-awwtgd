import { NgModule } from '@angular/core';
@NgModule({
 declarations: [],
 imports: [],
 exports: []
})
export class MathModule { }
math.service.ts:--
import { Injectable } from '@angular/core';
@Injectable({
 providedIn: 'root'
})
export class MathService {
 constructor() { }
 add(a: number, b: number): number {
 return a + b;
 }
 subtract(a: number, b: number): number {
 return a - b;
 }
 divide(a: number, b: number): number {
 return a / b;
 }
 multiply(a: number, b: number): number {
 return a * b;
 }
}
