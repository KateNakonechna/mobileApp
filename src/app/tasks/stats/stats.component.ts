import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  categories = [
    { category: 'Home', count: 7 },
    { category: 'Job', count: 15 },
    { category: 'Rest', count: 12 },
    { category: 'Shopping', count: 30 }

    // in memoryewbapi
  ];

  constructor() {}
}
