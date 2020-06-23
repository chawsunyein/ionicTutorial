import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  actionsheet() {
    this.router.navigateByUrl('/actionsheet');
  }
  alert() {
    this.router.navigateByUrl('/alert');
  }
  badge() {
    this.router.navigateByUrl('/badge');
  }
  button() {
    this.router.navigateByUrl('/button');
  }
  avatar() {
    this.router.navigateByUrl('/avatar');
  }
  checkbox() {
    this.router.navigateByUrl('/checkbox');
  }
  chip() {
    this.router.navigateByUrl('/chip');
  }
  card() {
    this.router.navigateByUrl('/card');
  }
  content() {
    this.router.navigateByUrl('/content');
  }
  datetime() {
    this.router.navigateByUrl('/datetime');
  }
  fabbutton() {
    this.router.navigateByUrl('/fabbutton');
  }
  fabcontainer() {
    this.router.navigateByUrl('/fabcontainer');
  }
  fablist() {
    this.router.navigateByUrl('/fablist');
  }
  footer() {
    this.router.navigateByUrl('/footer');
  }
  grid() {
    this.router.navigateByUrl('/grid');
  }
  header() {
    this.router.navigateByUrl('/header');
  }
  hidewhen() {
    this.router.navigateByUrl('/hidewhen');
  }
  icon() {
    this.router.navigateByUrl('/icon');
  }
  img() {
    this.router.navigateByUrl('/img');
  }
  infinitescroll() {
    this.router.navigateByUrl('/infinitescroll');
  }
  input() {
    this.router.navigateByUrl('/input');
  }
  item() {
    this.router.navigateByUrl('/item');
  }
  itemoption() {
    this.router.navigateByUrl('/itemoption');
  }
  itemreorder() {
    this.router.navigateByUrl('/itemreorder');
  }
  itemsliding() {
    this.router.navigateByUrl('/itemsliding');
  }
  label() {
    this.router.navigateByUrl('/label');
  }
  ionnote() {
    this.router.navigateByUrl('/ion-note');
  }
  list() {
    this.router.navigateByUrl('/ion-list');
  }
  listheader() {
    this.router.navigateByUrl('/list-header');
  }
  listthumbnail() {
    this.router.navigateByUrl('/list-thumbnail');
  }
  loading() {
    this.router.navigateByUrl('/loading');
  }
  menu() {
    this.router.navigateByUrl('/menu');
  }
  menuclose() {
    this.router.navigateByUrl('/menuclose');
  }
  menutoggle() {
    this.router.navigateByUrl('/menutoggle');
  }
  menusplitpane() {
    this.router.navigateByUrl('/menusplitpane');
  }
  modal() {
    this.router.navigateByUrl('/ionmodal');
  }
  navbar() {
    this.router.navigateByUrl('/navbar');
  }
  navpush() {
    this.router.navigateByUrl('/navpush');
  }
  navpop() {
    this.router.navigateByUrl('/navpop');
  }
  note() {
    this.router.navigateByUrl('/note');
  }
  option() {
    this.router.navigateByUrl('/option');
  }
  ionplatform() {
    this.router.navigateByUrl('/ionplatform');
  }
  ionpopver() {
    this.router.navigateByUrl('/ionpopover');
  }
  radio() {
    this.router.navigateByUrl('/radio');
  }
  radiogroup() {
    this.router.navigateByUrl('/radiogroup');
  }
  range() {
    this.router.navigateByUrl('/range');
  }
  refresher() {
    this.router.navigateByUrl('/refresher');
  }
  reorder() {
    this.router.navigateByUrl('/reorder');
  }
  scroll() {
    this.router.navigateByUrl('/scroll');
  }
  searchbar() {
    this.router.navigateByUrl('/searchbar');
  }
  segment() {
    this.router.navigateByUrl('/segment');
  }
  segmentbutton() {
    this.router.navigateByUrl('/segmentbutton');
  }
  select() {
    this.router.navigateByUrl('/select');
  }
  showwhen() {
    this.router.navigateByUrl('/showwhen');
  }
  slide() {
    this.router.navigateByUrl('/slide');
  }
  slides() {
    this.router.navigateByUrl('/slides');
  }
  spinner() {
    this.router.navigateByUrl('/spinner');
  }
  splitpane() {
    this.router.navigateByUrl('/splitpane');
  }
  tab() {
    this.router.navigateByUrl('/tab');
  }
  thumbnail() {
    this.router.navigateByUrl('/thumbnail');
  }
  title() {
    this.router.navigateByUrl('/title');
  }
  toast() {
    this.router.navigateByUrl('/toast');
  }
  toggle() {
    this.router.navigateByUrl('/toggle');
  }
  toolbar() {
    this.router.navigateByUrl('/toolbar');
  }
  backbutton() {
    this.router.navigateByUrl('/backbutton');
  }
  typography() {
    this.router.navigateByUrl('/typography');
  }
  virtualscroll() {
    this.router.navigateByUrl('/virtualscroll');
  }
}
