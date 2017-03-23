import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        return this.get('store').findAll('list');
      },

      actions: {
        editList: function (list) {
          console.log('route');
          this.transitionTo('list.edit', list);
        },
      },
    });
