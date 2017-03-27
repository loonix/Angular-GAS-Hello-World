 function doGet(e) {
  var t = HtmlService.createTemplateFromFile('index');
  return t.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle('Angular Example By Daniel C');
}
 function include(filename) {
      return HtmlService.createHtmlOutputFromFile(filename)
          .getContent();
    }
