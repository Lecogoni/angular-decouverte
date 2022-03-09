import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  likes!: number;
  buttonLikeText: string = "Like Me !"

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.router.getCurrentNavigation());
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);

      // this.user = data

      this.likes = 2;
    })
  }

  onLikeIt() {
    if (this.buttonLikeText == 'Like Me !') {
      this.likes++;
      this.buttonLikeText = 'Unlike Me :(';
    } else {
      this.likes--;
      this.buttonLikeText = 'Like Me !';
    }
  }

}
