Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // Home Router
  this.route('questions', {
    path: '/',
    template: 'questions'
  });
});
