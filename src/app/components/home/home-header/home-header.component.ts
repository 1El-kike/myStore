import { Component, inject, input, OnInit } from '@angular/core';
import { LocalstoreService } from '../../services/localstore.service';
import { AvatarComponent } from '../../../layout/avatar/avatar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [AvatarComponent,RouterLink],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit {
  private _localStore = inject(LocalstoreService);

  //imae de fondo
  image = input.required<string>();

  //datos de usuario
  user: any = null;

  ngOnInit(): void {
    this.user = this._localStore.getUser();
    if (this.user.length == 0) {
      this.user = null;
    }
  }
}
