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

            while (true)
            {
                Console.WriteLine("1 - configuração de sistema:     08/01/2021 20:48:13");
                Console.WriteLine("2 - Formato simples:             08-01-21");
                Console.WriteLine("3 - Formato longo:               sexta-feira, 8 de janeiro de 2021");
                Console.WriteLine("4 - Formato longo personalizado: 08-01-2021 08:48:13");
                Console.WriteLine("5 - Formato RFC1123 pattern:     Fri, 08 Jan 2021 20:48:13 GMT");
                Console.Write("Informe qual tipo de horario vc quer: ");
                int.TryParse(Console.ReadLine(), out  f);
                Console.WriteLine();
                if (f >= 6)
                {
                    Console.WriteLine("Valor invalido, tente novamente!");
                }
                else if (f <= 5)
                {
                    break;
                }
            }

            while (true)
            {
                Console.WriteLine("1 - ENIAC");
                Console.WriteLine("2 - RFC1");
                Console.WriteLine("3 - Alan Turing");
                Console.Write("Escolha a data que vc quer ver: ");
                int.TryParse(Console.ReadLine(), out d);
                Console.WriteLine();
                if (d >= 4)
                {
                    Console.WriteLine("Valor invalido, tente novamente!");
                }
                else if (d <= 3)
                {
                    break;
                }
            }

            if (f == 1 && d == 1)
            {
                Console.WriteLine("15 de agosto de 1946");
                Console.WriteLine("No dia 15 de agosto de 1946 os norte-americanos John Eckert e John Mauchly apresentaram o ENIAC, o primeiro equipamento eletrônico chamado de computador no mundo.");
            }
            else if (f == 2 && d == 1)
            {
                Console.WriteLine("15 de agosto de 1946");
                Console.WriteLine("No dia 15 de agosto de 1946 os norte-americanos John Eckert e John Mauchly apresentaram o ENIAC, o primeiro equipamento eletrônico chamado de computador no mundo.");
            }
            else if (f == 3 && d == 1)
            {
                Console.WriteLine("15 de agosto de 1946");
                Console.WriteLine("No dia 15 de agosto de 1946 os norte-americanos John Eckert e John Mauchly apresentaram o ENIAC, o primeiro equipamento eletrônico chamado de computador no mundo.");
            }
            else if (f == 4 && d == 1)
            {
                Console.WriteLine("15 de agosto de 1946");
                Console.WriteLine("No dia 15 de agosto de 1946 os norte-americanos John Eckert e John Mauchly apresentaram o ENIAC, o primeiro equipamento eletrônico chamado de computador no mundo.");
            }
            else if (f == 5 && d == 1)
            {
                Console.WriteLine("15 de agosto de 1946");
                Console.WriteLine("No dia 15 de agosto de 1946 os norte-americanos John Eckert e John Mauchly apresentaram o ENIAC, o primeiro equipamento eletrônico chamado de computador no mundo.");
            }
            else if (f == 1 && d == 2)
            {
                Console.WriteLine("17 de abril de 1969 Em 17 de abril de 1969 foi feita a publicação da RFC1, por esse motivo considera-se esse o dia da internet até hoje.");
            }
            else if (f == 2 && d == 2)
            {
                Console.WriteLine("17 de abril de 1969 Em 17 de abril de 1969 foi feita a publicação da RFC1, por esse motivo considera-se esse o dia da internet até hoje.");
            }
            else if (f == 3 && d == 2)
            {
                Console.WriteLine("17 de abril de 1969 Em 17 de abril de 1969 foi feita a publicação da RFC1, por esse motivo considera-se esse o dia da internet até hoje.");
            }
            else if (f == 4 && d == 2)
            {
                Console.WriteLine("17 de abril de 1969 Em 17 de abril de 1969 foi feita a publicação da RFC1, por esse motivo considera-se esse o dia da internet até hoje.");
            }
            else if (f == 5 && d == 2)
            {
                Console.WriteLine("17 de abril de 1969 Em 17 de abril de 1969 foi feita a publicação da RFC1, por esse motivo considera-se esse o dia da internet até hoje.");
            }
            else if (f == 1 && d == 2)
            {
                Console.WriteLine("23 de junho de 1912 Nascimento de Alan Turing, matemático e criptoanalista britânico que é considerado o \"pai da informática\" por ter sido essencial na criação de máquinas que, mais tarde, dariam origem aos PCs que utilizamos hoje para trabalhar, estudar e realizar nossas atividades diárias. Sua genialidade e influência fundamental na história da humanidade, entretanto, foram ceifadas pelo preconceito de uma época que, felizmente, já ficou para trás.");
            }
            else if (f == 2 && d == 2)
            {
                Console.WriteLine("23 de junho de 1912 Nascimento de Alan Turing, matemático e criptoanalista britânico que é considerado o \"pai da informática\" por ter sido essencial na criação de máquinas que, mais tarde, dariam origem aos PCs que utilizamos hoje para trabalhar, estudar e realizar nossas atividades diárias. Sua genialidade e influência fundamental na história da humanidade, entretanto, foram ceifadas pelo preconceito de uma época que, felizmente, já ficou para trás.");
            }
            else if (f == 3 && d == 2)
            {
                Console.WriteLine("23 de junho de 1912 Nascimento de Alan Turing, matemático e criptoanalista britânico que é considerado o \"pai da informática\" por ter sido essencial na criação de máquinas que, mais tarde, dariam origem aos PCs que utilizamos hoje para trabalhar, estudar e realizar nossas atividades diárias. Sua genialidade e influência fundamental na história da humanidade, entretanto, foram ceifadas pelo preconceito de uma época que, felizmente, já ficou para trás.");
            }
            else if (f == 4 && d == 2)
            {
                Console.WriteLine("23 de junho de 1912 Nascimento de Alan Turing, matemático e criptoanalista britânico que é considerado o \"pai da informática\" por ter sido essencial na criação de máquinas que, mais tarde, dariam origem aos PCs que utilizamos hoje para trabalhar, estudar e realizar nossas atividades diárias. Sua genialidade e influência fundamental na história da humanidade, entretanto, foram ceifadas pelo preconceito de uma época que, felizmente, já ficou para trás.");
            }
            else if (f == 5 && d == 2)
            {
                Console.WriteLine("23 de junho de 1912 Nascimento de Alan Turing, matemático e criptoanalista britânico que é considerado o \"pai da informática\" por ter sido essencial na criação de máquinas que, mais tarde, dariam origem aos PCs que utilizamos hoje para trabalhar, estudar e realizar nossas atividades diárias. Sua genialidade e influência fundamental na história da humanidade, entretanto, foram ceifadas pelo preconceito de uma época que, felizmente, já ficou para trás.");
            }

            Console.ReadKey();
        }
    }
}
