import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../services/file.service';
import {Archivo} from '../../interfaces/File';


@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.css']
})
export class FilePreviewComponent implements OnInit {

  id: string;
  // file:Archivo;
  file:Blob;


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params ['id'];
      this.fileService.getFile(this.id)
        .subscribe(
          res => {
            this.file = res;
          },
          err => console.log(err)
        )
    })
  }

  
  deletePhoto(id: string) {
    this.fileService.deleteFile(id)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/files'])
      })
  }

  updateFile(title: HTMLInputElement, nombre:HTMLInputElement,  description: HTMLTextAreaElement): boolean {
    this.fileService.updateFile(this.id, title.value, nombre.value, description.value)
      .subscribe(
        res => {
          this.router.navigate(['/files']);
      });
    return false;
  }

}
