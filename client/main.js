import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});



var postsData = [
 {
     title: 'Introducing Telescope',
     url: 'http://sachagreif.com/introducing-telescope/'
 },
 {
     title: 'Meteor',
     url: 'http://meteor.com'
 },
 {
     title: 'The Meteor Book',
     url: 'http://themeteorbook.com'
 }
];
Template.postsList.helpers({
    posts: postsData
});


Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});