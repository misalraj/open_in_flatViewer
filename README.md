# Open In flat viewer Extension

This is a simple chrome extension that, when clicked on github repo, will open that [Flat Viewer](https://flatgithub.com/).

[Flat Viewer](https://github.com/githubocto/flat-viewer) is a tool to view un-nested data (CSV & JSON files) in an interactive table. The table has various affordances for exploring the data, such as:

- filtering
- sorting
- sticky header and column
- diffs for specific commits that change the data

More info : https://github.com/githubocto/flat-viewer

The extension simply provides a URL redirect: it reads the current Github repo URL and opens a new tab at https://flatgithub.com/ with the user, repository.

## Installing the Extension

The latest release of the extension on **Chrome Web Store** coming soon.


## Source Install

To install the extension directly from source:

1.  Clone this repository to your local disk.
2.  Open the Chrome browser, and navigate to chrome://extensions.
3.  Ensure that developer mode is enabled (see the switch in the upper-right).
4.  Click "Load Unpacked" and choose the location of the `open_in_flatViewer`
    repository. You should see a little flatViewer icon appear in your Chrome
    extensions icons in your browser bar.
5.  Navigate to a github repo (e.g.
    https://github.com/misalraj/flat-demo-share-price),
    and click the extension icon to open (CSV & JSON files) in Flat viewer.
