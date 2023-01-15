const request = require('request');
const pdf = require('pdf-parse');

var url ="/datasheet.pdf" ;

function scrapePDF(url) {
    request(url, function(error, response, body) {
        pdf(body).then(function(data) {
            console.log(data.text);
        });
    });
}
let disposable = vscode.commands.registerCommand('extension.scrapePDF', function () {
    // get the selected text
    let editor = vscode.window.activeTextEditor;
    let selection = editor.selection;
    let text = editor.document.getText(selection);
    // pass it to the function
    scrapePDF(text);
});
context.subscriptions.push(disposable);