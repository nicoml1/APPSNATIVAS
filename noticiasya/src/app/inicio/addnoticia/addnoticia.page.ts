import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-addnoticia',
  templateUrl: './addnoticia.page.html',
  styleUrls: ['./addnoticia.page.scss'],
})
export class AddnoticiaPage implements OnInit {

  constructor(private noticiasService: NoticiasService, private router: Router) { }

  ngOnInit() {
  }

  saveNewNoticia(title, imageURL, subtitle, description) {
    this.noticiasService.addNoticia(title.value, imageURL.value, subtitle.value, description.value);
    this.router.navigate(['/inicio'])
  }

}
