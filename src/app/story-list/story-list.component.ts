import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { StoryViewModel } from '../story.model';
import { NgFor, NgIf } from '@angular/common'; 
import { LoaderComponent } from '../loader/loader.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [NgFor, NgIf, LoaderComponent, FormsModule],
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: StoryViewModel[] = [];
  filteredStories: StoryViewModel[] = [];
  paginatedStories: StoryViewModel[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchQuery: string = '';
  isLoading: boolean = false;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.storyService.getStories().subscribe({
      next: (v) => {
        this.stories = v;
        this.filteredStories = v;
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

  searchStories(): void {
    if (this.searchQuery) {
      this.filteredStories = this.stories.filter(story =>
        story.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredStories = this.stories;
    }
    this.setPage(1);
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredStories.length);
    this.paginatedStories = this.filteredStories.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredStories.length / this.itemsPerPage);
  }
}
