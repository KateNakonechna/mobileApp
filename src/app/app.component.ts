import { Component, ViewChild } from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(RadSideDrawerComponent, { static: false }) sideDrawerComponent: RadSideDrawerComponent;

  constructor(private routerExtensions: RouterExtensions) {}

  navigateToTask(): void {
    this.routerExtensions.navigate(['/task'], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToList(): void {
    this.routerExtensions.navigate(['/list'], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToStats(): void {
    this.routerExtensions.navigate(['/stats'], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToSettings(): void {
    this.routerExtensions.navigate(['/settings'], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToCompleted() {
    this.routerExtensions.navigate(['/completed'], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }
}
