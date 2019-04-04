import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() strJson?: string;
  @Input() index?: number;
  /*@Input() avatar?: string;
  @Input() name?: string;
  @Input() language?: string;
  @Input() url?: string;
  @Input() created_at?: string;
  @Input() login?: string;
  @Input() pagehome?: string;*/

  avatar?: string;
  name?: string;
  language?: string;
  url?: string;
  created_at?: string;
  login?: string;
  pagehome?: string;

  constructor() { }

  ngOnInit() {
    var objJson = JSON.parse(this.strJson);

    this.avatar = objJson.items[this.index].owner.avatar_url;
    this.name = objJson.items[this.index].name;
    this.language = objJson.items[this.index].language
    this.url =objJson.items[this.index].url
    this.created_at = objJson.items[this.index].created_at
    this.login = objJson.items[this.index].owner.login
    this.pagehome = objJson.items[this.index].homepage

    console.log(this.avatar);
    console.log(this.name);
    console.log(this.language);
    console.log(this.url);
    console.log(this.created_at);
    console.log(this.login);
    console.log(this.pagehome);
  }

}
