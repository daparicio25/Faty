import { Component } from '@angular/core';

//firebase
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from "@angular/common/http";

//modal
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  array: Datos[] = [];
  strJson: string = "";

  constructor(private fire: AngularFirestore, private http: HttpClient, public alertController: AlertController, public modalController: ModalController) {

  }

  consulta() {
    this.array = [];

    this.http.get("https://api.github.com/search/repositories?q=topic:" + this.name).subscribe((data) => {
      this.strJson = JSON.stringify(data);
      var objJson = JSON.parse(this.strJson);

      for (let i = 0; i < objJson.items.length; i++) {
        if (i <= 14) {
          this.array.push({
            avatar_url: objJson.items[i].owner.avatar_url,
            name: objJson.items[i].name,
            language: objJson.items[i].language,
            url: objJson.items[i].url,
            created_at: objJson.items[i].created_at,
            login: objJson.items[i].owner.login,
            homepage: objJson.items[i].homepage
          });
        }
      }
    });
  }

  async abrir_modal(index: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        strJson: this.strJson,
        index: index
        /*
        avatar: this.array[index].avatar_url,
        name: this.array[index].name,
        language: this.array[index].language,
        url: this.array[index].url,
        created_at: this.array[index].created_at,
        login: this.array[index].login,
        homepage: this.array[index].homepage*/
      }
    });
    await modal.present();
  }

}

interface Datos {
  avatar_url?: string;
  name?: string;
  language?: string;
  description?: string;
  url?: string;
  created_at?: string;
  login?: string;
  homepage?: string;
}
