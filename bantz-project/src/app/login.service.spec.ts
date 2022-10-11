import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let http: HttpClient; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
