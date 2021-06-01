(() => {
  const get = require("lodash.get");
  var app = Application("印象笔记");

  if (!app.running()) {
    app.launch();
  }

  app.includeStandardAdditions = true;
  const notes = app.findNotes("created:day");

  return notes.map((note) => {
    return {
      // keys: Object.keys(note),
      // sourceURL: note.sourceURL(),
      noteLink: note.noteLink(),
      title: note.title(),
      tags: note.tags().map((tag) => ({ name: tag.name() })),
      creationDate: note.creationDate(),
      modificationDate: note.modificationDate(),
    };
  });

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
