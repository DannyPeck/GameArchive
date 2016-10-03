import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add (title, system, year) {
      var game = this.get('store').createRecord('game', {
        title: title,
        system: system,
        year: year
      });

      game.save();
    },
  }
});
