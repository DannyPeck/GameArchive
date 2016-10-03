import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add () {
      var game = this.get('store').createRecord('game', {
        title: 'Cave Story',
        system: 'PC',
        year: 2005
      });

      game.save();
    },
  }
});
