import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowsPage } from './follows.page';

describe('FollowsPage', () => {
  let component: FollowsPage;
  let fixture: ComponentFixture<FollowsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FollowsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
