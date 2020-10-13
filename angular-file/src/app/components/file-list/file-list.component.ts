import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {FileService} from '../../services/file.service'


@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  //files: any = [];
  files =[];


  constructor(private fileService: FileService, private router:Router) { }

  ngOnInit() {
    this.fileService.getFiles()
    .subscribe(
      res => {
        this.files = res;
      },
      err => console.log (err)
    )

  }

  selectedCard(id: string){
   this.router.navigate(['/files', id]); 
  }

}
