import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promotion: Promotion;
  dish: Dish;
  leader: Leader;

  constructor(private promotionService: PromotionService,
    private dishService: DishService,
    private leaderService: LeaderService,
    @Inject('BaseUrl') private BaseUrl) { }

  ngOnInit() {
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);

    this.dishService.getFeaturedDish()
    .subscribe(dish=>this.dish=dish);
    
    this.leaderService.getFeaturedLeader()
    .subscribe(leader=>this.leader=leader);
  }

}
