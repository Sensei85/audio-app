importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

//Custom adjustments
console.log('our custom adjustments');

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "c94a69c575ac5fa56ff75b80a7e31635"
  },
  {
    "url": "css/uikit.min.css",
    "revision": "7e1eb5690c24870f76bb72027116e86f"
  },
  {
    "url": "feed.html",
    "revision": "223395760d8075bf310d12d146982ac1"
  },
  {
    "url": "images/project/back.svg",
    "revision": "9ee57b7a7f4c7dcb4df106301cc8115e"
  },
  {
    "url": "images/project/left-arrow.svg",
    "revision": "c45f9e27d40fb44a268f858d76b68f4e"
  },
  {
    "url": "images/project/music-album.svg",
    "revision": "43f8627985dcbc4715fc8e02f7bd80f0"
  },
  {
    "url": "images/project/user.svg",
    "revision": "7a21cbe90fd31540fb0384792fbc4a86"
  },
  {
    "url": "index.html",
    "revision": "70c18c06dc597e4bfacaf11608f5cca1"
  },
  {
    "url": "js/app.js",
    "revision": "4f8b2939042a7d94a1def802f86d18b4"
  },
  {
    "url": "js/jquery-3.1.1.min.js",
    "revision": "e071abda8fe61194711cfc2ab99fe104"
  },
  {
    "url": "js/uikit-icons.min.js",
    "revision": "9fcb5c5582961c441312abbeac37d98d"
  },
  {
    "url": "js/uikit.min.js",
    "revision": "5a2cf6142f638ac62236c5f841c5a3a2"
  },
  {
    "url": "notifications.html",
    "revision": "76957cf5116a56e0b51a37a528695da7"
  },
  {
    "url": "profile.html",
    "revision": "b13d4027df2a76feb0b95dd127a0aba3"
  },
  {
    "url": "search.html",
    "revision": "3747200c85d982f289b01c7cb630c751"
  },
  {
    "url": "settings.html",
    "revision": "8809732f6682a8600a3c51c7c3a8bbe7"
  },
  {
    "url": "src-sw.js",
    "revision": "34ce0685aff882001dadc2cc4867f8bc"
  }
]);
