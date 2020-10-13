import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FileService } from "../../services/file.service";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {

  //crear la propiedad tipo file
  file:File;
  fileSelected: string | ArrayBuffer;


  constructor(private fileService:FileService, private router:Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: HtmlInputEvent):void{
    if (event.target.files && event.target.files[0]){
      this.file = <File> event.target.files[0];
      //preview
      const reader = new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);

    }

  }
  uploadFile(title: HTMLInputElement, description: HTMLTextAreaElement , nombre: HTMLInputElement):boolean {
    this.fileService.createFile(title.value, description.value, nombre.value, this.file)
    .subscribe(res => {
      this.router.navigate(['/files']);
    }, err => console.log(err) )
      
    return false;
  }

}
