public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        
        // Tipos primitivos
        //byte numeroPequeno = 127; // Números inteiros pequenos
        //short numeroMedio = 32767; // Números inteiros médios
        //int numeroGrande = 2147483647; // Números inteiros grandes
        //long numeroMuitoGrande = 9223372036854775807L; // Números inteiros muito grandes
        //float numeroComPontoFlutuante = 3.14f; // Números de ponto flutuante de precisão simples
        //double numeroComMuitoPontoFlutuante = 3.141592653589793; // Números de ponto flutuante de precisão dupla
        //char caractere = 'A'; // Um único caractere
        //boolean verdadeiroOuFalso = true; // Valor lógico (true ou false)
        
        // Tipo de referência (String)
        //String texto = "Olá, mundo!";
        
        
        // ---
        
        
        // Operadores aritméticos
        //int a = 10, b = 5;
        //int soma = a + b;
        //int subtracao = a - b;
        //int multiplicacao = a * b;
        //int divisao = a / b;
        //int modulo = a % b; // Resto da divisão
        
        // Operadores de comparação
        //boolean igual = (a == b);
        //boolean diferente = (a != b);
        //boolean maior = (a > b);
        //boolean menor = (a < b);
        //boolean maiorIgual = (a >= b);
        //boolean menorIgual = (a <= b);
        
        // Operadores lógicos
        //boolean e = true && false; // E lógico
        //boolean ou = true || false; // OU lógico
        //boolean nao = !true; // NÃO lógico
        
        
        // ---
        

        // Declaração de variável
        int idade;
        
        // Atribuição de valor
        idade = 25;
        
        // Impressão na tela
        System.out.println("Minha idade é: " + idade);
        
        // Condição if-else
        if (idade >= 18) {
            System.out.println("Você é maior de idade.");
        } else {
            System.out.println("Você é menor de idade.");
        }
        
        
        // ---
        
        
        // Loop for
        for (int i = 0; i < 5; i++) {
            System.out.println("Contador: " + i);
        }
        
        // Loop while
        int contador = 0;
        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++;
        }
        
        // Loop do-while
        int contador2 = 0;
        do {
            System.out.println("Contador: " + contador2);
            contador2++;
        } while (contador2 < 5);
        
        
        // ---
        

        // Strings
        String nome = "João";
        System.out.println(nome.length()); // Comprimento da string
        
        // Arrays
        int[] numeros = {1, 2, 3, 4, 5};
        System.out.println(numeros[2]); // Acessando o terceiro elemento
    }
}