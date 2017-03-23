import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function () {
      console.log('editing');
      this.sendAction('edit', this.get('list'));
    },
    delete () {
      this.sendAction('delete', this.get('list'));
    },
  },
});
