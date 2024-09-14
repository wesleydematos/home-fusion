import market from "@/images/market.png";
import price from "@/images/price.png";
import strategy from "@/images/strategy.png";

const steps = [
  {
    step: "Passo 1",
    title: "Defina sua estratégia",
    description:
      "Defina a melhor abordagem para a sua busca: quer comprar, investir ou revender? Cada estratégia otimiza os resultados para seu objetivo.",
    image: strategy,
  },
  {
    step: "Passo 2",
    title: "Escolha o Mercado",
    description:
      "Selecione a cidade onde deseja buscar imóveis. Você pode navegar no mapa ou digitar o nome da cidade na barra de pesquisa.",
    image: market,
  },
  {
    step: "Passo 3",
    title: "Defina a Faixa de Preço",
    description:
      "Ajuste o intervalo de preços para visualizar imóveis que cabem no seu orçamento. Use o slider para definir os valores.",
    image: price,
  },
];

export default steps;
