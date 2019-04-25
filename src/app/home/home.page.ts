import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor:number = 0;

  public atum1() {
    this.valor = this.valor + 16.00;
    alert ("Pedido adicionado");
  }

  public atum2() {
    this.valor = this.valor + 32.00;
    alert ("Pedido adicionado");
  }

  public bacon1() {
    this.valor = this.valor + 15.00;
    alert ("Pedido adicionado");
  }

  public bacon2() {
    this.valor = this.valor + 30.00;
    alert ("Pedido adicionado");
  }
  
  public brocolis1() {
    this.valor = this.valor + 16.00;
    alert ("Pedido adicionado");
  }

  public brocolis2() {
    this.valor = this.valor + 32.00;
    alert ("Pedido adicionado");
  }
   
  public calabresa1() {
    this.valor = this.valor + 15.00;
    alert ("Pedido adicionado");
  }

  public calabresa2() {
    this.valor = this.valor + 30.00;
    alert ("Pedido adicionado");
  }

  public frango1() {
    this.valor = this.valor + 15.00;
    alert ("Pedido adicionado");
  }

  public frango2() {
    this.valor = this.valor + 30.00;
    alert ("Pedido adicionado");
  }

  public queijos1() {
    this.valor = this.valor + 17.50;
    alert ("Pedido adicionado");
  }

  public queijos2() {
    this.valor = this.valor + 35.00;
    alert ("Pedido adicionado");
  }

  public escarola1() {
    this.valor = this.valor + 16.00;
    alert ("Pedido adicionado");
  }

  public escarola2() {
    this.valor = this.valor + 32.00;
    alert ("Pedido adicionado");
  }

  public lombo1() {
    this.valor = this.valor + 16.00;
    alert ("Pedido adicionado");
  }

  public lombo2() {
    this.valor = this.valor + 32.00;
    alert ("Pedido adicionado");
  }

  public marguerita1() {
    this.valor = this.valor + 15.00;
    alert ("Pedido adicionado");
  }

  public marguerita2() {
    this.valor = this.valor + 30.00;
    alert ("Pedido adicionado");
  }

  public mussarela1() {
    this.valor = this.valor + 15.00;
    alert ("Pedido adicionado");
  }

  public mussarela2() {
    this.valor = this.valor + 30.00;
    alert ("Pedido adicionado");
  }
  constructor() { }

  ngOnInit () {
  
  }
}
