using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int dia = DateTime.Now.Day;
            int mes = DateTime.Now.Month;
            int ano = DateTime.Now.Year;
            int f = 0;
            int d = 0;

            while (f > 5 || f == 0)
            {
                Console.WriteLine("Valor invalido, tente novamente!");
                Console.WriteLine("1 - configuração de sistema:     08/01/2021 20:48:13");
                Console.WriteLine("2 - Formato simples:             08-01-21");
                Console.WriteLine("3 - Formato longo:               sexta-feira, 8 de janeiro de 2021");
                Console.WriteLine("4 - Formato longo personalizado: 08-01-2021 08:48:13");
                Console.WriteLine("5 - Formato RFC1123 pattern:     Fri, 08 Jan 2021 20:48:13 GMT");
                Console.Write("Informe qual tipo de horario vc quer: ");
                int.TryParse(Console.ReadLine(), out  f);
                Console.WriteLine();
            }
            while (d > 3 || d == 0)
            {
                Console.WriteLine("1 - ENIAC");
                Console.WriteLine("2 - RFC1");
                Console.WriteLine("3 - Alan Turing");
                Console.Write("Escolha a data que vc quer ver: ");
                int.TryParse(Console.ReadLine(), out d);
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
