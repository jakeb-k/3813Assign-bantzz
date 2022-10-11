import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;
  let http: HttpClient; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
