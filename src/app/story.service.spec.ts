import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryService } from './story.service';
import { StoryViewModel } from './story.model';

describe('StoryService', () => {
  let service: StoryService;
  let httpMock: HttpTestingController;
  const mockStories: StoryViewModel[] = [
    { id: 1, title: 'Story 1', url: 'https://example.com/story1' },
    { id: 2, title: 'Story 2', url: 'https://example.com/story2' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoryService]
    });
    service = TestBed.inject(StoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {

    httpMock.verify(); // Ensure that no unmatched requests are outstanding
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve stories from the API via GET', () => {
    service.getStories().subscribe((stories) => {
      expect(stories.length).toBe(2);
      expect(stories).toEqual(mockStories);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockStories); // Respond with mock data
  });

  it('should handle errors gracefully', () => {
    service.getStories().subscribe(
      () => fail('expected an error, not stories'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush('Error loading stories', { status: 500, statusText: 'Server Error' });
  });
});
