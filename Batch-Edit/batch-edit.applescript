var app = Application("Omnifocus");
app.includeStandardAdditions = true;

var targetKey = app.displayDialog("�������޸�����", {
  defaultAnswer: "deferDate"
}).textReturned;
var targetFn = eval(
  app.displayDialog("�����봦����", {
    defaultAnswer: "(index,cur,pre) => {return new Date(new Date('Thu Dec 12 2019 20:00:00 GMT+0800 (�й���׼ʱ��)').valueOf() + index * 24 * 60 * 60 * 1000) }"
  }).textReturned
);
//(index,cur,pre) => {return new Date(new Date("Thu Dec 12 2019 20:00:00 GMT+0800 (�й���׼ʱ��)").valueOf() + index * 24 * 60 * 60 * 1000) }

var selectedTrees =
  app.defaultDocument.documentWindows[0].content.selectedTrees;
for (var i = 0; i < selectedTrees.length; i++) {
  selectedTrees[i].value()[targetKey] = targetFn(
    i,
    selectedTrees[i].value(),
    i === 0 ? null : selectedTrees[i - 1].value()
  );
}
