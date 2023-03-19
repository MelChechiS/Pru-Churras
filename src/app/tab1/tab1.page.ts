import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-360deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})

export class Tab1Page {
  cara = 'assets/cara.png';
  coroa = 'assets/coroa.png';
  logo = 'assets/logo.png';
  image = this.logo;
  info = 'Clique no botão para jogar!';
  state = 'default';

  constructor() { }

  jogarMoeda() {
    this.info = 'Girando...';
    this.image = this.logo;
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {

      if (Math.random() < 0.5) {
        this.image = this.coroa;
        this.info = "Coroa!"
      } else {
        this.image = this.cara;
        this.info = 'Cara!'
      }
    }, 1000);
  }
}
