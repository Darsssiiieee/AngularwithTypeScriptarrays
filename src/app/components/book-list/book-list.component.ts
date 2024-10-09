import { Component } from '@angular/core';
import BookList from '../interface/book-list';
import { BookListServicesService } from '../angular-services/book-list-service/book-list-services.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
	books = [] as BookList[];
	constructor(private bookService: BookListServicesService) {
		this.books = this.bookService.getBooks();
	}


	id: string = '';
	name: string = '';
	isbn: string = '';

	addBook(): void {if (this.name,this.id,this.isbn.trim())
		this.bookService.addBook(
			this.id, 
			this.name, 
			this.isbn
		);

		this.id = '';
		this.name = '';
		this.isbn = '';
	}
}
