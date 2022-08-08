// Gerando numeros aleatorios
Random gerador = new Random();
int n1 = gerador.Next(1, 101);
int n2 = gerador.Next(1, 101);

Console.WriteLine($"Números gerados: {n1} e {n2}");

Console.WriteLine();

Console.WriteLine($"{n1} é igual a {n2}?          {n1 == n2}");
Console.WriteLine($"{n1} é diferente de {n2}?     {n1 != n2}");
Console.WriteLine($"{n1} é maior que {n2}?        {n1 > n2}");
Console.WriteLine($"{n1} é menor que {n2}?        {n1 < n2}");
Console.WriteLine($"{n1} é maior ou igual a {n2}? {n1 >= n2}");
Console.WriteLine($"{n1} é menor ou igual a {n2}? {n1 <= n2}");

Console.ReadKey();
