import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('teacher');
  this.route('ticketlist');
  this.route('ticket', {path: '/ticket/:ticket_id'});
});

export default Router;
