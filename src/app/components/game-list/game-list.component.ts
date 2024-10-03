import { Component } from '@angular/core';
import GameList from '../interface/game-list';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games: GameList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void { if (this.name,this.description,this.platform.trim())
		this.games.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
