import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      console.log('SAVING');
      this.sendAction('save', this.get('list'));
    },

    cancel () {
      console.log('CANCEL');
      this.get('list').rollbackAttributes();
      this.sendAction('cancel');
    },
  },
});
