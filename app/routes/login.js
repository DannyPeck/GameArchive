import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(username, password) {
      alert('username: ' + username + ' password: ' + password);

      // send login request to server
    }
  }
});
