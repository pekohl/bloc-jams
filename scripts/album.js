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

    var $row = $(template);
    var clickHandler = function() {
	   var songNumber = $(this).attr('data-song-number');

	   if (currentlyPlayingSong !== null) {
		  var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	   if (currentlyPlayingSong !== songNumber) {
           $(this).html(pauseButtonTemplate);
		  currentlyPlayingSong = songNumber;
	       } else if (currentlyPlayingSong === songNumber) {
		  $(this).html(playButtonTemplate);
		  currentlyPlayingSong = null;
	}
};
    var onHover = function(event){
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };
    var offHover = function(event){
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };

    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;

};

    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');



var setCurrentAlbum = function(album) {
    $albumTitle.text(album.name);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);
    
    $albumSongList.empty();

    for (i = 0; i < album.songs.length; i++) {
        var $newRow= createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
        $albumSongList.append($newRow);
    }
};

//var findParentByClassName = function(element, targetClass) {
//     var currentParent = element.parentElement;
//     while (currentParent.className != targetClass) {
//         currentParent = currentParent.parentElement;
//     }
//     return currentParent;
// };
//
//// var getSongItem = function(element) {
////     switch (element.className) {
////         case 'album-song-button':
////         case 'ion-play':
////         case 'ion-pause':
////             return findParentByClassName(element, 'song-item-number');
////         case 'album-view-song-item':
////             return element.querySelector('.song-item-number');
////         case 'song-item-title':
////         case 'song-item-duration':
////             return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
////         case 'song-item-number':
////             return element;
////         default:
////             return;
////     }
//// };
//
// var clickHandler = function(targetElement) {
//     var songItem = getSongItem(targetElement);
//
//     if (currentlyPlayingSong === null) {
//         songItem.innerHTML = pauseButtonTemplate;
//         currentlyPlayingSong = songItem.getAttribute('data-song-number');
//     } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
//         songItem.innerHTML = playButtonTemplate;
//         currentlyPlayingSong = null;
//     } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
//         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
//         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
//         songItem.innerHTML = pauseButtonTemplate;
//         currentlyPlayingSong = songItem.getAttribute('data-song-number');
//     }
// };

// var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
// var songRows = document.getElementsByClassName('album-view-song-item');

 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 var currentlyPlayingSong = null;

 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);

//     for (i = 0; i < songRows.length; i++) {
//         songRows[i].addEventListener('click', function(event) {
//              clickHandler(event.target);
//         });
//     }
 });
