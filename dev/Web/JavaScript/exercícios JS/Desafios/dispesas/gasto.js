let family = {
    incomes: [5000, 7000],
    expenses: [50, 100, 50, 60, 60, 200],
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenases = sum(family.expenses)

    const total = calculateIncomes - calculateExpenases
    if (total >= 0){
        return "Seu saldo é positivo: " + total
    }else{
        return "Seu saldo é negativo: " + total
    }
}

console.log(calculateBalance())
