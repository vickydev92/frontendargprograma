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
  dbjson!:string[];
  public culo: any;

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

  editarEducacion() {
    console.log(this.formulario.value)
    
    this.culo.splice(this.formulario.value);
    this.guardarDatos();
  }
  ngOnInit() {
    this.http.get<string[]>('./assets/db.json').subscribe(data => {
      console.log(data);
       this.culo = data;
    });
  }

  guardarDatos() {
    // Convertir el objeto FormGroup a formato JSON
    const json = JSON.stringify(this.formulario.value);


    // Escribir los valores en un archivo JSON existente utilizando HttpClient
    this.http.put(this.culo, json)
      .subscribe(
        response => console.log('Los datos han sido escritos en el archivo JSON'),
        error => console.error('Error al escribir los datos en el archivo JSON:', error)
      );
  }


}

