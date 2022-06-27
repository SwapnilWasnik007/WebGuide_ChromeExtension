import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    setTimeOutId: any;
    rData: any = [];
    ngOnInit(): void {
        this.checkforData();
    }

    checkforData() {
        this.setTimeOutId = setInterval(() => { this.extractData() }, 10);
    }

    extractData() {
        let data = document.getElementById('tutorialDataString');
        if (data != null) {
            if (data.innerText == 'undefined') {
                return;
            }
            this.rData = JSON.parse(data.innerText);
            this.rData = this.rData.data.map(x => {
                return {
                    "item_Description": "",
                    "item_Sequence": "",
                    "item_Id": x.item_Id,
                    "item_CanvasData": x.item_CanvasData,
                    "item_Classes": x.item_Classes,
                    "url": x.url
                }
            });
            clearInterval(this.setTimeOutId);
            console.log(this.rData);
        }
    }

    SaveData() {
        console.log(this.rData);
        this.http.post(this.baseUrl + 'WebGuideAdmin', this.rData).subscribe(result => {
            console.log(result);
        }, error => console.error(error));

    }
}



