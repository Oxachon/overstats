import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.form.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.battlenet = new ReactiveVar("");
});

Template.form.helpers({
    battlenet() {
    return Template.instance().battlenet.get();
  },
});

Template.form.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.battlenet.set($('#bnet').val());
  },
});
