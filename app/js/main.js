

$.ajaxSetup({
  data: {
    access_token: 'f5d770841e2a7a8be05a786ff9b8e797685c555b',
    per_page: '100'

    }
  });

  var orgMembers = new app.OrgMembersCollections(null, {org: 'tiy-atl-js-q2-2015'});

  function displayOrgMembers(){
    orgMembers.each( function(member){
      var view = new app.OrgMemberView({model: member});
      $('.org_members').append(view.render().el);

    });
  }

  orgMembers.fetch().done(displayOrgMembers);
