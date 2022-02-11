import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, "The Purpose Of Our Lives Is To Be Happy.",10,5,"Dalai Lama", "Joy Chemutai", new Date(2022, 2,11)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new  Date(quote.date)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }


  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  likeQuote(isLike, index){
    if (isLike) {
      this.quotes[index].upvotes+=1;
    }
  }

  dislikeQuote(isDislike, index){
    if (isDislike) {
      this.quotes[index].downvotes+=1;
    }
  }

  constructor() { }

  ngOnInit() {
  }
  
}

