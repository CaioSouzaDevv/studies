import java.util.ArrayList;
import java.util.List;

public class ProdutoRepository {
    List<Produto> listaProdutos = new ArrayList<>();

    public boolean produtoAdicionado(Produto produto) {
       
      boolean produtoAdicionado =  listaProdutos.add(produto);
        
      return produtoAdicionado;
    

    }
    public boolean produtoDeletado(int idDeletar) {
        boolean removido = listaProdutos.removeIf(produto -> produto.id == idDeletar);
        return removido;
    }
}
