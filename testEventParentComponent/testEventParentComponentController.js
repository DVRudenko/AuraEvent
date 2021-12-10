({
  handleComponentEvent : function(cmp, event) {
    let message = event.getParam("message");
    cmp.set("v.messageFromEvent", message);
    let numEventsHandled = parseInt(cmp.get("v.numEvents")) + 1;
    cmp.set("v.numEvents", numEventsHandled);
  }
})