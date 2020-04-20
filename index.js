const applescript = require('applescript');

// Very basic AppleScript command. Returns the song name of each
// currently selected track in iTunes as an 'Array' of 'String's.
const script = 'tell application "iTunes" to get name of selection';

// applescript.execString(script, (err, rtn) => {
//   if (err) {
//     // Something went wrong!
//   }
//   if (Array.isArray(rtn)) {
//     for (const songName of rtn) {
//       console.log(songName);
//     }
//   }
// });

applescript.execFile(
  '/Volumes/Data/personal/omnifocus-extension/Duration-Titles/index.scpt',
  (err, rtn) => {
    if (err) {
        console.log(err)
      // Something went wrong!
    }
    console.log(rtn)
    if (Array.isArray(rtn)) {
      for (const songName of rtn) {
        console.log(songName);
      }
    }
  }
);
