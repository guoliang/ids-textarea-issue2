import { Component, HostBinding, OnInit } from '@angular/core';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';

@Component({
  standalone: true,
  selector: `eir-header`,
  imports: [SohoComponentsModule, PersonalizeMenuComponent],
  template: `
    <soho-header>
      <soho-toolbar-flex>
        <soho-toolbar-flex-section [isTitle]="true">
          <h2>
            <span soho-toolbar-flex-page-title>{{ title }}</span>
          </h2>
        </soho-toolbar-flex-section>
        <soho-toolbar-flex-more-button [isPageChanger]="true">
          <eir-personalize-menu></eir-personalize-menu>
        </soho-toolbar-flex-more-button>
      </soho-toolbar-flex>
    </soho-header>
  `,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.header') get isHeader() {
    return true;
  }
  @HostBinding('class.is-personalizable') get isPersonalizable() {
    return true;
  }

  title!: string;

  ngOnInit() {
    this.title = 'IDS Playground';
  }
}
