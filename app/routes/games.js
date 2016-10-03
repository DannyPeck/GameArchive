import Ember from 'ember';

export default Ember.Route.extend({
  // returns game data
  model() {
    return this.get('store').findAll('game');
  }
});
