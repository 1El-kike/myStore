import {  Component, Input } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [ChipModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent  {
@Input() user :any =[]


}
