/* PESQUISA */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
  
    const produtos = [
      {
        nome: "Cubo Amplificador Meteoro Space Júnior 35gs 25w P/ Guitarra",
        descricao: "Amplificador combo. Possui 2 canais. Potência de saída 35 W.",
        preco: 500.00,
        imagem: "Produtos/Amplificador1-1.webp"
      },
      {
        nome: "Amplificador Meteoro Space Júnior 35bs Para Baixo",
        descricao: "Amplificador combo. Possui 1 canal. Potência de saída 25 W.",
        preco: 500.00,
        imagem: "Produtos/Amplificador2-1.webp"
      },
    ];
  
  
    const amplificadores = [
        {
            nome: "Cubo Amplificador Meteoro Space Júnior 35gs 25w P/ Guitarra",
            descricao: "Amplificador combo. Possui 2 canais. Potência de saída 35 W.",
            preco: 500.00,
            imagem: "Produtos/Amplificador1-1.webp"
        },
        {
            nome: "Amplificador Meteoro Space Júnior 35bs Para Baixo",
            descricao: "Amplificador combo. Possui 1 canal. Potência de saída 25 W.",
            preco: 500.00,
            imagem: "Produtos/Amplificador2-1.webp"
          },
    ];

    
  
    let produtosPesquisados = []; // Array para produtos pesquisados
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredAmplificadores = amplificadores.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );

      displayProdutos(filteredAmplificadores, amplificadoresElement);
     
    
      // Se a pesquisa estiver vazia, reexiba todos os produtos originais
      if (searchTerm === "") {
        displayProdutos(amplificadores, amplificadoresElement);
      }
    });
    
    function displayProdutos(produtosArray, parentElement) {
      parentElement.innerHTML = ""; // Limpar o elemento pai
    
      produtosArray.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto"); // Adicionar classe CSS ao produto
    
        const produtoImg = document.createElement("img");
        produtoImg.src = produto.imagem;
        produtoImg.alt = produto.nome;
    
        const produtoNome = document.createElement("h3");
        produtoNome.textContent = produto.nome;
    
        const produtoDescricao = document.createElement("p");
        produtoDescricao.textContent = produto.descricao;
    
        const produtoPreco = document.createElement("p");
        produtoPreco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    
        produtoDiv.appendChild(produtoImg);
        produtoDiv.appendChild(produtoNome);
        produtoDiv.appendChild(produtoDescricao);
        produtoDiv.appendChild(produtoPreco);
    
        parentElement.appendChild(produtoDiv);
      });
    }
  
  
    // Chamada inicial para exibir produtos nos destaques do mês e mais vendidos
    const amplificadoresElement = document.getElementById("amplificadores");
    


    displayProdutos(amplificadores.filter(produto => !produtosPesquisados.includes(produto)), amplificadoresElement);
  });
  
  
  
  function abrirnavlateral() {
      setTimeout(()=>{document.getElementById("lateralnav").style.width = "80vw";}, 240); 
  }
    
  /* Set the width of the side navigation to 0 */
  function fecharnavlateral() {
      document.getElementById("lateralnav").style.width = "0";
  }
  