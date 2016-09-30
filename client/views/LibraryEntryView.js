// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>Played: <%= playCount %></td><td>(<%= artist %>)</td><td class="title"><%= title %>\
                          </td><div> \
                            <td><button class="likebutton <%- like ? \'up\' : \'down\' %>"><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
                          </div> </td>\''),

  events: {
    'click .title': function() {
      this.model.enqueue();
    },
    'click .likebutton': function() {
      this.model.toggleLike();
      // this.render();
      if (this.model.get('like')) {
        this.$el.find('button').addClass('like');
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
