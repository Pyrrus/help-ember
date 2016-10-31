import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    deleteTicket(ticket) {
      if (confirm('Are you sure you want to delete ticket')) {
        ticket.destroyRecord();
      }
    }
  }
});
