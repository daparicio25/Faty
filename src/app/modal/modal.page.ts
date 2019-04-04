import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() avatar?: string;
  @Input() name?: string;
  @Input() language?: string;
  @Input() url?: string;
  @Input() created_at?: string;
  @Input() login?: string;
  @Input() pagehome?: string;

  constructor() { }

  ngOnInit() {
    console.log(this.avatar);
    console.log(this.name);
    console.log(this.language);
    console.log(this.url);
    console.log(this.created_at);
    console.log(this.login);
    console.log(this.pagehome);
  }

}
