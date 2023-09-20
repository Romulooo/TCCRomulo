/* PESQUISA */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
  
    const produtos = [
      {
        nome: "Contrabaixo de 5 Cordas Squier Jazz Bass V Classic Vibe 70s",
        descricao: "Corpo feito em Soft Maple...",
        preco: 6990.00,
        imagem: "Produtos/Baixo1-1.webp"
      },
      {
        nome: "Guitarra Tagima TG530 Woodstock - Olympic White",
        descricao: "A Tagima Woodstock TG 530 traz toda versatilidade de timbres...",
        preco: 1123.00,
        imagem: "Produtos/Guitarra2-1.webp"
      },
      {
          nome: "Violão Giannini GN15 Nylon Acústico - Natural",
          descricao: "Desfrute com este violão Giannini da conexão com...",
          preco: 580.00,
          imagem: "Produtos/Violão1-1.webp"
      },
      {
        nome: "Guitarra Tagima T-635 Clássica Sunburst E/MG",
        descricao: "Uma guitarra de ótima qualidade...",
        preco: 1407.00,
        imagem: "Produtos/Guitarra3-1.webp"
      },
      {
        nome: "Guitarra Epiphone Flying V Prophecy Black Aged Gloss",
        descricao: "Uma guitarra de ótima qualidade...",
        preco: 11699.00,
        imagem: "Produtos/Guitarra4-1.webp"
      },
      {
        nome: "Guitarra Epiphone SG Muse com Captadores Alnico Classic Pro",
        descricao: "A Epiphone SG Muse, pertence a nova coleção Inspired By Gibson...",
        preco: 6760.00,
        imagem: "Produtos/Guitarra1-2.webp"
      },
      {
        nome: "Contrabaixo Eletrico Tagima Xb21 4 Cordas",
        descricao: "Um baixo de ótima qualidade...",
        preco: 1200.00,
        imagem: "Produtos/Baixo2-1.webp"
      },
      {
        nome: "Contra Baixo Tagima Tw-73 Olympic White Olympic White 4 Cordas",
        descricao: "Um baixo de ótima qualidade...",
        preco: 1329.00,
        imagem: "Produtos/Baixo3-1.webp"
      },
      {
        nome: "Violão clássico Queen's Conthey D13751",
        descricao: "Um violão de ótima qualidade...",
        preco: 270.00,
        imagem: "Produtos/Violão2-2.webp"
      },
    ];
  
  
    const guitarras = [
        {
          nome: "Guitarra Tagima TG530 Woodstock - Olympic White",
          descricao: "A Tagima Woodstock TG 530 traz toda versatilidade de timbres...",
          preco: 1123.00,
          imagem: "Produtos/Guitarra2-1.webp"
        },
        {
          nome: "Guitarra Tagima T-635 Clássica Sunburst E/MG",
          descricao: "Uma guitarra de ótima qualidade...",
          preco: 1407.00,
          imagem: "Produtos/Guitarra3-1.webp"
        },
        {
          nome: "Guitarra Epiphone Flying V Prophecy Black Aged Gloss",
          descricao: "Uma guitarra de ótima qualidade...",
          preco: 11699.00,
          imagem: "Produtos/Guitarra4-1.webp"
        },
        {
          nome: "Guitarra Epiphone SG Muse com Captadores Alnico Classic Pro",
          descricao: "A Epiphone SG Muse, pertence a nova coleção Inspired By Gibson...",
          preco: 6760.00,
          imagem: "Produtos/Guitarra1-2.webp"
        },
    ];

    const baixos = [    
        {
            nome: "Contrabaixo Eletrico Tagima Xb21 4 Cordas",
            descricao: "Um baixo de ótima qualidade...",
            preco: 1200.00,
            imagem: "Produtos/Baixo2-1.webp"
        },
        {
            nome: "Contra Baixo Tagima Tw-73 Olympic White Olympic White 4 Cordas",
            descricao: "Um baixo de ótima qualidade...",
            preco: 1329.00,
            imagem: "Produtos/Baixo3-1.webp"
        },
        {
          nome: "Contrabaixo de 5 Cordas Squier Jazz Bass V Classic Vibe 70s",
          descricao: "Corpo feito em Soft Maple...",
          preco: 6990.00,
          imagem: "Produtos/Baixo1-1.webp"
        },
    ];

    const acústicos = [    
        {
            nome: "Violão Giannini GN15 Nylon Acústico - Natural",
            descricao: "Desfrute com este violão Giannini da conexão com...",
            preco: 580.00,
            imagem: "Produtos/Violão1-1.webp"
        },
        {
            nome: "Violão clássico Queen's Conthey D13751",
            descricao: "Um violão de ótima qualidade...",
            preco: 270.00,
            imagem: "Produtos/Violão2-2.webp"
          },
    ];
  
    let produtosPesquisados = []; // Array para produtos pesquisados
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredGuitarras = guitarras.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );

      const filteredBaixos = baixos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );

      const filteredAcústicos = acústicos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
      );

      displayProdutos(filteredGuitarras, guitarrasElement);
      displayProdutos(filteredBaixos, baixosElement);
      displayProdutos(filteredAcústicos, acústicosElement);
    
      // Se a pesquisa estiver vazia, reexiba todos os produtos originais
      if (searchTerm === "") {
        displayProdutos(guitarras, guitarrasElement);
        displayProdutos(baixos, baixosElement);
        displayProdutos(acústicos, acústicosElement);
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
    const guitarrasElement = document.getElementById("guitarras");
    const baixosElement = document.getElementById("baixos");
    const acústicosElement = document.getElementById("acústicos");

    displayProdutos(guitarras.filter(produto => !produtosPesquisados.includes(produto)), guitarrasElement);
    displayProdutos(baixos.filter(produto => !produtosPesquisados.includes(produto)), baixosElement);
    displayProdutos(acústicos.filter(produto => !produtosPesquisados.includes(produto)), acústicosElement);
  
  
  });
  
  
  
  function abrirnavlateral() {
      setTimeout(()=>{document.getElementById("lateralnav").style.width = "80vw";}, 240); 
  }
    
  /* Set the width of the side navigation to 0 */
  function fecharnavlateral() {
      document.getElementById("lateralnav").style.width = "0";
  }
  