import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  chartType = "bar"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let imageLikes = {}

    for(let images of data) {
      var months = new Date(images.dateAdded)
      var month = months.getMonth()
      
      if(!imageLikes[month]) {
        imageLikes[month] = {}
      }
      for(let tag of images.tags) {
        if(!imageLikes[month][tag]) {
          imageLikes[month][tag] = 0
        }
        imageLikes[month][tag] += images.likes
      }
    }

    this.chartLabels = Object.keys(imageLikes)
    console.log(imageLikes)

    let aggregateLikes = {}

    for(let month of Object.keys(imageLikes)) {
      for(let tag in imageLikes[month]) {
        if(!aggregateLikes[tag]) {
          aggregateLikes[tag] = []
        }
        aggregateLikes[tag].push(imageLikes[month][tag])
        console.log(aggregateLikes[tag])
      }
    }
    
    for(let images in aggregateLikes){
      console.log(aggregateLikes[images])
      dataset.push({
        data: aggregateLikes[images],
        label: images
      })
    }
    this.chartData = dataset
    console.log(this.chartData)
  }

}
