import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  system: DS.attr('string'),
  year: DS.attr('number')
});
