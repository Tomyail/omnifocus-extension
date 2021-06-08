/*{
    "targets": ["omnifocus"],
    "type": "action",
    "label": "清除选中 task 的推迟时间",
}*/

(() => {
  const { getFlattenTasks } = require("@tomyail-workflow/omni-shared");
  return new PlugIn.Action((selection, sender) => {
    const target = selection.tasks;
    getFlattenTasks(target).forEach((task) => {
      task.deferDate = null;
    });
  });
})();
