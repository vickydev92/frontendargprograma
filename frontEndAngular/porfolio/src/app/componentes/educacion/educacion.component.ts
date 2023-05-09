import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
   
  }

  ngOnInit(): void{

    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });

    this.dataService.misEducaciones$.subscribe(data => {
      this.educacionList = data;
    });

    this.educacionActualizada.subscribe(() => {
      this.dataService.actualizarMiEducacion(); 
    })

    const idEducacionSeleccionada=Number(
      (<HTMLSelectElement>document.getElementById('select-idEdu')).value
    );

    const educacionSeleccionada= this.buscarEducacionPorId(
      idEducacionSeleccionada
    );
      if (educacionSeleccionada) {
        this.formulario.setValue({
          id: educacionSeleccionada.id,
          imagen:educacionSeleccionada.imagen,
          titulo:educacionSeleccionada.titulo,
          fechaIni: educacionSeleccionada.fechaIni,
          fechaFin: educacionSeleccionada.fechaFin,
          descripcion: educacionSeleccionada.descripcion
        });
      }

  }

  buscarEducacionPorId(id:number): Educacion{
    return this.educacionList.find((educacion:Educacion)=> educacion.id === id);
  }

  mostrarDatos(){
    const idEducacionSeleccionada=Number(
      (<HTMLSelectElement>document.getElementById('select-idEdu')).value
    );
    const educacionSeleccionada= this.buscarEducacionPorId(
      idEducacionSeleccionada
    );
    if (educacionSeleccionada) {
      this.formulario.setValue({
        id: educacionSeleccionada.id,
        imagen:educacionSeleccionada.imagen,
        titulo:educacionSeleccionada.titulo,
        fechaIni: educacionSeleccionada.fechaIni,
        fechaFin: educacionSeleccionada.fechaFin,
        descripcion: educacionSeleccionada.descripcion
      });
    }
    
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
  

  eliminarEducacion(){
    const educacionId = this.formulario.value.id;
    this.educacionService.eliminarEducacion(educacionId).subscribe(
      () => {
        this.educacionActualizada.next(); //Emitir el subject para actualizar los datos
        this.formulario.reset();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  agregarEducacion(){
    const educacion= this.formulario.value;
    this.educacionService.crearEducacion(educacion).subscribe(
      (response:Educacion) =>{
        console.log(response);
        this.educacionList = educacion;
        this.educacionActualizada.next();
        this.formulario.reset();
      }
    )
  }


}

