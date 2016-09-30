// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  playCount: 0,
  like: true,
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function () {
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this);
  },

  ended: function () {
    this.trigger('ended', this);
  },

  toggleLike: function () {
    if (this.get('like')) {
      this.set('like', false);
    } else {
      this.set('like', true);
    }
  }

});
