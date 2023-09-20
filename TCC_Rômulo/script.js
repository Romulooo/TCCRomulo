/* PESQUISA */
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");

  const produtos = [
    {
      nome: "Guitarra Epiphone SG Muse com Captadores Alnico Classic Pro",
      descricao: "A Epiphone SG Muse, pertence a nova coleção Inspired By Gibson...",
      preco: 6760.00,
      imagem: "Produtos/Guitarra1-2.webp"
    },
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
      descricao: "Descrição do produto",
      preco: 1407.00,
      imagem: "Produtos/Guitarra3-1.webp"
    },

  ];

  const destaques = [
    {
      nome: "Guitarra Epiphone SG Muse com Captadores Alnico Classic Pro",
      descricao: "A Epiphone SG Muse, pertence a nova coleção Inspired By Gibson...",
      preco: 6760.00,
      imagem: "Produtos/Guitarra1-2.webp"
    },
    {
      nome: "Contrabaixo de 5 Cordas Squier Jazz Bass V Classic Vibe 70s",
      descricao: "Corpo feito em Soft Maple...",
      preco: 6990.00,
      imagem: "Produtos/Baixo1-1.webp"
  },
  ];

  const maisVendidos = [
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
  ];

  let produtosPesquisados = []; // Array para produtos pesquisados

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredDestaques = destaques.filter(produto =>
      produto.nome.toLowerCase().includes(searchTerm) ||
      produto.descricao.toLowerCase().includes(searchTerm)
    );
  
    const filteredMaisVendidos = maisVendidos.filter(produto =>
      produto.nome.toLowerCase().includes(searchTerm) ||
      produto.descricao.toLowerCase().includes(searchTerm)
    );
  
    displayProdutos(filteredDestaques, destaquesMesElement);
    displayProdutos(filteredMaisVendidos, maisVendidosElement);
  
    // Se a pesquisa estiver vazia, reexiba todos os produtos originais
    if (searchTerm === "") {
      displayProdutos(destaques, destaquesMesElement);
      displayProdutos(maisVendidos, maisVendidosElement);
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
  const destaquesMesElement = document.getElementById("destaques_mes");
  const maisVendidosElement = document.getElementById("mais_vendidos");

  displayProdutos(destaques.filter(produto => !produtosPesquisados.includes(produto)), destaquesMesElement);
  displayProdutos(maisVendidos.filter(produto => !produtosPesquisados.includes(produto)), maisVendidosElement);


});

  //Carrossel de imagens
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
  }


function arrumacarrossel() {
  plusSlides(-1)
}



function abrirnavlateral() {
    setTimeout(()=>{document.getElementById("lateralnav").style.width = "80vw";}, 240); 
}
  
/* Set the width of the side navigation to 0 */
function fecharnavlateral() {
    document.getElementById("lateralnav").style.width = "0";
}
