class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(newBool) {
    isCheckedOut = newBool;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  toggleCheckOutStatus() {
  	this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    // Find average: add all ratings up and divide by the number of values used
    return (this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue) / this._ratings.length).toFixed(2);
  }
  addRating(newRating) {
    this.ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
	get pages() {
    if (typeof this._pages === 'number') {
      return this._pages;
    } else if (parseInt(this._pages)) {
      return parseInt(this._pages);
    } else {
      return 0;
    }
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class Magazine extends Media {
  constructor(title, authors, pages) {
    super(title);
    this._authors = authors;
    this._pages = pages;
  }

  get authors() {
    if (this._authors.constructor === Array) {
      return this._authors;
    } else {
      return [];
    }
  }
}

class Newspaper extends Media {
  constructor(newspaperName, headline) {
    this._newspaperName = newspaperName;
    this._headline = headline;
  }

  get headline() {
    return this._headline.;
  }

  get newspaperName() {
    return this._newspaperName;
  }
}

class Journal extends Book {
  constructor(author, pages) {
    super(author, pages);
  }
}

class Music extends Media {
  constructor(albumName, songs, genre) {
    this._albumName = albumName;
    this._songs = songs;
    this._genre = genre;
  }
}

module.exports = {Media, Book, Movie, Magazine, Newspaper, Journal, Music};

