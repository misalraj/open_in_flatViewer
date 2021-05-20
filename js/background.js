chrome.browserAction.onClicked.addListener(function(tab) {
  flat_url_prefix = 'https://flat';
  const github = /^https?:\/\/github\.com\/(.+)$/;
  // const gist =
  //     /^https?:\/\/gist\.github\.com\/(.+)\/([a-f0-9]+(?:\#file\-.*\)?)$/;

  let path, url = null;

  if (github.test(tab.url)) {
    path = github.exec(tab.url);
    url = flat_url_prefix + ['github.com', path[1], path[2]].join('/');
   } 
  // else if (gist.test(tab.url)) {
  //   path = gist.exec(page.url);
  //   url = colab_url + ['gist.', path[1], path[2]].join('/');
  // }

  if (url) {
    chrome.tabs.create({'url': url});
  } else {
    alert('Current page is not recognized as a github repo');
  }
});