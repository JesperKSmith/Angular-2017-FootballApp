import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../../classes/club';
import { DataService } from '../../services/database/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})

export class ClubDetailsComponent implements OnInit {

  public club: Club;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router
  ){
    route.params.subscribe( params => {
      let id: number = +params['id'];
      if(id) {
        this.club = Object.assign({}, this.data.getClub(id));
      }
    });
  }

  ngOnInit() {
  }

}
