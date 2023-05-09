import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { GeneralService } from 'src/app/general.service';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/modelos/usuario/skills'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  private skillsActualizada = new Subject<void>();
  public formulario!: FormGroup;
  skillsList:any;
  
  constructor( public generalService: GeneralService, private formBuilder: FormBuilder, private dataService: DataService, private skillsService:SkillsService){
  
  }


  ngOnInit(): void{

    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });


    this.dataService.misSkills$.subscribe(data => {
      this.skillsList = data;
    })
    this.skillsActualizada.subscribe(() => {
      this.dataService.actualizarMiSkill(); 
    })

    const idSkillsSeleccionada=Number(
      (<HTMLSelectElement>document.getElementById('select-idSkills')).value
    );

    const skillsSeleccionada= this.buscarSkillsPorId(
      idSkillsSeleccionada
    );
      if (skillsSeleccionada) {
        this.formulario.setValue({
          id: skillsSeleccionada.id,
          imagen:skillsSeleccionada.imagen,
          titulo:skillsSeleccionada.titulo,
          porcentaje:skillsSeleccionada.porcentaje,
          
        });
      }

  }

  buscarSkillsPorId(id:number): Skills{
    return this.skillsList.find((skills:Skills)=> skills.id === id);
  }

  mostrarDatos(){
    const idSkillsSeleccionada=Number(
      (<HTMLSelectElement>document.getElementById('select-idSkills')).value
    );
    const skillsSeleccionada= this.buscarSkillsPorId(
      idSkillsSeleccionada
    );
    if (skillsSeleccionada) {
      this.formulario.setValue({
        id: skillsSeleccionada.id,
        imagen:skillsSeleccionada.imagen,
        titulo:skillsSeleccionada.titulo,
        porcentaje: skillsSeleccionada.porcentaje,
      });
    }
  }

  editarSkills(){
    console.log(this.formulario.value);
    this.skillsService.editarSkills(this.formulario.value.id, this.formulario.value).subscribe(
      (response:Skills) => {
        console.log(response); 
        this.skillsList = this.formulario.value;
        this.skillsActualizada.next(); 
        this.formulario.reset();
      }
    )
  
  }
  
  eliminarSkills(){
    const skillsId = this.formulario.value.id;
    this.skillsService.eliminarSkills(skillsId).subscribe(
      () => {
        this.skillsActualizada.next(); //Emitir el subject para actualizar los datos
        this.formulario.reset();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  
  agregarSkills(){
    const skills= this.formulario.value;
    this.skillsService.crearSkills(skills).subscribe(
      (response:Skills) =>{
        console.log(response);
        this.skillsList = skills;
        this.skillsActualizada.next();
        this.formulario.reset();
      }
    )
  }
}

