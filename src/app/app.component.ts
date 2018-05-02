import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RenderService } from './render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  cards: Array<string> = [];
  cardIds: Array<string> = ['1', '2', '3', '4', '5'];

  constructor(private render: RenderService) {}

  ngOnInit(): void {

    this.cardIds.forEach((id) => {
      this.render.getHtml(id).then((html: string) => {
        this.cards.push(html);
      }).catch((e) => {
        console.log(e);
      });
    });
  }
}
