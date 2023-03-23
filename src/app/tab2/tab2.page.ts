import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // VARIAVEIS CRIADAS:

  time1_score = 0;
  time2_score = 0;
  time1_wins = 0;
  time2_wins = 0;
  valendo = 1;

  // UTILIZANDO O TOAST:

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'OPA, TRUCO',
      duration: 1200,
      position: position,
      cssClass: 'toast'
    });

    await toast.present();
  }

  // MEDIDOR DE PONTOS:

  change_contador(contador: number) {
    this.valendo = contador
    if (this.valendo > 2) {
      this.presentToast('bottom')
    }
  }

  // MEDIDOR DE PONTOS DO TIME 1:
  increase_team1_score() {
    this.time1_score += this.valendo
    this.valendo = 1
    if (this.time1_score >= 12) {
      this.time1_wins += 1
      this.time1_score = 0
    }
  }

  decrease_team1_score() {
    if (this.time1_score <= 0) {
    } else {
      this.time1_score -= this.valendo
      this.valendo = 1
    }

    if (this.time1_score <= 0) {
      this.time1_score = 0

    }
  }

  // MEDIDOR DE PONTOS DO TIME 2:

  increase_team2_score() {
    this.time2_score += this.valendo
    this.valendo = 1
    if (this.time2_score >= 12) {
      this.time2_wins += 1
      this.time2_score = 0
    }
  }

  decrease_team2_score() {
    if (this.time2_score <= 0) {
      // do nothing
    } else {
      this.time2_score -= this.valendo
      this.valendo = 1
    }

    if (this.time1_score <= 0) {
      this.time1_score = 0
    }
  }

  // LIMPANDO O JOGO:

  clean() {
    this.time1_score = 0;
    this.time2_score = 0;
    this.time1_wins = 0;
    this.time2_wins = 0;
    this.valendo = 1;
  }


}
