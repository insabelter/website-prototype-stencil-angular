import { Component, HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-prototype';

  names: string[] = ['Anita', 'Bob'];

  @HostListener('tagsChanged',['$event.detail']) onTagsChanged(names: string[]) {
    this.names = names;
  }
}
