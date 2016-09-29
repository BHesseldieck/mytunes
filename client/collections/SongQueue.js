// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.dequeue();
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.dequeue();
    });
  },


  playFirst: function () {
    if (this.length > 0) {
      this.at(0).play();
    }
  },

  dequeue: function () {
    this.remove(this.at(0));
  },

  enqueue: function (song) {
    this.add(song);
  }

});