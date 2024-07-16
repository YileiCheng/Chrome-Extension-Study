$(function () {
  $("#add").click(function () {
    // get stored data from chrome storage
    chrome.storage.sync.get("total", function (budget) {
      var totalAmount = 0;
      if (budget.total) {
        totalAmount = parseFloat(budget.total);
      }

      // add the current amount to the total
      var amount = $("#amount").val();
      if (amount) {
        totalAmount += parseFloat(amount);
        chrome.storage.sync.set({ total: totalAmount });
      }

      // update UI
      $("#total").text(totalAmount);
    });
  });
});
