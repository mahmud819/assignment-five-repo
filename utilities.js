// ! function for to get input field value

function inputFieldValue (id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// ! function for to get element inner tex

function getStatusFieldValue(id){
    const statusFieldValue = document.getElementById(id).innerText;
    return statusFieldValue;
}

// ! Main balance reduction function

const mainBalance = parseFloat(getStatusFieldValue('main-balance'));
function mainBalanceSub(donation){
    const updateBalance = mainBalance - donation;
    return updateBalance;
}