import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SohoApplicationMenuComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'IDS Playground';
  private readonly IS_APPLICATION_MENU_OPEN_KEY = 'is-application-menu-open';

  @ViewChild(SohoApplicationMenuComponent, { static: true })
  public applicationMenu!: SohoApplicationMenuComponent;

  get isApplicationMenuOpen(): boolean {
    const valueString = localStorage.getItem(this.IS_APPLICATION_MENU_OPEN_KEY);
    return valueString ? valueString === 'true' : true;
  }

  set isApplicationMenuOpen(open: boolean) {
    localStorage.setItem(
      this.IS_APPLICATION_MENU_OPEN_KEY,
      open ? 'true' : 'false'
    );
  }

  onMenuVisibility(visible: boolean): void {
    if (this.isApplicationMenuOpen !== visible) {
      this.isApplicationMenuOpen = visible;
    }
  }
}
