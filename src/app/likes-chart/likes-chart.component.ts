import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-likes-chart',
  templateUrl: './likes-chart.component.html',
  styleUrls: ['./likes-chart.component.css']
})
export class LikesChartComponent implements OnInit {

  chartType = "pie"
  chartLabels = []
  chartData = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let imageLikes = {}

    for(let images of data) {
      console.log(images.tags)
      for(let tag of images.tags) {
        if(!imageLikes[tag]) {
          imageLikes[tag] = 0
        }
        imageLikes[tag] += images.likes
      }
    }
    console.log(dataset)

    this.chartLabels = Object.keys(imageLikes)
    console.log(this.chartLabels)

    for(let likes of Object.keys(imageLikes)) {
      dataset.push(imageLikes[likes])
      console.log(likes)
    }

    this.chartData.push({
      data: dataset
    })
    console.log(this.chartData)
  }

}
