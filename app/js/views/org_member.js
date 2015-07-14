app.OrgMemberView = Backbone.View.extend({


  template: hbs.org_member,

  tagName: 'li',

  render: function(){
    var data = this.model.toJSON();
    this.$el.html(this.template(data) );

    return this;
  }

});
