export const getFlattenTasks = function (tasks) {
  return reduce(
    tasks.map((task) => getTasks(task)),
    []
  );
};

/**
 * 递归遍历给定的 task,直到其没有子 task
 * @param task
 */
const getTasks = (task) =>
  task.hasChildren ? task.children.map((t) => getTasks(t)) : task;
/**
 * 打平一个嵌套的 task 列表
 * @param cur
 * @param collector
 */
const reduce = (cur, collector) => {
  if (Array.isArray(cur)) {
    cur.forEach((item) => {
      reduce(item, collector);
    });
  } else {
    collector.push(cur);
  }
  return collector;
};
