import { Component, OnInit } from '@angular/core';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MarvelEstimate';

  movies: Movie[] = [
                    {
                      name: 'Captain America: The First Avenger',
                      hours: 2,
                      minutes: 4
                    },
                    {
                      name: 'Captain Marvel',
                      hours: 2,
                      minutes: 5
                    },
                    {
                      name: 'Iron Man',
                      hours: 2,
                      minutes: 6
                    },
                    {
                      name: 'The Incredible Hulk',
                      hours: 2,
                      minutes: 15
                    },
                    {
                      name: 'Iron Man 2',
                      hours: 2,
                      minutes: 4
                    },
                    {
                      name: 'Thor',
                      hours: 1,
                      minutes: 55
                    },
                    {
                      name: 'Marvel’s The Avengers',
                      hours: 2,
                      minutes: 24
                    },
                    {
                      name: 'Iron Man 3',
                      hours: 2,
                      minutes: 11
                    },
                    {
                      name: 'Thor - The Dark World',
                      hours: 1,
                      minutes: 52
                    },
                    {
                      name: 'Captain America: The Winter Soldier',
                      hours: 2,
                      minutes: 16
                    },
                    {
                      name: 'Guardians of the Galaxy',
                      hours: 2,
                      minutes: 5
                    },
                    {
                      name: 'Guardians of the Galaxy Vol. 2',
                      hours: 2,
                      minutes: 18
                    },
                    {
                      name: 'Avengers: Age of Ultron',
                      hours: 2,
                      minutes: 22
                    },
                    {
                      name: 'Ant-Man',
                      hours: 1,
                      minutes: 58
                    },
                    {
                      name: 'The First Avenger: Civil War',
                      hours: 2,
                      minutes: 28
                    },
                    {
                      name: 'Black Panther',
                      hours: 2,
                      minutes: 15
                    },
                    {
                      name: 'Spider-Man: Homecoming',
                      hours: 2,
                      minutes: 13
                    },
                    {
                      name: 'Doctor Strange',
                      hours: 1,
                      minutes: 55
                    },
                    {
                      name: 'Thor: Ragnarok',
                      hours: 2,
                      minutes: 10
                    },
                    {
                      name: 'Ant-Man and the Wasp',
                      hours: 2,
                      minutes: 5
                    },
                    {
                      name: 'Avengers: Infinity War',
                      hours: 2,
                      minutes: 40
                    },
                    {
                      name: 'Avengers: Endgame',
                      hours: 3,
                      minutes: 2
                    },
                    {
                      name: 'Spider-Man: Far From Home',
                      hours: 2,
                      minutes: 9
                    }];
    selected: Movie[] = [];

  constructor(){

  }

  ngOnInit(){

  }

  addToSelection(movie: Movie){

  }

}
