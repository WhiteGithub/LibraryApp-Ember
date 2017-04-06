import Ember from 'ember';

export default Ember.Controller.extend({
  // email: '',
  // message: '',
  // responseMessage: '',
  //
  // msgLenth: Ember.computed.gte('message.length', 6),
  //
  // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // disabled: Ember.computed.and('msgLenth', 'isValid'),
  // isDisabled: Ember.computed.not('disabled'),


  actions: {
    saveInvitation(newContact ) {
      // const email = this.get('emailAddress');
      // const newContact = this.store.createRecord('contact', {
      //   // email: email
      // });

      newContact.save().then((responseMessage) => {
        this.set('model.responseMessage', `Thank you! 
        We've just saved your email address: 
        ${responseMessage.get('email')}message is ${responseMessage.get('message')}`);
        this.set('model.email', '');
        this.set('model.message', '');
      });

    }
  }
});
