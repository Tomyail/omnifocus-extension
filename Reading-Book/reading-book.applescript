var app = Application('Omnifocus')
app.includeStandardAdditions = true

var bookTitle = app.displayDialog('请输入书名', { defaultAnswer: "" }).textReturned
var readPerDay = parseInt(app.displayDialog('请输入每次计划阅读页数',{ defaultAnswer:10}).textReturned)
var bookPages = parseInt(app.displayDialog('请输入书的总页数', { defaultAnswer: 100 }).textReturned)

var taskCount = Math.ceil(bookPages / readPerDay)
app.displayDialog(`是否创建 ${taskCount}个任务?`)


app.defaultDocument.inboxTasks.push(app.InboxTask({name:`阅读 ${bookTitle}`}))

var parentTask = app.defaultDocument.inboxTasks[app.defaultDocument.inboxTasks.length - 1];

var start = 0;
var end = 0;
for(var i = 0;i < taskCount;i++){
	start = i * readPerDay+1;
	end = Math.min(start + readPerDay - 1, bookPages)
	parentTask.tasks.push(app.InboxTask({name:`阅读 ${bookTitle} 第${start}-${end}页`}))
}

