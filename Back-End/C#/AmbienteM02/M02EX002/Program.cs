// Gerando numeros aleatorios
Random gerador = new Random();
int op1 = gerador.Next(1, 101);
int op2 = gerador.Next(1, 101);

float op3 = gerador.Next(1, 51);

Console.WriteLine(op1);
Console.WriteLine(op2);
Console.WriteLine(op3);

Console.WriteLine();
Console.WriteLine();

// Divisão inteira e Divisão real
Console.WriteLine($"Operação de divição inteira: {op1} / {op2} = {op1 / op2}");
Console.WriteLine($"Operação de divição real:    {op3} / {op2} = {op3 / op2}");

Console.ReadKey();
