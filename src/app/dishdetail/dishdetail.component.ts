import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input() dish :Dish;

  constructor(private location: Location,
    private dishService:DishService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack() : void {
    this.location.back();
  }
}
