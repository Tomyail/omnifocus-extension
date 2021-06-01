const { NoteStore } = require("evernote");

(async () => {
  const Evernote = require("evernote");
  var developerToken = process.env.EVERNOTE_TOKEN;

  console.log("dev", developerToken);
  var client = new Evernote.Client({
    token: developerToken,
    china: true,
    sandbox: false,
  });

  // Set up the NoteStore client
  var noteStore = client.getNoteStore(
    "https://app.yinxiang.com/shard/s8/notestore"
  );

  const userStore = client.getUserStore();

  const { id: userId, shardId } = await userStore.getUser();

  // Make API calls

  //https://app.yinxiang.com/api/DeveloperToken.action
  try {
    const notebooks = await noteStore.listNotebooks();
    // https://github.com/evernote/evernote-sdk-js/issues/64#issuecomment-287148463
    // https://dev.yinxiang.com/doc/articles/search.php
    const filter = new require("evernote").NoteStore.NoteFilter({
      words: "created:day",
    });

    const result = await noteStore.findNotesMetadata(filter, 0, 100, {
      includeCreated: true,
      includeUpdated: true,
      includeTitle: true,
      includeTagGuids: true,
      includeAttributes: true,
    });
    if (result.notes) {
      // link rule
      // https://dev.evernote.com/doc/articles/note_links.php
      const ss = result.notes.map((note) => {
        return {
          noteWebLink: getNoteLink(
            "app.yinxiang.com",
            userId,
            shardId,
            note.guid
          ),
          noteInAppLink: getInAppLink(userId, shardId, note.guid),
        };
      });

      console.log(ss);
    }
  } catch (e) {
    console.error(e);
  }
})();

const getNoteLink = (service, userId, shardId, noteGuid) =>
  `https://${service}/shard/${shardId}/nl/${userId}/${noteGuid}`;

const getInAppLink = (userId, shardId, noteGuid) =>
  `evernote:///view/${userId}/${shardId}/${noteGuid}/${noteGuid}/`;
