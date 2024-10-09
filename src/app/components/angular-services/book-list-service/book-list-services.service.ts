import { Injectable } from '@angular/core';
import BookList from '../../interface/book-list';

@Injectable({
  providedIn: 'root'
})
export class BookListServicesService {
  private books: BookList[] = [];
  
	constructor() {}
	addBook(id: string, name: string, isbn: string): void {
		this.books.push({
			id: id,
			name: name,
			isbn: isbn,
		});
	}
	getBooks(): BookList[] {
		return this.books;
	}
}
