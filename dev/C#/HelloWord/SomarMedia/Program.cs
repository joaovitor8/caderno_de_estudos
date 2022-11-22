using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SomarMedia
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Informe quantas notas vc quer ler: ");
            int.TryParse(Console.ReadLine(), out int num);

            for (int i = 1; i < num+1; i++)
            {
                Console.Write("Informe a {0}ª nota: ", i);
                int.TryParse(Console.ReadLine(), out int notas);
            }

            Console.WriteLine();

            Console.ReadKey();
        }
    }
}
