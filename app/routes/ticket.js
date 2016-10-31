import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },
  actions: {
    closeTicket(ticket) {
      if (confirm('Are you sure you want to delete ticket, but tearch will not help if close?')) {
        ticket.destroyRecord();
        this.transitionTo('/');
      }
    }
  }
});
