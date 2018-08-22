//handing back button in mobile standalone PWA.
function myfunction(){
  //loading neews feed home page on body loading
  //console.log('this is the home news feed page');
  $('#myapp').load('/build/feed.html');
}

//registering and installing our service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/livingstone/sw.js')
      .then(registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`);
      });
    });
  }

//js mvc architecture -- load other html pages on function call in main app via jquery load xml
function loadfeed(){
  $('#myapp').load('/build/feed.html');
  $('#page-title').text('Home');
}

function searchpage(){
  $('#myapp').load('/build/search.html');
  $('#page-title').text('Search');
}

function notify(){
  $('#myapp').load('/build/notifications.html');
  $('#page-title').text('Nofitications');
}

function profile(){
  $('#myapp').load('/build/profile.html');
  $('#page-title').text('Profile');
}

function settings(){
  $('#myapp').load('/build/settings.html');
  $('#page-title').text('Settings');
}
