import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCSP';
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  public keySearch ; 
 public filteredItems;
  constructor(private http: Http) {
  }

  assignCopy():void{
   this.filteredItems = Object.assign([], this.data);
}
filterItem(value){
   if(!value) this.assignCopy(); //when nothing has typed
   this.filteredItems = Object.assign([], this.data).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
}
//this.assignCopy();//when you fetch collection from server.
  
  
  
  ngOnInit(): void {
    this.http.get('app/data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 1000);
      });
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
