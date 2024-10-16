import { Injectable } from '@angular/core';
import GameList from '../../interface/game-list';

@Injectable({
  providedIn: 'root'
})
export class GameListServicesService {
  private games: GameList[] = [];

	constructor() {}

	addGame(
		id: number,
		name: string,
		description: string,
		platform: string,
	): void {
		this.games.push({
			id: id,
			name: name,
			description: description,
			platform: platform,
		});
	}

	getGames(): GameList[] {
		return this.games;
	}
}
