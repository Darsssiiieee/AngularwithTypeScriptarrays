import { Component } from '@angular/core';
import GameList from '../interface/game-list';
import { GameListServicesService } from '../angular-services/game-list-service/game-list-services.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
	games = [] as GameList[];
	constructor(private gameService: GameListServicesService) {
		this.games = this.gameService.getGames();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void { if (this.name,this.description,this.platform.trim())
		this.gameService.addGame(
			this.id,
			this.name,
			this.description,
			this.platform,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
