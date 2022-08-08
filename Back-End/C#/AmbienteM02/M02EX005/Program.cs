bool verdadeiro = true;
bool falso = false;

Console.WriteLine($"NÃO {verdadeiro}  = {!verdadeiro}");
Console.WriteLine($"NÃO {falso} = {!falso}");

Console.WriteLine();

Console.WriteLine($"{verdadeiro} E {verdadeiro}   = {verdadeiro && verdadeiro}");
Console.WriteLine($"{verdadeiro} E {falso}  = {verdadeiro && falso}");
Console.WriteLine($"{falso} E {verdadeiro}  = {verdadeiro && falso}");
Console.WriteLine($"{falso} E {falso} = {falso && falso}");

Console.WriteLine();

Console.WriteLine($"{verdadeiro} OU {verdadeiro}   = {verdadeiro || verdadeiro}");
Console.WriteLine($"{verdadeiro} OU {falso}  = {verdadeiro || falso}");
Console.WriteLine($"{falso} OU {verdadeiro}  = {verdadeiro || falso}");
Console.WriteLine($"{falso} OU {falso} = {falso || falso}");

Console.ReadKey();
