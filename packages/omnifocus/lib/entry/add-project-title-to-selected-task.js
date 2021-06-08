/*{
    "targets": ["omnifocus"],
    "type": "action",
    "label": "给选中 task标题增加项目名称",
}*/
(() => {
  const { getFlattenTasks } = require("@tomyail-workflow/omni-shared");
  var action = new PlugIn.Action(function (selection) {
    if (!selection.tasks.length) return;
    const target = selection.tasks;
    const reduced = getFlattenTasks(target);

    reduced.forEach((task) => {
      //首先清理老的名称
      if (
        //匹配任意的(*):
        task.name.match(/\([\s\S]+\):/g)
      ) {
        task.name = task.name.replace(task.name.match(/\([\s\S]+\):/g)[0], "");
      }
      //然后更新新的名称
      if (
        task.containingProject &&
        //匹配任意的(*):
        !task.name.match(/\([\s\S]+\):/g)
      ) {
        task.name = `(${task.containingProject.name}):${task.name}`;
      }
    });
  });

  return action;
})();
