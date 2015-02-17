angular.module('starter.services', [])

.factory('Playlists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  return {
    all: function() {
      return playlists;
    },
    remove: function(playlist) {
      playlists.splice(playlists.indexOf(playlist), 1);
    },
    get: function(playlistId) {
      for (var i = 0; i < playlists.length; i++) {
        if (playlists[i].id === parseInt(playlistId)) {
          return playlists[i];  
        }
      }
      return null;
    },
    save:function(data){
      playlists.push({
        title: data.title,
        id: playlists[playlists.length-1].id + 1
      });
    }
  }
})
