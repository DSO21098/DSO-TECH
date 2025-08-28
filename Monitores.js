const produtos = [
  {
    id: 1,
    nome: "Monitor Gamer Curvo AOC Agon 31.5”",
    marca: "AOC",
    preco: 1399.99,
    imagem: "imagens/imgmonitor1.png"
  },
  {
    id: 2,
    nome: 'Monitor Gamer AOC 24" FHD',
    marca: "AOC",
    preco: 899.99,
    imagem: "imagens/imgmonitor2.png"
  },
  {
    id: 3,
    nome: 'Monitor Gamer Curvo LG UltraGear LG 34"',
    marca: "LG",
    preco: 1999.99,
    imagem: "imagens/imgmonitor3.png"
  }
];

  
  const lista = document.getElementById("lista-produtos");
  
  function exibirProdutos(filtrados) {
    lista.innerHTML = "";
  
    if (filtrados.length === 0) {
      lista.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }
  
    filtrados.forEach(produto => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <p class="descricao">${produto.nome}</p>
        <p class="preco">R$${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
      `;
      lista.appendChild(div);
    });
  }
  
  function filtrarProdutos() {
    const marcaSelecionada = document.getElementById("filtro-marca").value;
    const precoMax = parseFloat(document.getElementById("filtro-preco").value);
  
    let filtrados = produtos;
  
    if (marcaSelecionada !== "todas") {
      filtrados = filtrados.filter(p => p.marca === marcaSelecionada);
    }
  
    if (!isNaN(precoMax)) {
      filtrados = filtrados.filter(p => p.preco <= precoMax);
    }
  
    exibirProdutos(filtrados);
  }
  
  function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    alert(`"${produto.nome}" adicionado ao carrinho!`);
  }
  
  
  exibirProdutos(produtos);
  