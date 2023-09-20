/* PESQUISA */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
  
    const produtos = [
      {
        nome: "Teclado musical Casio Standard CTK-1550 61 teclas preto",
        descricao: "Um teclado de ótima qualidade...",
        preco: 1250.00,
        imagem: "Produtos/Teclado1-1.webp"
      },
      {
        nome: "Teclado Casio Ct-s1 W 5/8 Vermelho Instrumento Musical Cts1",
        descricao: "Um teclado de ótima qualidade...",
        preco: 2070.00,
        imagem: "Produtos/Teclado2-1.webp"
      },
      {
        nome: "Escaleta 32 Teclas Concert By Strinberg M32 Sopro + Capa Cor Preto",
        descricao: "Uma escaleta de ótima qualidade...",
        preco: 140.00,
        imagem: "Produtos/Escaleta1-1.webp"
      },
    ];
  
  
    const teclados = [
        {
          nome: "Teclado musical Casio Standard CTK-1550 61 teclas preto",
          descricao: "Um teclado de ótima qualidade...",
          preco: 1250.00,
          imagem: "Produtos/Teclado1-1.webp"
        },
        {
          nome: "Teclado Casio Ct-s1 W 5/8 Vermelho Instrumento Musical Cts1",
          descricao: "Um teclado de ótima qualidade...",
          preco: 2070.00,
          imagem: "Produtos/Teclado2-1.webp"
        },
    ];

    const escaletas = [
      {
        nome: "Escaleta 32 Teclas Concert By Strinberg M32 Sopro + Capa Cor Preto",
        descricao: "Uma escaleta de ótima qualidade...",
        preco: 140.00,
        imagem: "Produtos/Escaleta1-1.webp"
      },
  ];
  
    let produtosPesquisados = []; // Array para produtos pesquisados
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredTeclados = teclados.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );
      const filteredEscaletas = escaletas.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );

      displayProdutos(filteredTeclados, tecladosElement);
      displayProdutos(filteredEscaletas, escaletasElement);
    
      // Se a pesquisa estiver vazia, reexiba todos os produtos originais
      if (searchTerm === "") {
        displayProdutos(teclados, tecladosElement);
        displayProdutos(escaletas, escaletasElement);
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
    const tecladosElement = document.getElementById("teclados");
    const escaletasElement = document.getElementById("escaletas");


    displayProdutos(teclados.filter(produto => !produtosPesquisados.includes(produto)), tecladosElement);
    displayProdutos(escaletas.filter(produto => !produtosPesquisados.includes(produto)), escaletasElement);
  });
  
  
  
  function abrirnavlateral() {
      setTimeout(()=>{document.getElementById("lateralnav").style.width = "80vw";}, 240); 
  }
    
  /* Set the width of the side navigation to 0 */
  function fecharnavlateral() {
      document.getElementById("lateralnav").style.width = "0";
  }
  