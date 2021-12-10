({
  fireApplicationEvent : function(cmp, event) {
    let appEvent = $A.get("e.c:TestApplicationEvent");
    appEvent.setParams({
      "message" : "An application event fired me."
    });
    appEvent.fire();
  }
})