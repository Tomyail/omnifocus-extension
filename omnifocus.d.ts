// interface Database {
//   /**
//    * Returns true if there are redoable actions.
//    */
//   readonly canRedo: boolean;
//   readonly canUndo: boolean;
//   readonly flattenedTasks: ObjectArray<Task>;

//   readonly flattenedTags: ObjectArray<Tag>;
//   readonly tags: Tags;

//   tagNamed(name: string): ?Tag;
//   folderNamed(name: string): ?Folder;
//   projectNamed(name: string): ?Project;
//   taskNamed(name: string): ?Task;

//   projectsMatching(search: string): Project[];
//   foldersMatching(search: string): Folder[];
//   tagsMatching(search: string): Tag[];

//   save(): void;

//   moveTasks(
//     tasks: Task[],
//     position: Project | Task | Task.ChildInsertionLocation
//   );
// }

// interface ObjectArray<T> extends Array<T> {
//   byName(name: string): ?T;
// }

// interface Tags extends ObjectArray<Tag> {
//   apply(f: Function): ?ApplyResult;
//   readonly beginning: TagChildInsertionLocation;
//   readonly ending: TagChildInsertionLocation;
// }

// interface Task extends ActiveObject {
//   //todo fixme
//   new (name: string, position?: Task | Project): Task;
//   static byParsingTransportText(text: string, singleTask?: boolean): Task[];
//   static byIdentifier(identifier: string): Task[];
//   taskNamed(name: string): ?Task;
//   childNamed(name: string): ?Task;
// }

// interface Tag extends ActiveObject {
//   new (name: string, position?: Tag | TagChildInsertionLocation): Tag;
//   static byIdentifier(identifier: string): Tag[];
//   static ChildInsertionLocation: TagChildInsertionLocation;
//   static Status: TagStatus;

//   tagNamed(name: string): ?Tag;
//   childName(name: string): ?Tag;
//   apply(f: Function): ?ApplyResult;

//   readonly after: TagChildInsertionLocation;
//   allowsNextAction: boolean;
//   readonly availableTasks: TaskArray;
//   readonly before: TagChildInsertionLocation;
//   readonly beginning: TagChildInsertionLocation;
//   readonly children: TaskArray;
//   readonly ending: TagChildInsertionLocation;
//   readonly flattenedChildren: TaskArray;
//   readonly flattenedTags: TaskArray;
//   readonly before: TagChildInsertionLocation;
//   name: string;
//   readonly parent: ?Tag;
//   readonly projects: ProjectArray;
//   readonly remainingTasks: TaskArray;
//   status: TagStatus;
//   readonly tags: TagArray;
//   readonly tasks: TaskArray;
// }

// interface ApplyResult {
//   static readonly SkipChildren: ApplyResult;
//   static readonly SkipPeers: ApplyResult;
//   static readonly Stop: ApplyResult;
//   static readonly all: ApplyResult[];
// }
// interface TagChildInsertionLocation {}

// interface TagStatus {
//   static readonly Active: TagStatus;
//   static readonly Dropped: TagStatus;
//   static readonly OnHold: TagStatus;
//   readonly all: TagStatus[];
// }

// interface ObjectIdentifier {
//   readonly objectClass?: any;
//   readonly primaryKey: string;
// }

// interface Folder extends ActiveObject {}

// interface CommonActiveObject<T, POSITION> extends ActiveObject {
//   new (name: string, position?: POSITION): T;
//   static byIdentifier(identifier: string): T[];
// }
// interface DatabaseObject {
//   readonly id: ObjectIdentifier;
// }

// interface DatedObject extends DatabaseObject {
//   added: ?Date;
//   modified: ?Date;
// }

// interface ActiveObject extends DatedObject {
//   active: boolean;
//   readonly effectiveActive: boolean;
// }

interface Database {
  foo: string;
}
export type Omnifocus = Database & { x: number };
