function getValue(inputId) {
    const inputField = document.getElementById(inputId).value;
    const inputFloat = parseFloat(inputField);
    return inputFloat;
};
function getInnerText(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalAmount = parseFloat(totalField.innerText);
    totalField.innerText = amount;
};
document.getElementById('calculate-button').addEventListener('click', function () {
    const income = getValue('income-field');
    const food = getValue('food-field');
    const rent = getValue('rent-field');
    const clothes = getValue('clothes-field');

    const expenses = food + rent + clothes;
    const balance = income - expenses;

    getInnerText('total-field', expenses);
    getInnerText('balance', balance);
});

document.getElementById('save-btn').addEventListener('click', function () {
    const income = getValue('income-field');

    const saveAmountPercentage = getValue('save-field');
    const percentage = ((income * saveAmountPercentage) / 100);

    getInnerText('saving-amount', percentage);

    const balanceField = document.getElementById('balance').innerText;
    const balanceAmount = parseFloat(balanceField);
    const remainingBalance = balanceAmount - percentage;
    getInnerText('remaining-balance', remainingBalance);
});