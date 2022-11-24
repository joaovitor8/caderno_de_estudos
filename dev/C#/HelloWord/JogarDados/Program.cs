using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JogarDados
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random gerador = new Random();

            int pj1 = 0;
            int pj2 = 0;
            int empate = 0;
            int c = 0;

            Console.Write("Quantas partidas seram?: ");
            int.TryParse(Console.ReadLine(), out int p);

            while(c < p)
            {
                int j1 = gerador.Next(1, 7);
                int j2 = gerador.Next(1, 7);

                Console.WriteLine("Jogando dados!");
                Console.WriteLine("Jogador 1 tirou {0} no dado!", j1);
                Console.WriteLine("Jogador 2 tirou {0} no dado!", j2);

                if (j1 > j2)
                {
                    pj1++;
                }
                else if (j2 > j1)
                {
                    pj2++;
                }
                else if (j1 == j2)
                {
                    empate++;
                }

                Console.WriteLine("Pontos!");
                Console.WriteLine("Jogador 1: {0} pontos", pj1);
                Console.WriteLine("Jogador 2: {0} pontos", pj2);
                Console.WriteLine();

                c++;
            }

            if (pj1 > pj2)
            {
                Console.WriteLine("Jogardor 1 ganhou");
            }
            else if (pj2 > pj1)
            {
                Console.WriteLine("Jogador 2 ganhou");
            }
            else if (pj1 == pj2)
            {
                Console.WriteLine("Empate, jogem novamente até sair um vencedor!");
            }

            Console.WriteLine();



            Console.ReadKey();
        }
    }
}
