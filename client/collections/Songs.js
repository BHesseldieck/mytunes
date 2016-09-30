// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    this.fetch();
  },

  parse: function(response) {
    response.results.forEach(function(song) {
      song.playCount = 0;
      song.like = true;
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