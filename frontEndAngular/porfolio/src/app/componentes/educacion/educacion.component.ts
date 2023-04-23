import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { EducacionesService } from 'src/app/servicios/educaciones.service';
import { Educacion } from 'src/app/modelos/usuario/educacion';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  public formulario!: FormGroup;
  educacionList:any;
  private educacionActualizada = new Subject<void>();

  constructor(public generalService: GeneralService, private formBuilder: FormBuilder, private http: HttpClient, private dataService: DataService, private educacionService: EducacionesService) {
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }

  ngOnInit(): void{
    this.dataService.misEducaciones$.subscribe(data => {
      this.educacionList = data;
    });

    this.educacionActualizada.subscribe(() => {
      this.dataService.actualizarMiEducacion(); 
    })
  }

  editarEducacion(){
    this.educacionService.editarEducacion(this.formulario.value.id, this.formulario.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.educacionList = this.formulario.value;
        this.educacionActualizada.next(); 
        this.formulario.reset();
      }
    )
  }
  

  eliminarEducacion(){}


  agregarEducacion(){}


}

