import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { log } from 'console';
import { Ydata } from '../ydata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

constructor(private _DataService:DataService){

}
 ney=inject(DataService)
 lus:Ydata[]=[]
 ngOnInit(): void {
     this._DataService.getproduct().subscribe({
      next:(res)=>{
        this.lus=res;
        //  console.log(this.lus)
      },
      error:(eror)=>{
        console.log(eror);
      }
     })
 }
}
