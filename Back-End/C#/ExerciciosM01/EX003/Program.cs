using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EX003
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Escreva um numero Real: ");
            float num;
            float.TryParse(Console.ReadLine(), out num);

            int n1 = (int) num;
            int n2 = Convert.ToInt16(num);

            Console.WriteLine($"Voce digitou o valor {num:N}");
            Console.WriteLine($"A parte inteira do numero é {n1:D}");
            Console.WriteLine($"Arredonndando, temos o numero {n2:D}");

            Console.ReadKey();
        }
    }
}
