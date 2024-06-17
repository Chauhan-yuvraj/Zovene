import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  currencyToggle = () =>{
    const currencyToggleBtn = document.getElementsByClassName('cur-opt')
    console.log(" ");
    
  }
}
