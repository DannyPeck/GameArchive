import Ember from 'ember';

export default Ember.Route.extend({
  // returns game data
  model() {
    var gamesPromise = this.get('store').findAll('game');
    
    gamesPromise.then((games) => {
      console.log(games);
      return games;
    });
  }
});
