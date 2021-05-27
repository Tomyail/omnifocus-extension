interface Database {
  /**
   * Returns true if there are redoable actions.
   */
  readonly canRedo: boolean;
  readonly canUndo: boolean;
  readonly flattenedTasks: TaskArray;
}

interface TaskArray extends Array {
  byName(name: string): ?Task;
}

interface Task extends ActiveObject {
  //todo fixme
  new (name: string, position?: Task | Project):Task
  static byParsingTransportText(text: string, singleTask?: boolean): Task[];
  static byIdentifier(identifier: string): Task[];
  taskNamed(name: string): ?Task;
  childNamed(name: string): ?Task;
}

interface ObjectIdentifier {
  readonly objectClass?: any;
  readonly primaryKey: string;
}
interface DatabaseObject {
  readonly id: ObjectIdentifier;
}

interface ActiveObject extends DatedObject {
  active: boolean;
  readonly effectiveActive: boolean;
}

export interface Omnifocus {
  Task: Task;
}
