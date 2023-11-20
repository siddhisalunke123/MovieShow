import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { IMovie } from '../model/imovie';
import {MovieserviceService} from '../services/movieservice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  moviedata: IMovie
  constructor(private fs:FormBuilder , private ms:MovieserviceService,private route:Router,private ar:ActivatedRoute ) { }
  movieform =  this.fs.group({
    name:['',Validators.required],
    yearrelease : ['',[Validators.min(2000), Validators.max(2023)]],
    rating:['',[Validators.required , Validators.min(1),Validators.max(5)]]
  })

  savedata():void{
    this.moviedata = this.movieform.value
    if(this.moviedata.rating > 5)
    {
      alert('Error in ratings')
      return 
    }
    console.log(this.moviedata)
    this.ms.addMovie(this.moviedata).subscribe(
      ()=>{
        alert('Record Added successfully')
        this.route.navigate(['/listmovies'])
      }
     )
  }
  ngOnInit() {
  }

}
