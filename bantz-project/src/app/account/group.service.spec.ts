import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { GroupService } from './group.service';

describe('GroupService', () => {
  let service: GroupService;
  let http: HttpClient; 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
