import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagManageComponent } from './tag-manage.component';

describe('TagManageComponent', () => {
  let component: TagManageComponent;
  let fixture: ComponentFixture<TagManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
