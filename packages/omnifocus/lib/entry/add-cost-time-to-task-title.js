/*{
    "targets": ["omnifocus"],
    "type": "action",
    "label": "将 task 的持续时间直接添加到 task 的标题上面",
}*/
(() => {
  const { getFlattenTasks } = require("@tomyail-workflow/omni-shared");
  var action = new PlugIn.Action(function (selection) {
    // Add code to run when the action is invoked
    const target = selection.tasks.length ? selection.tasks : flattenedTasks;
    const reduced = getFlattenTasks(target).filter((x) => !x.completed);
    reduced.forEach((task) => {
      if (task.estimatedMinutes && task.name.indexOf("||") < 0) {
        task.name = `${task.name} || ${task.estimatedMinutes} 分`;
      }
    });
  });

  return action;
})();
