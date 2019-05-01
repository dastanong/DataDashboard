import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-images-chart',
  templateUrl: './images-chart.component.html',
  styleUrls: ['./images-chart.component.css']
})
export class ImagesChartComponent implements OnInit {

  chartType = "pie"
  chartLabels = []
  chartData = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let allImages = {}

    for(let images of data) {
      for(let tag of images.tags) {
        if(!allImages[tag]) {
          allImages[tag] = 0
        }
        allImages[tag] += 1
      }
    }

    this.chartLabels = Object.keys(allImages)

    for(let images of Object.keys(allImages)) {
      dataset.push(allImages[images])
      console.log(dataset)
    }

    this.chartData.push({
      data: dataset
    })
  }

}
