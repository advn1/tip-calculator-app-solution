
const customTip = document.querySelector(".tip-custom");
const tipButtons = document.querySelectorAll(".tip-btn");

const bill = document.querySelector(".bill")
const num = document.querySelector(".ppl")

customTip.addEventListener("input", function() {
    if (customTip.value < 0 ) {
        document.querySelector(".tip-custom").value = ""
        document.querySelector(".btn-reset").style.backgroundColor = "hsl(172, 64%, 30%)"
        document.querySelector(".tipOne").innerHTML = "$" + 0.00
        document.querySelector(".totalOne").innerHTML = "$" + 0.00
        document.querySelector(".tip-custom").placeholder = "Custom"
        

        setTimeout(() => {
            alert("Can't be less than zero")
            customTip.value = ""
        },1000)

    }
    setTipPercentCustom("");
});

num.addEventListener("input", function() {
    if (num.value < 0) {
        document.querySelector(".tip-custom").value = ""
        document.querySelector(".btn-reset").style.backgroundColor = "hsl(172, 64%, 30%)"
        document.querySelector(".tipOne").innerHTML = "$" + 0.00
        document.querySelector(".totalOne").innerHTML = "$" + 0.00
        document.querySelector(".tip-custom").placeholder = "Custom"
        

        setTimeout(() => {
            alert("Can't be less than zero")
            customTip.value = ""
        },1000)

    }
    setTipPercentCustom(document.querySelector(".tipBuggy").textContent);
});



bill.addEventListener("input", function() {
    if (bill.value < 0) {
        document.querySelector(".bill-div").style.border = "2px solid red";
    }
    else if (bill.value > 0) {
        document.querySelector(".bill-div").style.border = "none";
    }
});




tipButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let len = button.textContent.length - 1
        setTipPercentCustom(button.textContent.slice(0,len));
    });
});

function setTipPercentCustom(percent) {
    let bill = parseFloat(document.querySelector(".bill").value);
    let tip = parseFloat(percent.length === 0 ? document.querySelector(".tip-custom").value : percent);
    let numbOfPpl = parseFloat(document.querySelector(".ppl").value);

    if (isNaN(bill) || isNaN(tip) || isNaN(numbOfPpl)) {
        return;
    }

    let tipOne = (bill * tip) / 100;
    let total = bill + tipOne;
    let totalOne = total / numbOfPpl;

    let tipOneElement = document.querySelector(".tipOne");
    let totalOneElement = document.querySelector(".totalOne");
    
    if (tipOneElement != "$NaN" && totalOneElement != "$NaN") {
        tipOneElement.innerHTML = "$" + (tipOne / numbOfPpl).toFixed(1); // Округляем до двух знаков после запятой
        totalOneElement.innerHTML = "$" + totalOne.toFixed(1); // Округляем до двух знаков после запятой
    }

    document.querySelector(".btn-reset").style.backgroundColor = "hsl(172, 62%, 42%)"
}

function setDefaultState() {
    document.querySelector(".bill").value = "0";
    document.querySelector(".ppl").value = "0";
    document.querySelector(".btn-reset").style.backgroundColor = "hsl(172, 64%, 30%)"
    document.querySelector(".tipOne").innerHTML = "$" + 0.00
    document.querySelector(".totalOne").innerHTML = "$" + 0.00
    document.querySelector(".tip-custom").value = "Custom"
}   

function savePercent(percent) {
    document.querySelector(".tipBuggy").innerHTML = percent;
}
