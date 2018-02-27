/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.d3a3ca8.css","26a85be1fd770a6de4cda3295694f747"],["/static/css/app.d3a3ca8.css","d9dc40cc213f2f79aeb58f3c24f1a749"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/img/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["/static/img/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/img/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/img/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["/static/img/login_bg.d7174ef.jpg","d7174ef5f930a53ce6beae07190ddcc5"],["/static/img/logo.f4de33b.png","f4de33b7e10255a1668b71ebd3e44117"],["/static/js/0.e13bcaa.js","4f0f81ed98743cb56f985e08267d78fb"],["/static/js/1.99239cd.js","913e7d9c7e4321ecd9d2332133d643d5"],["/static/js/10.c83557a.js","cc6bebb8be40e184f13b93a75a1df1ac"],["/static/js/11.94e7dba.js","d0af48a779c2779d155fbf3ede9aef29"],["/static/js/12.6d87e73.js","9711454acd413917cea030dadee5d5c3"],["/static/js/13.090726e.js","ffec71ab3363b714c4fe2078940e28e3"],["/static/js/14.3cb1f69.js","da37e5723481201374ccf472c92fa164"],["/static/js/15.defb53f.js","7940d89fded611465baa1a0211430fe7"],["/static/js/16.04138dd.js","8c81bf35ccba868214ce591a79af2c79"],["/static/js/17.3718f67.js","331de522447788fbf9707f0cf9f0418a"],["/static/js/18.ff2cb03.js","0196b971f59acbd68d8f8eaa0973fbaa"],["/static/js/19.886f9c2.js","b1a6ac368aae98cd1e880c71855ac3f9"],["/static/js/2.b7ca8bb.js","0b05c72ed804d1930179bc39faf19197"],["/static/js/20.c9b3755.js","8f019d267a3225fc0dd5b238cb31306a"],["/static/js/21.d75072a.js","3db6eded101379c73f3ced79c93094ad"],["/static/js/22.8f87e62.js","55933712d7296400b61cf103e4e57d01"],["/static/js/23.194f703.js","17d080ca4528edae33bd26108f28a385"],["/static/js/24.abf897d.js","5c37d51fa1c6526155dfd15d1e938772"],["/static/js/25.3e5f15e.js","84d9ec85129e66c6227777567d52156d"],["/static/js/26.4445057.js","974af5eadf8aa33891f495ba7e02c2e5"],["/static/js/27.8b162d5.js","d6b798403313e0fc895fa31d90cab0f9"],["/static/js/28.19a32c2.js","9a9fb60d6a73f1e958975299af9a02c9"],["/static/js/29.438aaf0.js","92e2ac29454ab910694d90279ab27ab2"],["/static/js/3.2ebd2d1.js","bc1f2d80cf17bbbed631c077eb57cab5"],["/static/js/30.d2f5837.js","24cd61c0fe4d8305ff484a4cdaac9506"],["/static/js/31.f4e67c5.js","f2311594faa7785a69ee1ece24cf5729"],["/static/js/32.a3a4198.js","2687af3e3cf429895596a4e1e89f8b33"],["/static/js/33.c69cb32.js","34b6ecec5e91e312b8d9d59a3fb83f3c"],["/static/js/34.4a8ce41.js","486cfdf25315c622e6d7083ab74cb14d"],["/static/js/35.f781c9d.js","ed3f70bb43d6dadec5bfafe6f005b144"],["/static/js/36.92f311e.js","7539662ca690059e7af2187e7f7f9fd2"],["/static/js/37.1ef11ff.js","77150cf305b11df5f7a01a88a1d4d1b9"],["/static/js/38.47a256b.js","c78498783363270cac6f03729dd91907"],["/static/js/39.4b4d2cb.js","e63338a0aefeaa514244e32068d4f63a"],["/static/js/4.fadd493.js","9cd5a231a5449ed0e8eb32fcd7ce72c1"],["/static/js/40.bc2a9a0.js","5bc6a78bff53d5454b23967c21611917"],["/static/js/41.f1aa21e.js","8cd3770914731d73c374ed132048ca4c"],["/static/js/42.c78b69a.js","70ccaecfcb3377785e72e457a622a9f2"],["/static/js/43.f92e594.js","6bc35683c0b69d3cad5e9750e099db90"],["/static/js/44.e6f3636.js","b9f5c3b26fc7091d1237a1bba7920d32"],["/static/js/5.850bbd0.js","06d7212398c31124b25916522d61c5dd"],["/static/js/6.0a5ce73.js","67fb0be16d0a583dc3012a325428a098"],["/static/js/7.0800a97.js","479c7e3d85f537e8f0648ce38e44b71f"],["/static/js/8.8194c8d.js","22d6b70a295ba9d74b25cf43fa1732a7"],["/static/js/9.f48198d.js","8679a872e2829b969ab797472fc1cb3a"],["/static/js/AdminLogin.f260e94.js","245016119540536bf551eb77d6013239"],["/static/js/Article.55936f2.js","c2756f6fce551fb983656853173094a6"],["/static/js/ArticleList.eabf1db.js","8ee62d4be527bc6e2068263da5d307dd"],["/static/js/CmsCase.1d238a6.js","410e8a187cab3262f099c46633b59092"],["/static/js/SiteMap.9a2d11f.js","0ee862bf59dabd98df2b5306650b72b2"],["/static/js/UserAddContent.598d7e0.js","dc03c6d52f8d34db11fac274ac0b49f5"],["/static/js/UserCenter.e75be26.js","8de6adbb29d945f05535c4488f1391d0"],["/static/js/UserContents.6a67348.js","2920b4abf14a7390a7ccb2f38c9c716d"],["/static/js/UserLoginForm.c5ee046.js","8ed886e4d52b4bf7f43a5b6339fc2b6f"],["/static/js/UserMessage.93dcb7c.js","f02c4e0a0b9c03f8d0810d9d935f47c1"],["/static/js/UserPwd.2d6c493.js","fa6afc65f2f9c41f2ea7c63d860df72c"],["/static/js/UserRegForm.5d53725.js","eb86244123e8655679645b53e9df28d7"],["/static/js/UserReplies.39527da.js","46c39c8fbcb162c34206995a48d38080"],["/static/js/admin.f223878.js","caee296930b8e224459d2590af56b17b"],["/static/js/app.b5c93c6.js","4a42f86cfd350fc3f92a07a06c42b05f"],["/static/js/element.e775ab0.js","1566f57aaa51a2130bc8b1c892f9105a"],["/static/js/manifest.ad55a40.js","c217e2ef579fde3c919bb3966c894720"],["/static/js/vendor.5c37e32.js","b2d2ed7752c558ffc69a955a7f381f97"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







