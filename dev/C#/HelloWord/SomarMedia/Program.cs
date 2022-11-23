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
            
            Console.Write("Informe quantos numeros vc quer ler: ");
            float.TryParse(Console.ReadLine(), out float num);
            float[] numeros = new float[(int)num];

            for (int p = 0; p < numeros.Length; p++)
            {
                Console.Write("Informe o {0}º numero: ", p+1);
                numeros[p] = float.Parse(Console.ReadLine());
            }

            float somar = numeros.Sum();
            float media = somar / num;
            Console.WriteLine("A soma dos numeros digitados é {0}, e a media dos mesmo é {1}", somar, media);

            Console.ReadKey();
        }
    }
}
