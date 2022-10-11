import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('details entered test',()=>{
    it('should return false if no input',()=>{
      const result = component.checkDetails("",""); 
      expect(result).toBeFalse(); 
    });
  });
  describe('details entered test',()=>{
    it('should return true if input',()=>{
      const result = component.checkDetails("t","t"); 
      expect(result).toBeTrue(); 
    });
  });
  describe('send data check test',()=>{
    it('should return true ',()=>{
      const result = component.sendData(); 
      expect(result).toBeTrue(); 
    });
  });
});
