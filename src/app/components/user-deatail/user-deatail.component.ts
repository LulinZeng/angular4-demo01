import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/my-service.service'
@Component({
  selector: 'app-user-deatail',
  templateUrl: './user-deatail.component.html',
  styleUrls: ['./user-deatail.component.css']
})
export class UserDeatailComponent implements OnInit {
  id: any;
  user: object = {};
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      this.id=params.id;
    })
  }

  ngOnInit() {
    this.dataService.getSingleUser(this.id).subscribe(user => {
      this.user = user;
    })
  }

}
