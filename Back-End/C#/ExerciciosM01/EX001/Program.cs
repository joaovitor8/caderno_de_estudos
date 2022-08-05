using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EX001
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.SetCursorPosition(10, 4);

            Console.BackgroundColor = ConsoleColor.Blue;
            Console.ForegroundColor = ConsoleColor.White;
            System.Threading.Thread.Sleep(1000);
            Console.Write(" MEU ");

            Console.BackgroundColor = ConsoleColor.Yellow;
            Console.ForegroundColor = ConsoleColor.Green;
            System.Threading.Thread.Sleep(1000);
            Console.Write(" BRASIL ");

            Console.BackgroundColor = ConsoleColor.Green;
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            System.Threading.Thread.Sleep(1000);
            Console.Write("BRASILEIRO");

            
            Console.ReadKey();

        }
    }
}
