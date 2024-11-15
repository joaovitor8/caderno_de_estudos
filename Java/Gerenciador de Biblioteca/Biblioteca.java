public class Biblioteca {
  private ArrayList<Livro> livros = new ArrayList<>();
  private ArrayList<Usuario> usuarios = new ArrayList<>();
  private ArrayList<Emprestimo> emprestimos = new ArrayList<>();

  public void adicionarLivro(Livro livro) { /* Código aqui */ }
  public void removerLivro(int livroId) { /* Código aqui */ }
  public Livro buscarLivro(String titulo) { /* Código aqui */ return null; }

  public void registrarUsuario(Usuario usuario) { /* Código aqui */ }
  public void removerUsuario(int usuarioId) { /* Código aqui */ }

  public void realizarEmprestimo(int usuarioId, int livroId) { /* Código aqui */ }
  public void devolverLivro(int emprestimoId) { /* Código aqui */ }

  public void exportarRelatorio(String tipo) { /* Código para exportar relatório em arquivo */ }
}
