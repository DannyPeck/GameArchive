import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signup(username, password) {
      alert('username: ' + username + ' password: ' + password);

      // send signup request to server
    }
  }
});
