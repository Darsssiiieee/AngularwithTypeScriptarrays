import { Component } from '@angular/core';
import BookList from '../interface/book-list';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: BookList[] = [];

	id: string = '';
	name: string = '';
	isbn: string = '';

	addBook(): void {if (this.name,this.id,this.isbn.trim())
		this.books.push({
			id: this.id,
			name: this.name,
			isbn: this.isbn,
		});

		this.id = '';
		this.name = '';
		this.isbn = '';
	}
}
