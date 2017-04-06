import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  email: DS.attr('string'),
  message: DS.attr('string'),
  responseMessage: '',

  msgLenth: Ember.computed.gte('message.length', 6),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  disabled: Ember.computed.and('msgLenth', 'isValid'),
  isDisabled: Ember.computed.not('disabled'),

});
