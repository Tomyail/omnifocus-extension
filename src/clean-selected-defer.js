/*{
    "targets": ["omnifocus"],
    "type": "action",
    "label": "清除选中 task 的推迟时间",
}*/

(() => {
  const { getFlattenTasks } = require("../om-shared/get-flattern-tasks");
  return new PlugIn.Action((selection, sender) => {
    const target = selection.tasks;
    getFlattenTasks(target).forEach((task) => {
      task.deferDate = null;
    });
  });
})();
