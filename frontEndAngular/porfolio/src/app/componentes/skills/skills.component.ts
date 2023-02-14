import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor( public generalService: GeneralService){}
  
}
