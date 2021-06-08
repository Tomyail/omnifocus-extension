const Evernote = require("evernote");
(async () => {
  process.on("unhandledRejection", (e) => {
    console.error(e);
  });
  //https://dev.evernote.com/doc/reference/
  // goto https://app.yinxiang.com/api/DeveloperToken.action to get token
  var developerToken = process.env.EVERNOTE_TOKEN;

  console.log("dev", developerToken);

  var client = new Evernote.Client({
    token: developerToken,
    china: true,
    sandbox: false,
  });

  var noteStore = client.getNoteStore(
    "https://app.yinxiang.com/shard/s8/notestore"
  );

  const userStore = client.getUserStore();

  const { id: userId, shardId } = await userStore.getUser();

  const notebooks = await noteStore.listNotebooks();
  // https://github.com/evernote/evernote-sdk-js/issues/64#issuecomment-287148463
  // https://dev.yinxiang.com/doc/articles/search.php
  const filter = new require("evernote").NoteStore.NoteFilter({
    words: "created:day-1",
  });

  const result = await noteStore.findNotesMetadata(filter, 0, 100, {
    includeCreated: true,
    includeUpdated: true,
    includeTitle: true,
    includeTagGuids: true,
    // includeAttributes: true,
  });
  if (result.notes) {
    // link rule
    // https://dev.evernote.com/doc/articles/note_links.php
    const ss = await Promise.all(
      result.notes.map(async (note) => {
        return {
          title: note.guid,
          title: note.title,
          createdAt: note.created,
          updatedAt: note.updated,
          tags:
            note.tagGuids &&
            (await Promise.all(
              note.tagGuids.map(async (tgid) => {
                const tag = await noteStore.getTag(tgid);

                return tag;
              })
            )),
          noteWebLink: getNoteLink(
            "app.yinxiang.com",
            userId,
            shardId,
            note.guid
          ),
          noteInAppLink: getInAppLink(userId, shardId, note.guid),
        };
      })
    );

    console.log(JSON.stringify(ss, null, 2));
  }
})();

const getNoteLink = (service, userId, shardId, noteGuid) =>
  `https://${service}/shard/${shardId}/nl/${userId}/${noteGuid}`;

const getInAppLink = (userId, shardId, noteGuid) =>
  `evernote:///view/${userId}/${shardId}/${noteGuid}/${noteGuid}/`;
