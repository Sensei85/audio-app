//handing back button in mobile standalone PWA.
function myfunction(){
  //loading neews feed home page on body loading
  //console.log('this is the home news feed page');
  $('#myapp').load('feed.html');
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
  console.log('this is the home feed');
  $('#myapp').load('feed.html');
  $('#page-title').text('Home');
}

function searchpage(){
  console.log('this is the search page');
  $('#myapp').load('search.html');
  $('#page-title').text('Search');
}

function notify(){
  console.log('this is the notification page');
  $('#myapp').load('notifications.html');
  $('#page-title').text('Nofitications');
}

function profile(){
  console.log('this is the profile page');
  $('#myapp').load('profile.html');
  $('#page-title').text('Profile');
}

function settings(){
  console.log('this is the settings page');
  $('#myapp').load('settings.html');
  $('#page-title').text('Settings');
}
