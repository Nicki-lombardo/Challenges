// Inicializar y asignar valores a las variables

const startingBalance = 1000; // Saldo inicial de ahorros
const monthlyContribution = 250; // Cantidad que planeas ahorrar cada mes
const months = 12; // Número de meses para rastrear los ahorros

// Calcular los ahorros totales después del número especificado de meses
const totalSavings = startingBalance + (monthlyContribution * months);

// Mostrar el resultado en la consola
console.log("After " + months + " months of saving, you will have $" + totalSavings + " in your account.");
