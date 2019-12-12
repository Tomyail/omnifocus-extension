var app = Application('Omnifocus')
app.includeStandardAdditions = true

var bookTitle = app.displayDialog('����������', { defaultAnswer: "" }).textReturned
var readPerDay = parseInt(app.displayDialog('������ÿ�μƻ��Ķ�ҳ��',{ defaultAnswer:10}).textReturned)
var bookPages = parseInt(app.displayDialog('�����������ҳ��', { defaultAnswer: 100 }).textReturned)

var taskCount = Math.ceil(bookPages / readPerDay)
app.displayDialog(`�Ƿ񴴽� ${taskCount}������?`)


app.defaultDocument.inboxTasks.push(app.InboxTask({name:`�Ķ� ${bookTitle}`}))

var parentTask = app.defaultDocument.inboxTasks[app.defaultDocument.inboxTasks.length - 1];

var start = 0;
var end = 0;
for(var i = 0;i < taskCount;i++){
	start = i * readPerDay+1;
	end = Math.min(start + readPerDay - 1, bookPages)
	parentTask.tasks.push(app.InboxTask({name:`�Ķ� ${bookTitle} ��${start}-${end}ҳ`}))
}

