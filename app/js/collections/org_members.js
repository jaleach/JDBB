
app.OrgMembersCollections  = Backbone.Collection.extend({
  model: app.OrgMemberModel,

  url: function(){
    return 'https://api.github.com/orgs/' + this.options.org + '/members';
  },

  initialize: function(data, options){
    this.options = options;

  }
});
