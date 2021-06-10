/*{
    "targets": ["omnifocus"],
    "type": "action",
    "label": "设置/取消为今日的关键目标",
}*/
(() => {
  const { getFlattenTasks } = require("@tomyail-workflow/omni-shared");
  var action = new PlugIn.Action(function (
    /**
     * @type {import('../omnifocus').Selection}
     */
    selection
  ) {
    if (!selection.tasks.length) return;
    const target = selection.tasks;
    const reduced = getFlattenTasks(target);

    reduced.forEach((task) => {
      if (task.dueDate && task.flagged) {
        task.dueDate = null;
        task.flagged = false;
      } else {
        const d = new Date();
        d.setHours(20, 0, 0, 0);
        task.dueDate = d;
        task.flagged = true;
      }
    });
  });

  return action;
})();
