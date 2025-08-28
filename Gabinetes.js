const gabinetes = [
    {
      id: 1,
      nome: "Gabinete Gamer Corsair 3000D RGB Airflow",
      marca: "Corsair",
      preco: 649.99,
      imagem: "imggabinete1.png"
    },
    {
      id: 2,
      nome: "Gabinete Gamer Hayom GBI749, Mid Tower",
      marca: "Hayom",
      preco: 189.99,
      imagem: "imggabinete2.png"
    },
    {
      id: 3,
      nome: "Gabinete Gamer Rise Mode Galaxy Glass",
      marca: "Rise",
      preco: 549.99,
      imagem: "imggabinete3.png"
    },
    {
      id: 4,
      nome: "Gabinete Gamer Neologic Aquario Full Glass",
      marca: "Neologic",
      preco: 549.99,
      imagem: "imggabinete4.png"
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
  
    let filtrados = gabinetes;
  
    if (marcaSelecionada !== "todas") {
      filtrados = filtrados.filter(p => p.marca === marcaSelecionada);
    }
  
    if (!isNaN(precoMax)) {
      filtrados = filtrados.filter(p => p.preco <= precoMax);
    }
  
    exibirProdutos(filtrados);
  }
  
  function adicionarAoCarrinho(id) {
    const produto = gabinetes.find(p => p.id === id);
    alert(`"${produto.nome}" adicionado ao carrinho!`);
  }
  
  exibirProdutos(gabinetes);
  