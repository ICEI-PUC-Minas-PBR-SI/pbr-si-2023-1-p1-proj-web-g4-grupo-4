const ongs = [
    {
      key: "P1",
      name: "INSTITUTO ADOTAR",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Crianças",
      path: "imgs/img_instituto_adotar.jpg",
      site: "/ONGs/P1.html",
    },
    {
      key: "pageone",
      name: "ONG AMIGOS DE MINAS",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Crianças",
      path: "/ONGs/imgs/ong amigos de minas.jpeg",
      site: "/ONGs/pageone.html",
    },
    {
      key: "P2",
      name: "ABRIGO DE CRIANÇAS E ADOLESCENTES LAR MARISTA JOÃO BATISTA",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Crianças",
      path: "imgs/img_ong_2.webp",
      site: "/ONGs/P2.html",
    },
    {
      key: "P3",
      name: "TJ CRIANÇA ABRIGA",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Crianças",
      path: "imgs/P3.jpeg",
      site: "/ONGs/P3.html",
    },
    {
      key: "P4",
      name: "CASA LUCAS",
      tags: ["dinheiro", "alimentos", "brinquedo"],
      page: "Cat_Crianças",
      path: "imgs/P4.jpeg",
      site: "/ONGs/P4.html",
    },
    {
      key: "P5",
      name: "FAZENDA RENASCER",
      tags: ["Produto de Limpeza", "alimentos", "dinheiro"],
      page: "Cat_DependentesQuimicos",
      path: "imgs2/renascer.png",
      site: "/ONGs/P5.html",
    },
    {
      key: "P6",
      name: "INSTITUTO ASSISTENCIAL ESPÍRITA ANDRÉ LUIZ",
      tags: ["dinheiro", "alimentos", "roupa"],
      page: "Cat_DependentesQuimicos",
      path: "imgs/P6.jpeg",
      site: "/ONGs/P6.html",
    },
    {
      key: "P7",
      name: "CREDEQ - CENTRO DE RECUPERAÇÃO DA DEPENDÊNCIA QUÍMICA",
      tags: ["dinheiro", "alimentos", "roupa"],
      page: "Cat_DependentesQuimicos",
      path: "P7.jpeg",
      site: "/ONGs/P7.html",
    },
    {
      key: "P8",
      name: "GRUPO FAMILIAR TEMPO DE DESPERTAR AL-ANON",
      tags: ["Higiene pessoal", "alimentos", "roupa"],
      page: "Cat_DependentesQuimicos",
      path: "P8.jpeg",
      site: "/ONGs/P8.html",
    },
    {
      key: "P9",
      name: "CAPEC",
      tags: ["Higiene pessoal", "alimentos", "roupa"],
      page: "Cat_Saúde",
      path: "P9.jpeg",
      site: "/ONGs/P9.html",
    },
    {
      key: "P10",
      name: "ASPEC",
      tags: ["Higiene pessoal", "alimentos", "roupa"],
      page: "Cat_Saúde",
      path: "P10.jpeg",
      site: "/ONGs/P10.html",
    },
    {
      key: "P11",
      name: "INSTITUTO CASA DO CAMINHO",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Saúde",
      path: "/src/ONGs/P11.jpeg",
      site: "/ONGs/P11.html",
    },
    {
      key: "P13",
      name: "LAR TERESA DE JESUS",
      tags: ["Fraldas", "alimentos", "brinquedo"],
      page: "Cat_Saúde",
      path: "imgs/P13.jpeg",
      site: "/ONGs/P13.html",
    },
    {
      key: "P14",
      name: "LAR DOS IDOSOS SÃO JOSÉ",
      tags: ["Debito em conta", "Debito Automatico"],
      page: "Cat_Idosos",
      path: "imgs/P14.jpeg",
      site: "/ONGs/P14.html",
    },
    {
      key: "P15",
      name: "AGAPÉ LAR DE IDOSOS",
      tags: ["Materiais de artesanato", "Transferencia Bancaria", "roupa"],
      page: "Cat_Idosos",
      path: "imgs/P15.jpeg",
      site: "/ONGs/P15.html",
    },
    {
      key: "P16",
      name: "OÁSIS CASA DE REPOUSO",
      tags: ["Produto de Limpeza", "alimentos", "roupa"],
      page: "Cat_Idosos",
      path: "imgs/P16.jpeg",
      site: "/ONGs/P16.html",
    },
    {
      key: "P17",
      name: "CASA DE REPOUSO CUIDANDO COM ALEGRIA",
      tags: ["roupa", "Utensílios Domésticos", "brinquedo"],
      page: "Cat_Idosos",
      path: "imgs/P17.jpeg",
      site: "/ONGs/P17.html",
    },
    {
      key: "P18",
      name: "AMDA - Associação Mineira de Defesa do Ambiente",
      tags: ["dinheiro", "Serviço voluntário"],
      page: "Cat_Meioambiente",
      path: "imgs/amda_ong18.jpg",
      site: "/ONGs/P18.html",
    },
    {
      key: "P19",
      name: "Associação dos Amigos do Meio Ambiente",
      tags: ["Objetos", "dinheiro", "Trabalho voluntário"],
      page: "Cat_Meioambiente",
      path: "imgs/P19.jpeg",
      site: "/ONGs/P19.html",
    },
    {
      key: "P20",
      name: "Projeto Social - Moradores de Rua e Seus Cães",
      tags: ["roupa", "alimentos", "dinheiro"],
      page: "Cat_Animais",
      path: "imgs2/P20.jpeg",
      site: "/ONGs/P20.html",
    },
    {
      key: "P21",
      name: "Entregando Amor",
      tags: ["roupa", "alimentos", "dinheiro"],
      page: "Cat_Animais",
      path: "imgs/P21.jpeg",
      site: "/ONGs/P21.html",
    },
    {
      key: "P22",
      name: "Grupo Patinhas Uai",
      tags: ["dinheiro", "alimentos", "brinquedo"],
      page: "Cat_Animais",
      path: "imgs/P22.jpeg",
      site: "/ONGs/P22.html",
    },
    {
      key: "P23",
      name: "Adote um Pitbull",
      tags: ["roupa", "alimentos", "brinquedo"],
      page: "Cat_Animais",
      path: "imgs/P23.jpeg",
      site: "/ONGs/P23.html",
    },
    {
      key: "P24",
      name: "SOS Gatinhos do Parque",
      tags: ["dinheiro", "alimentos", "brinquedo"],
      page: "Cat_Animais",
      path: "imgs/P24.jpeg",
      site: "/ONGs/P24.html",
    },
  ];
  
  greetings = () => {
    const path = window.location.pathname.split("/").pop().split(".")[0];
  
    const allCheckBoxesNodes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
  
    const all_checkboxes = [...allCheckBoxesNodes].map(({ value }) => value);
  
    console.log("all_checkboxes ==> ", all_checkboxes);
  
    const filteredOngs = ongs.filter(({ page }) => page === path);
  
    const matchingObject = filteredOngs.filter((ong) =>
      all_checkboxes.some((tag) => ong.tags.includes(tag))
    );
  
    matchingObject.forEach((element) => {
      document.getElementById(
        "ongs-filter"
      ).innerHTML += `<div href="#" class="instcard card mt-5 mx-auto" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${element.key}" class="img-fluid mt-1 rounded-start" alt="...">
        </div>
        <div class="col-md-8 btn-primary">
          <div class="card-body ">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text text-body-secondary">${element.path}</p>
            <a href="/ONGs/${element.key}.html" class="btn btn-primary"
              style="background-color: rgb(87, 177, 177); border-color: transparent; font-weight: 800;">Detalhes</a>
            <div id="cardbtn">
              <a href="#"><i class="text-end link-secondary fa-regular fa-bookmark"></i></a> <a href="#"><i
                  class="link-secondary fa-solid fa-share-nodes"></i></a> <a href="#"><i
                  class="link-secondary fa-solid fa-ellipsis-vertical"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      // here result is the id of the div present in the DOM
    });
  
    console.log(matchingObject);
  };
  