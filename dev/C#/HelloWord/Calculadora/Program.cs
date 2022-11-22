using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculadora
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Informe o primerio numero: ");
            int.TryParse(Console.ReadLine(), out int num1);

            Console.Write("Informe o segundo numero: ");
            int.TryParse(Console.ReadLine(), out int num2);

            Console.WriteLine();

            Console.WriteLine("1-somar, 2-subtrair, 3-multiplicar, 4-dividir, 5-resto, 6-potencia, 0-sair");
            Console.Write("Informe o Sinal: ");
            int.TryParse(Console.ReadLine(), out int sinal);

            while (sinal > 6)
            {
                Console.WriteLine("Valor invalido, tente novamente!");
                Console.WriteLine("1-somar, 2-subtrair, 3-multiplicar, 4-dividir, 5-resto, 6-potencia, 0-sair");
                Console.Write("Informe o Sinal: ");
                int.TryParse(Console.ReadLine(), out sinal);
            }

            if (sinal == 1)
            {
                int somar = num1 + num2;
                Console.WriteLine(somar);
            }
            else if (sinal == 2)
            {
                int sub = num1 - num2;
                Console.WriteLine(sub);
            }
            else if (sinal == 3)
            {
                int mul = num1 * num2;
                Console.WriteLine(mul);
            }
            else if (sinal == 4)
            {
                if (num2 == 0)
                {
                    Console.WriteLine("Não é possível dividir por zero.");
                    Console.WriteLine("Saindo do programa...");
                }
                else
                {
                    int div = num1 / num2;
                    Console.WriteLine(div);
                }
            }
            else if (sinal == 5)
            {
                int rest = num1 % num2;
                Console.WriteLine(rest);
            }
            else if (sinal == 6)
            {
                int pot = (int)Math.Pow(num1, num2);
                Console.WriteLine(pot);
            }
            else if (sinal == 0)
            {
                Console.WriteLine("Saindo do programa...");
            }

            Console.ReadKey();
        }
    }
}
