import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-addnoticia',
  templateUrl: './addnoticia.page.html',
  styleUrls: ['./addnoticia.page.scss'],
})
export class AddnoticiaPage implements OnInit {
  form: FormGroup;

  constructor(private noticiasService: NoticiasService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() { 
  }

  saveNewNoticia(title, imageURL, subtitle, description) {
    this.noticiasService.addNoticia(title.value, imageURL.value, subtitle.value, description.value);
    this.router.navigate(['/inicio'])
  }

}
