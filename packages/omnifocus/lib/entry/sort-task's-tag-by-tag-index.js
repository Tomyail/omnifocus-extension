/*{
    "targets": ["omnifocus"],
    "type": "action",
    "description": "按照标签次序排序所有task 里面 tag的次序",
    "label": "按照标签次序排序所有task 里面 tag的次序",
}*/
(() => {
  const { getFlattenTasks } = require("@tomyail-workflow/omni-shared");
  var action = new PlugIn.Action(function (selection) {
    const target = selection.tasks.length ? selection.tasks : flattenedTasks;
    console.log(`loop ${target.length} items`);
    const tagNames = getFlattenTasks(flattenedTags).map((item) => item.name);

    const reduced = getFlattenTasks(target).filter((x) => !x.completed);
    let effectCount = 0;
    reduced.forEach((task) => {
      const tagMetas = task.tags
        .map((tag, idx) => {
          return {
            name: tag.name,
            originIdx: idx,
            expectIndex: tagNames.indexOf(tag.name),
          };
        })
        .reduce((acc, cur) => {
          acc[cur.name] = cur;
          return acc;
        }, {});
      const sortedTags = task.tags.sort(
        (a, b) => tagMetas[a.name].expectIndex - tagMetas[b.name].expectIndex
      );

      if (task.tags.some((task, idx) => task.name !== sortedTags[idx].name)) {
        effectCount++;
        task.removeTags(task.tags);
        task.addTags(sortedTags);
      }
    });
  });

  return action;
})();
