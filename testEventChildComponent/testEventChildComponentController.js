({
  fireComponentEvent : function(cmp, event) {
    let cmpEvent = cmp.getEvent("cmpEvent");
    cmpEvent.setParams({
      "message" : "A component event fired me. "
    });
    cmpEvent.fire();
  }
})