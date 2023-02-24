import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {


  public formulario!: FormGroup;


  constructor(public generalService: GeneralService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaDeInicio: ['', [Validators.required]],
      fechaDeFinal: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });

  }

  editarExperiencia() {
    console.log(this.formulario.value)

  }

  ngOnInit(){
    
  }
}
