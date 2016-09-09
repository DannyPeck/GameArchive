import Ember from 'ember';

let games = [{
  id: 1,
  title: 'Super Mario',
  system: 'NES',
  year: 1985
}, {
  id: 2,
  title: 'Mega Man',
  system: 'NES',
  year: 1987
}, {
  id: 3,
  title: 'Metroid',
  system: 'NES',
  year: 1986
}];

export default Ember.Route.extend({
  // returns game data
  model() {
    return games;
  },
  actions: {
    add(){
      alert('add');
    }
  }
});
