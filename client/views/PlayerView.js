// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  events: {
    'ended': function() {
      this.model.ended();
    },
  },

  setSong: function(song) {
    this.model = song;
    song.attributes.playCount += 1;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
//file:///Users/student/Desktop/2016-09-mytunes/test/SpecRunner.html?grep=SongQueue%20when%20a%20song%20ends