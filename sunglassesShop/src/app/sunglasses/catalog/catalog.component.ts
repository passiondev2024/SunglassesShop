import { Component, OnInit } from '@angular/core';
import { SunglassesService } from '../sunglasses.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  isEmptyCollection: boolean = false
  emptyCollectionMessage: string | undefined

  constructor(private sunglassesService: SunglassesService) { }

  ngOnInit(): void {
    this.sunglassesService.getSunglasses().subscribe({
      next: sunglasses => {
        console.log(`sunglasses: ${sunglasses}`)
      }
      ,
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.isEmptyCollection = true
          this.emptyCollectionMessage = 'No sunglasses yet'
        } else {
          alert(error.statusText)
        }
      }
    })
  }
}
