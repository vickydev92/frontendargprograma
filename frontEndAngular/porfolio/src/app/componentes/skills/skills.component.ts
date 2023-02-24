import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public formulario!: FormGroup;
  
  constructor( public generalService: GeneralService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }

  editarSkills() {
    console.log(this.formulario.value)

  }
  
}
