import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { StoryViewModel } from '../story.model';
import { NgFor, NgIf } from '@angular/common'; 
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [NgFor, NgIf, LoaderComponent],
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: StoryViewModel[] = [];
  paginatedStories: StoryViewModel[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  isLoading: boolean = false;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.storyService.getStories().subscribe({
      next: (v) => {
        this.stories = v;
        this.setPage(1);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        this.isLoading = false; 
      }
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.stories.length);
    this.paginatedStories = this.stories.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.stories.length / this.itemsPerPage);
  }
}
