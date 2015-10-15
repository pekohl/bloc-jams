 // Example Album
var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/03.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

// Another Example Album
var albumBJoel = {
     name: 'Uptown Girl',
     artist: 'Billy Joel',
     label: 'Blue Note',
     year: '1987',
     albumArtUrl: 'assets/images/album_covers/18.png',
     songs: [
         { name: 'Dancing on the ceiling', length: '3:21' },
         { name: 'Uptown Girl', length: '4:28' },
         { name: 'Middle of the night', length: '3:42'},
         { name: 'Piano Man', length: '2:56' },
         { name: 'Red Red Wine', length: '3:15'}
     ]
 };


var createSongRow = function(songNumber, songName, songLength) {

    var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"><a/>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"><a/>';
var currentPlayingSong = null;

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
    var findParentByClassName = function(element, targetClass) {
        var currentParent = element.parentElement;
        while (currentParent.className != targetClass) {
            currentParent = currentParent.parentElement;
        }

        return currentParent;
    };

    var getSongItem = function(element){
        switch (element.className) {
            case 'album-song-button':
            case 'ion-play':
            case 'ion-pause':
                return findParentByClassName(element, 'song-item-number');
            case 'album-view-song-item':
                return element.querySelector('.song-item-number');
            case 'song-item-title':
            case 'song-item-duration':
                return findParentByClassName(element, '.album-view-song-item').querySelector('song-item-number');
            case 'song-item-number':
                return element;
            default:
                return;
        }
    };

    var clickHandler = function(targetElement) {
        songItem = getSongItem(targetElement);

        if (currentPlayingSong === null){
            songItem.innerHTML = pauseButtonTemplate;
            currentPlayingSong = songItem.getAttribute('data-song-number');
            }
        };

    songListContainer.addEventListener('mouseover',function(event) {
        if (event.target.parentElement.className === 'album-view-song-item') {
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;

            var songItem = getSongItem(event.target);
            if (songItem.getAttribute('data-song-number') !== currentPlayingSong) {
                songItem.innerHTML = playButtonTemplate;
            }
        }

//                } else if (currentPlayingSong === songItem.getAttribute('data-song-number')) {
//                songItem.innerHTML = playButtonTemplate;
//                currentPlayingSong = null;
//        } else if (currentPlayingSong !== songItem.getAttribute('data-song-number')){
//                var currentPlayingSongElement = document.querySelector('[data-song-number="' + currentPlayingSong + '"]');
//                currentPlayingSongElement.innerHTML = currentPlayingSongElement.getAttribute('data-song-number');
//                songItem.innerHTML = pauseButtonTemplate;
//                currentPlayingSong = songItem.getAttribute('data-song-number');
//        }
//

    });
    
    var albums = [albumPicasso, albumMarconi, albumBJoel];
    var index = 1;
    
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index=0;
        }
    });

    for (i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function(event) {
            var songItem = getSongItem(event.target);
            var songItemNumber = songItem.getAttribute('data-song-number');

            if (songItemNumber !== currentPlayingSong) {
                songItem.innerHTML = songItemNumber;
            }

        });

        songRows[i].addEventListener('click', function(event) {
            clickHandler(event.target);
        });

    }

};


