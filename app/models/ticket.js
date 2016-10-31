import DS from 'ember-data';

export default DS.Model.extend({
  pairname: DS.attr(),
  problem: DS.attr(),
  station: DS.attr(),
  timewait: DS.attr()
});
