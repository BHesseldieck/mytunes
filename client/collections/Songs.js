// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    if (localStorage.length === 0) {
      console.log('fetched');
      this.fetch();
    } else {
      _.each(localStorage, function (song, index) {
        this.add(JSON.parse(localStorage.getItem(index)));
      }, this);
      console.log(this);
    }
  },

  parse: function(response) {
    response.results.forEach(function(song, index) {
      song.playCount = 0;
      song.like = true;
      localStorage.setItem(index, JSON.stringify(song));
    });
    return response.results;
  },

  sortByField: function(field) {
    this.comparator = this.fieldSetter(field);
    this.sort(this.comparator);
  },

  fieldSetter: function(field) {
    return function(model) {
      if (model.get(field)) {
        return -1;
      } else {
        return 1;
      }
    };
  }
  
});