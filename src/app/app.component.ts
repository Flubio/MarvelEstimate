import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MarvelEstimate';

  dummymovies: Movie[] = [
    {
      id: 1,
      name: 'Captain America: The First Avenger',
      playtime: '2:04'
    },
    {
      id: 2,
      name: 'Captain Marvel',
      playtime: '2:05'
    },
    {
      id: 3,
      name: 'Iron Man',
      playtime: '2:06'
    },
    {
      id: 4,
      name: 'The Incredible Hulk',
      playtime: '2:15'
    },
    {
      id: 5,
      name: 'Iron Man 2',
      playtime: '2:04'
    },
    {
      id: 6,
      name: 'Thor',
      playtime: '1:55'
    },
    {
      id: 7,
      name: 'Marvel’s The Avengers',
      playtime: '2:24'
    },
    {
      id: 8,
      name: 'Iron Man 3',
      playtime: '2:11'
    },
    {
      id: 9,
      name: 'Thor - The Dark World',
      playtime: '1:52'
    },
    {
      id: 10,
      name: 'Captain America: The Winter Soldier',
      playtime: '2:16'
    },
    {
      id: 11,
      name: 'Guardians of the Galaxy',
      playtime: '2:05'
    },
    {
      id: 12,
      name: 'Guardians of the Galaxy Vol. 2',
      playtime: '2:18'
    },
    {
      id: 13,
      name: 'Avengers: Age of Ultron',
      playtime: '2:22'
    },
    {
      id: 14,
      name: 'Ant-Man',
      playtime: '1:58'
    },
    {
      id: 15,
      name: 'The First Avenger: Civil War',
      playtime: '2:28'
    },
    {
      id: 16,
      name: 'Black Panther',
      playtime: '2:15'
    },
    {
      id: 17,
      name: 'Spider-Man: Homecoming',
      playtime: '2:13'
    },
    {
      id: 18,
      name: 'Doctor Strange',
      playtime: '1:55'
    },
    {
      id: 19,
      name: 'Thor: Ragnarok',
      playtime: '2:10'
    },
    {
      id: 20,
      name: 'Ant-Man and the Wasp',
      playtime: '2:05'
    },
    {
      id: 21,
      name: 'Avengers: Infinity War',
      playtime: '2:40'
    },
    {
      id: 22,
      name: 'Avengers: Endgame',
      playtime: '3:02'
    },
    {
      id: 23,
      name: 'Spider-Man: Far From Home',
      playtime: '2:09'
    },
    {
      id: 24,
      name: 'Black Widow',
      playtime: '2:14'
    },
    {
      id: 25,
      name: 'Shang-Chi and the Legend of the Ten Rings',
      playtime: '2:12'
    }
  ];
  movies: Movie[] = [];
  selected: Movie[] = [];

  totalviewtime: any;
  formatedtime: string;

  constructor() {

  }

  ngOnInit() {
    this.pushToMov();
    if (localStorage.getItem('movies')) {
      this.selected = JSON.parse(localStorage.getItem('movies'));
      this.selected.forEach(selected => {
        this.movies.forEach(movie => {
          if (movie.name == selected.name) {
            this.movies.splice(this.movies.indexOf(movie), 1);
          }
        })

      })
    }
    else
      localStorage.setItem('movies', '');

    if (localStorage.getItem('time'))
      this.totalviewtime = localStorage.getItem('time');
    else
      localStorage.setItem('time', '0');

    this.formatMS();
    this.normalize();
  }

  formatMS() {
    this.totalviewtime = this.totalviewtime.replace('t', '');
  }

  pushToMov() {
    this.dummymovies.forEach(movie => {
      this.movies.push(movie);
    })
  }

  addToSelection(data: Movie) {

    if (!this.selected.includes(data)) {
      this.selected.push(data);
      console.log(this.selected)
      localStorage.setItem('movies', JSON.stringify(this.selected));
    }
    this.calculate();
  }

  contains(movie: Movie): boolean {
    this.selected.forEach(_movie => {
      if (_movie.id == movie.id) {
        console.log('_movie.name: ' + _movie.name + ' | ' + 'movie.name: ' + movie.name);
        return true;
      }
    })
    return false;
  }

  clearMovies() {
    this.movies = [];
    this.pushToMov();
    localStorage.removeItem('movies');
    localStorage.removeItem('time');
    this.selected = [];
    this.totalviewtime = '';
    this.formatedtime = '';
  }

  calculate(x?: moment.Duration) {
    var tmp;
    if (!x)
      tmp = moment.duration('0');
    else
      tmp = x;
    this.selected.forEach(mov => {
      tmp.add(moment.duration(mov.playtime).asMilliseconds())
    });
    this.totalviewtime = 't' + tmp;
    localStorage.setItem('time', this.totalviewtime);
    this.formatMS();
    this.normalize();
  }

  normalize() {

    var seconds = (+this.totalviewtime) / 1000;
    var min = 0;
    var h = 0;
    var d = 0;
    while (seconds >= 60) {
      seconds -= 60;
      min++;
    }
    while (min >= 60) {
      min -= 60;
      h++;
    }
    while (h >= 24) {
      h -= 24;
      d++;
    }

    if (d != 0)
      this.formatedtime = `${d} ${d == 1 ? 'day' : 'days'}, ${h} ${h == 1 ? 'hour' : 'hours'} and ${min} ${min == 1 ? 'minute' : 'minutes'}`
    else
      this.formatedtime = `${h}:${min}h`;
  }

}
