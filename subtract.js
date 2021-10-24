function subtract() {
    var amount = parseInt(document.getElementById("amount"));
    var minus = parseInt(document.getElementById("subtract"));
    if (amount - minus> 0) {
        console.log("fail");
        document.getElementById("amount").value = amount - minus;
        console.log("success");
    }
}