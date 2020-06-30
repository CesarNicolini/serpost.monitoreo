import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  urlx:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.urlx = params.get("urlx");
      //console.log(params.get("urlx"))
      this.urlx = this.route.snapshot.queryParams['urlx']
      //this.urlx = this.urlx.replace("http:","")
      console.log(this.urlx)
    })
  }

  dos_barras (url)
  {
    return url.replace ("http:","")
  }

  seguro (url)
  {
    return  url.replace ("http","https")
  }

  

}
