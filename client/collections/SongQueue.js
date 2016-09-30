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
      this.dequeue(this.at(0));
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.dequeue();
    });

  },


  playFirst: function () {
    this.at(0).play();
  },

  dequeue: function (song) {
    this.remove(song);
  },

  enqueue: function (song) {
    this.add(song);
  },

});