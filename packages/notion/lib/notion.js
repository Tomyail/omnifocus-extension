const { Client } = require("@notionhq/client");
const { get, kebabCase } = require("lodash");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getLink = (title, id) => {
  //其实有没有 title 都生效
  if (title) {
    const kebabTitle = kebabCase(title.replace(/[^a-zA-Z-\/:]/g, ""));
    if (kebabTitle.length) {
      return `${kebabTitle}-${id.replace(/-/g, "")}`;
    }
    return id.replace(/-/g, "");
  }
  return id.replace(/-/g, "");
};

(async () => {
  const listUsersResponse = await notion.users.list();
  const user = listUsersResponse.results.find((user) => user.type === "person");

  console.log(user);

  const userId = "tomyail";

  //when searchResult not include the database you expected, make sure the api bot you made have the permission to access it
  const searchResult = await notion.search({
    filter: { value: "database", property: "object" },
    page_size: 100,
  });

  const nestResult = await Promise.all(
    searchResult.results.map(async (res) => {
      const pages = await notion.databases.query({ database_id: res.id });
      debugger;
      return {
        id: res.id,
        createAt: res.created_time,
        updateAt: res.last_edited_time,
        title: get(res, "title[0].plain_text"),
        pages: pages.results.map((page) => {
          const title = get(page, "properties.Name.title[0].plain_text");
          return {
            title: title,
            id: page.id,
            createAt: page.created_time,
            updateAt: page.last_edited_time,
            archived: page.archived,
            link: `https://www.notion.so/${userId}/${getLink(title, page.id)}`,
          };
        }),
      };
    })
  );

  console.log(nestResult);
  console.log(nestResult[0].pages);
  //   console.log(JSON.stringify(searchResult,null,2));
})();
