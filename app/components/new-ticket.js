import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var d = new Date();
      var test = d.toISOString();
      var params = {
        pairname: this.get('pairname'),
        problem: this.get('problem'),
        station: this.get('station'),
        timewait: test
      };
      this.sendAction('saveTicket', params);
    }
  }
});
