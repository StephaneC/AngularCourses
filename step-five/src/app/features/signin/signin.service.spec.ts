import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { SigninService } from './signin.service';

describe('SigninService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let signinService: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [SigninService]
    });
    httpClient = TestBed.get(HttpClient);
    signinService = TestBed.get(SigninService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', inject([SigninService], (service: SigninService) => {
    expect(service).toBeTruthy();
  }));

  it('should return token', () => {

    const expectedToken = {
      token: 'Yeah token'
    };

    signinService.signin('dummy', 'dummy').subscribe(
      res => expect(res).toEqual(expectedToken, 'should return expected token'),
      fail
    );

    // CampaignsService should have made one request to GET campaigns from expected URL
    const req = httpTestingController.expectOne(
      (request: HttpRequest<any>) => request.url.endsWith('https://cesi.cleverapps.io/signin'));
    expect(req.request.method).toEqual('POST');

    req.flush(expectedToken);
  });
});
