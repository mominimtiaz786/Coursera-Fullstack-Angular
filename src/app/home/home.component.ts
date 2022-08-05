import { Component, OnInit } from '@angular/core';
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
  private leaderService: LeaderService) { }

  ngOnInit() {
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.dish = this.dishService.getFeaturedDish();
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
