(() => {
  const get = require("lodash.get");
  var app = Application("印象笔记");

  if (!app.running()) {
    app.launch();
  }

  app.includeStandardAdditions = true;
  const note = app.findNotes("foobar_test")[0];
  return {
    sourceURL: note.sourceURL(),
    noteLink: note.noteLink(),
    title: note.title(),
    attachments_mine: note.attachments()[0].mime(),
    attachments_sourceURL: note.attachments()[0].sourceURL(),
    attachments_filename: note.attachments()[0].filename(),
    enmlContent:note.enmlContent(),
    htmlContent: note.htmlContent(),
  };

  // const note = app.createNote({
  //   title: "foo",
  //   withText: "bar",
  //   attachments: [
  //     {
  //       mine: "application/pdf",
  //       filename: "test.pdf",
  //       sourceURL: "/Users/lixuexin/Desktop/book-02-08-08.pdf",
  //     },
  //   ],
  // });

  // return get(note, "title")();
})();
