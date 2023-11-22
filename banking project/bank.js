
function Click_Deposit()
{
    /*------------------------  DEPOSIT FILED IN WORK HERE ------------------------ */

    var convertInputFileld = getConvertedValue("input-deposit","value");   
    var convertDepositAmounts = getConvertedValue("deposit-amounts","innerText");
    
    var sum = convertInputFileld + convertDepositAmounts;
    document.getElementById("deposit-amounts").innerText = sum;


    var convertTotal = getConvertedValue("total-sum",'innerText');


    var totalSum = convertTotal + convertInputFileld;
    document.getElementById("total-sum").innerText = totalSum;
    document.getElementById("input-deposit").value = "";
    
    

}

function Click_Withdrow()
{
    /*------------------------  WITHDRAW FILED IN WORK HERE ------------------------ */
    var convertInputWitdrow = getConvertedValue("input-withdrow",'value')

    var convertWithdrowAmounts = getConvertedValue("withdrowAmounts",'innerText');

    var sum = convertInputWitdrow + convertWithdrowAmounts;
    document.getElementById("withdrowAmounts").innerText = sum;
    document.getElementById("input-withdrow").value = "";

    var total = document.getElementById("total-sum").innerText;
    var convertWithdrowAmounts = getConvertedValue("total-sum",total);
    var convertTotal = getConvertedValue("total-sum",'innerText');
    var totalSum = convertTotal - convertInputWitdrow;

    
    if (totalSum == 0)
    {
        document.getElementById("total-sum").innerText = "Your Balance 0 taka";
    }
    else
    {
        document.getElementById("total-sum").innerText = totalSum; 
    }
}
function getConvertedValue(id,element){
    if (element == "innerText")
    {
        var value = document.getElementById(id).innerText;
        return parseFloat(value);
    }
    else
    {
        var value = document.getElementById(id).value;
        return parseFloat(value);
    }
}

