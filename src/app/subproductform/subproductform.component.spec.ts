import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubproductformComponent } from './subproductform.component';

describe('SubproductformComponent', () => {
  let component: SubproductformComponent;
  let fixture: ComponentFixture<SubproductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubproductformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
