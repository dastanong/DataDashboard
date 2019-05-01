import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartType = "line"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let allImages = {}

    // var allMonths = new Array()
    // allMonths[0] = "January";
    // allMonths[1] = "February";
    // allMonths[2] = "March";
    // allMonths[3] = "April";
    // allMonths[4] = "May";
    // allMonths[5] = "June";
    // allMonths[6] = "July";
    // allMonths[7] = "August";
    // allMonths[8] = "September";
    // allMonths[9] = "October";
    // allMonths[10] = "November";
    // allMonths[11] = "December";

    for(let images of data) {
        var months = new Date(images.dateAdded)
        var month = months.getMonth()

      //for(let i = 0; i < allMonths.length; i++) {
        //if(i == month) {
          if(!allImages[month]) {
            allImages[month] = 0
          }
          allImages[month] += 1
          //}
        //}
      }
    
    this.chartLabels = Object.keys(allImages)

    for(let tag of Object.keys(allImages)) {
      dataset.push(allImages[tag])
    }

    this.chartData.push({
      data: dataset
    })
      
      console.log(this.chartData)
  }

}
