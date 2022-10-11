import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let http: HttpClient; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
