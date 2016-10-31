import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTicket(ticket) {
      var newTicket = this.store.createRecord('ticket', ticket);
      newTicket.save();
      this.transitionTo('/ticket/' + newTicket.id);
    }
  }
});
