import { Component, OnInit } from '@angular/core';
import { IDetail } from '../model/idetail';
import { MovieserviceService } from '../services/movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdetail',
  templateUrl: './createdetail.component.html',
  styleUrls: ['./createdetail.component.css']
})
export class CreatedetailComponent implements OnInit {
  detailsdata : IDetail={deatilid : 0,actor: '',movieid: 0,gender : '',role : ''}
  showdata : any[] = []

  constructor(private ms : MovieserviceService, private router: Router) { }
savedata(data : IDetail) : void
{
  this.detailsdata = data
  this.ms.addDetails(this.detailsdata).subscribe(
    () => {
      alert('Record added successfully')
      this.router.navigate(['/listmovies'])
    }
  )
}
  ngOnInit() {
    this.ms.getAllMovies().subscribe(data=>{this.showdata.push(...data)})
  }

}
