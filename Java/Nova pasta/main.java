public class main {
  public static void mainA(String[] args) {
    Aluno objeto = new Aluno();

    objeto.nome = "João";
    objeto.teste = 3;
    objeto.prova = 7;

    System.out.println(objeto.obterMedia());
  }

}
