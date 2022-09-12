import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SohoComponentsModule, SohoTextAreaComponent } from 'ids-enterprise-ng';
import { BehaviorSubject } from 'rxjs';

@Component({
  imports: [CommonModule, FormsModule, SohoComponentsModule],
  standalone: true,
  templateUrl: `home.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @ViewChildren(SohoTextAreaComponent)
  textareaList!: QueryList<SohoTextAreaComponent>;
  @ViewChild('textareaRefresh') textarea!: SohoTextAreaComponent;

  _value!: string;
  value$ = new BehaviorSubject('');

  hide!: boolean;

  ngOnInit(): void {
    this._value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis, ante non congue semper, leo leo pretium orci, sit amet pretium purus mi a arcu. Mauris pulvinar aliquam lectus, quis ornare tellus condimentum sed. Cras eu lacus eget felis consequat varius vitae molestie ipsum. Cras ultrices consectetur vulputate. Morbi a justo quis quam dignissim porta nec et sem. Mauris ac tellus purus. Proin arcu felis, tristique non mauris eget, finibus venenatis arcu. Etiam sit amet turpis justo. In varius metus a leo tristique, dignissim placerat nisl tincidunt. Nam nulla lorem, blandit id ex vel, dignissim placerat tellus.`;
    this.value$.next(this._value);

    this.hide = true;
  }

  onButtonClick(): void {
    this.hide = !this.hide;
    this._value;

    this.textarea.markForRefresh();
    // this.textareaList.last.markForRefresh();
  }
}
