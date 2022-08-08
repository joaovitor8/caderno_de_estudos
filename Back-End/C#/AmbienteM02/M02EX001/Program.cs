// Gerando numeros aleatorios
Random gerador = new Random();
int op1 = gerador.Next(1, 101);
int op2 = gerador.Next(1, 101);

Console.WriteLine(op1);
Console.WriteLine(op2);

Console.WriteLine();
Console.WriteLine();

// Realizando as operações unarias
Console.WriteLine($"Operador de identidade:          +{op1} = +{op1}");
Console.WriteLine($"Operadoir de nagação aritmética: -{op2} = -{op2}");

Console.WriteLine();

// Realizando as operações binarias
Console.WriteLine($"Operação de adção:                    {op1} + {op2} = {op1 + op2}");
Console.WriteLine($"Operação de subtração:                {op1} - {op2} = {op1 - op2}");
Console.WriteLine($"Operação de multiplicação:            {op1} * {op2} = {op1 * op2}");
Console.WriteLine($"Operação de divição inteira:          {op1} / {op2} = {op1 / op2}");
Console.WriteLine($"Operação de resto da divisão inteira: {op1} % {op2} = {op1 % op2}");


Console.ReadKey();
