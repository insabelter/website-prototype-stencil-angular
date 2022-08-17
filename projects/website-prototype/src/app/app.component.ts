import { Component, HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-prototype';

  groceries: string[] = ['Mehl', 'Eier', 'Birnen', 'Mehl'];

  @HostListener('tagsChanged',['$event.detail']) onTagsChanged(groceries: string[]) {
    this.groceries = groceries;
  }

  sortGroceries() {
    var sortedGroceries = [...new Set(this.groceries)].sort();
    return sortedGroceries;
  }
}
