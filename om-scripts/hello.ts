import { Omnifocus } from "../omnifocus";

export default (x: Omnifocus) => {
  const task = new x.Task("test");
  return task.name
};
