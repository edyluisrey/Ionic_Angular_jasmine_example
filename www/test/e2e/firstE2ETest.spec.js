describe('Testing UI Interaction', function(){
    var loginModal = element(by.id('login-modal'))
    var createPlaylistModal = element(by.id('creation-modal'))
    var playlistsList = element.all(by.repeater('playlist in playlists'))

        // it('should delete a playlist', function(){
        //     playlistNames = playlistsList.map(function(row) {
        //       return row.getText();
        //     }).then(function(elems) {
        //         expect(elems).toContain('Reggae');

        //         browser.actions().dragAndDrop({x:150,y:150},{x:100,y:150}).perform();
        //         expect(element(by.repeater('playlist in playlists').row(0)).element(By.css(".button-assertive")).isDisplayed()).toBeTruthy();
        //         // expect(element(by.id('login-option')).isDisplayed).toBeTruthy();
        //         // browser.actions().mouseMove({x: 20, y: 0}).mouseMove({x: 20, y: 500}).perform()
        //         // browser.executeScript('document.getElementsByClassName("item")[0].triggerHandler("dragleft");').then(function(){  
        //             // element(by.repeater('playlist in playlists').row(0)).element(By.css(".button-assertive")).click();
        //             // newPlaylistNames = playlistsList.map(function(row) {
        //             //   return row.getText();
        //             // }).then(function(elems) {
        //             //     expect(elems).not.toContain('Reggae');
        //             // }); 
  
        //         // });

        //     });
        // });
        it('should start showing a modal', function(){
            element.all(by.id('menu-button-from-slide')).last().click();
            element(by.id('login-option')).click();
            expect(loginModal.isDisplayed()).toBeTruthy();
            element(by.id('close-login-modal')).click();
        });

        it('should have initially 6 values', function(){
            expect(playlistsList.count()).toEqual(6);
        });

        it('should have a Dubstep playlist', function(){
            var playlistNames = playlistsList.map(function(row) {
              return row.getText();
            }).then(function(elems) {
                expect(elems).toContain('Dubstep');
            });
        });
        it('should create a new playlist', function(){
            playlistNames = playlistsList.map(function(row) {
              return row.getText();
            }).then(function(elems) {
                expect(elems).not.toContain('Rock&Roll');
                element(by.id('create-playlist')).click();
                createPlaylistModal.element(by.model('playlistData.title')).sendKeys('Rock&Roll');
                createPlaylistModal.element(by.id('submit-playlist')).click();
                newPlaylistNames = playlistsList.map(function(row) {
                  return row.getText();
                }).then(function(elems) {
                    expect(elems).toContain('Rock&Roll');
                }); 
            });
        });

        it('should show the name of the playlist in the detail', function(){
            text = element(by.repeater('playlist in playlists').row(0)).getText();
            element(by.repeater('playlist in playlists').row(0)).click();
            expect(element(by.id('playlist-title')).getText()).toContain(text);
        });


});