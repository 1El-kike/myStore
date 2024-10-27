import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-isvaluezero',
  standalone:true,
  templateUrl: './sections-isvaluezero.component.html',
  styleUrls: ['./sections-isvaluezero.component.css']
})
export class SectionsIsvaluezeroComponent implements OnInit {

title = input<string>('')

  constructor() { }

  ngOnInit() {
  }

}
