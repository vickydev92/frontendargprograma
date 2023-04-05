import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  public formulario!: FormGroup;
  educacionList:any;

  constructor(public generalService: GeneralService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaDeInicio: ['', [Validators.required]],
      fechaDeFinal: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }

  ngOnInit(): void{
    this.generalService.obtenerInfoEdu().subscribe(data =>{
      console.log(data);
      this.educacionList=data;
    });
  }


}

