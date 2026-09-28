import { ServiceItem, GalleryItem, TestimonialItem, FaqItem } from '../types';

import portfolio01 from '../assets/images/portfolio_01.jpg';
import portfolio02 from '../assets/images/portfolio_02.jpg';
import portfolio03 from '../assets/images/portfolio_03.jpg';
import portfolio04 from '../assets/images/portfolio_04.jpg';
import portfolio05 from '../assets/images/portfolio_05.jpg';
import portfolio06 from '../assets/images/portfolio_06.jpg';
import portfolio07 from '../assets/images/portfolio_07.jpg';
import portfolio08 from '../assets/images/portfolio_08.jpg';
import portfolio09 from '../assets/images/portfolio_09.jpg';
import portfolio10 from '../assets/images/portfolio_10.jpg';
import portfolio11 from '../assets/images/portfolio_11.jpg';
import imgBridalPearls from '../assets/images/bridal_updo_pearls_1790221077209.jpg';
import imgBalayageHair from '../assets/images/balayage_wavy_hair_1790221087264.jpg';
import imgBrideVeil from '../assets/images/bride_veil_tiara_1790221097468.jpg';
import imgManicure from '../assets/images/manicure_pedicure_pink_1790221107591.jpg';

export const SALON_INFO = {
  name: 'Studio Éden Concept',
  tagline: 'Salão de Beleza VIP & Hair Concept',
  subtitle: 'Excelência em beleza, visagismo e atendimento VIP exclusivo em Maringá.',
  phone: '(44) 8852-5656',
  phoneRaw: '554488525656',
  address: {
    street: 'Av. Colombo, 7720',
    neighborhood: 'Zona 06',
    city: 'Maringá',
    state: 'PR',
    zip: '87080-190',
    full: 'Av. Colombo, 7720 - Zona 06, Maringá - PR, 87080-190'
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.%20Colombo%2C%207720%20-%20Zona%2006%2C%20Maring%C3%A1%20-%20PR%2C%2087080-190',
  instagram: '@studioedenconcept',
  hours: [
    { days: 'Segunda a Sábado', time: '09:00 às 18:00' },
    { days: 'Domingo', time: 'Fechado' },
    { days: 'Serviço Noturno VIP', time: 'Atendimento exclusivo mediante agendamento prévio' }
  ],
  rating: {
    score: '5,0',
    numericScore: 5,
    reviewsCount: 10,
    label: '10 avaliações no Google'
  },
  features: [
    'Ambiente VIP Climatizado e Privativo',
    'Localização Privilegiada e Fácil Acesso na Av. Colombo',
    'Produtos e Cosméticos Importados de Alta Performance',
    'Espaço Exclusivo para Noivas e Formandas',
    'Serviço Noturno com Hora Marcada',
    'Wi-Fi de Alta Velocidade e Café Gourmet'
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'escova',
    category: 'cabelos',
    title: 'Escova',
    tagline: 'Alinhamento com brilho e movimento natural',
    price: 'Orçamento',
    priceDetail: 'Consulte via WhatsApp para seu comprimento e volume',
    duration: '40 a 50 min',
    isPopular: true,
    description: 'Higienização capilar completa, aplicação de protetor térmico de alta performance e modelagem com escova profissional para fios alinhados, sedosos e com brilho.',
    includes: [
      'Lavagem relaxante no lavatório',
      'Proteção térmica avançada',
      'Finalização de pontas e brilho espelhado'
    ]
  },
  {
    id: 'escova-cacheada-lisa-sem-custo',
    category: 'cabelos',
    title: 'Escova cacheada/lisa Sem custo',
    tagline: 'Liberdade de escolha entre acabamento liso ou cachos sem taxa extra',
    price: 'Orçamento',
    duration: '45 min',
    isPopular: true,
    description: 'Nossa assinatura de transparência: escolha entre o efeito liso polido ou cachos e ondas modeladas sem cobrança adicional pelo tipo de finalização.',
    includes: [
      'Higienização com produtos de alta nutrição',
      'Proteção térmica e selagem',
      'Opção de modelagem em cachos, ondas ou liso sem cobrança extra',
      'Finalizador anti-frizz'
    ]
  },
  {
    id: 'corte-de-cabelo',
    category: 'cabelos',
    title: 'Corte de cabelo',
    tagline: 'Design personalizado e valorização da harmonia facial',
    price: 'Orçamento',
    priceDetail: 'Diagnóstico e personalização de estilo',
    duration: '50 min',
    isPopular: true,
    description: 'Corte anatômico feminino com estudo de visagismo, corte bordado ou camadas, respeitando a sua textura natural e formato de rosto.',
    includes: [
      'Avaliação visagista prévia',
      'Lavagem e higienização dos fios',
      'Corte de precisão ou camadas',
      'Secagem e orientação de manutenção'
    ]
  },
  {
    id: 'penteados',
    category: 'penteados',
    title: 'Penteados',
    tagline: 'Criações exclusivas para noivas, madrinhas, formandas e convidadas',
    price: 'Orçamento',
    priceDetail: 'Fixação de alta durabilidade e acabamento refinado',
    duration: '1h a 2h',
    isPopular: true,
    description: 'Penteados clássicos, despojados, semi-presos, tranças estilizadas e coques nobres. Preparação com fixadores importados para durar toda a festa.',
    includes: [
      'Preparação da estrutura e volume dos fios',
      'Fixação de acessórios, tiaras e joias de cabelo',
      'Resistência à umidade e alta durabilidade',
      'Finalização impecável em espelho cênico'
    ]
  },
  {
    id: 'maquiagem',
    category: 'maquiagem',
    title: 'Maquiagem',
    tagline: 'Realce da sua beleza natural com sofisticação',
    price: 'Orçamento',
    priceDetail: 'Técnica personalizada para seu estilo e tom de pele',
    duration: '50 min a 1h',
    isPopular: true,
    description: 'Maquiagem com produtos de alta definição que valorizam os seus traços naturais com leveza e acabamento elegante.',
    includes: [
      'Hidratação e preparação prévia da pele',
      'Correção e uniformização de tom',
      'Harmonia de cores para dia ou noite'
    ]
  },
  {
    id: 'servico-de-maquiagem',
    category: 'maquiagem',
    title: 'Serviço de maquiagem',
    tagline: 'Produção profissional completa com técnica de longa duração',
    price: 'Orçamento',
    priceDetail: 'Ideal para eventos, formaturas, fotos e ocasiões especiais',
    duration: '1h a 1h 30 min',
    isPopular: true,
    description: 'Serviço completo de maquiagem profissional com técnica blindada para alta resistência a lágrimas e calor, acabamento acetinado e cílios postiços.',
    includes: [
      'Limpeza de pele e primer de longa fixação',
      'Pele blindada de alta resistência fotográfica',
      'Olhos esfumados e contorno refinado',
      'Aplicação de cílios postiços'
    ]
  },
  {
    id: 'servico-noturno',
    category: 'vip',
    title: 'Serviço noturno',
    tagline: 'Atendimento exclusivo das 19:30 às 23:00 com hora marcada',
    price: 'Orçamento',
    priceDetail: 'Exclusividade para quem tem agenda cheia no horário comercial',
    duration: 'Flexível',
    isVip: true,
    isPopular: true,
    description: 'Horário diferenciado e personalizado no Studio Éden Concept para clientes que necessitam de atendimento após o expediente comercial, em ambiente privativo.',
    includes: [
      'Lounge exclusivo com privacidade total',
      'Atendimento com hora marcada até às 23h',
      'Café gourmet ou espumante cortesia',
      'Fácil acesso na Av. Colombo'
    ]
  },
  {
    id: 'shampoo-e-condicionador',
    category: 'cabelos',
    title: 'Shampoo e condicionador',
    tagline: 'Tratamento e higienização com produtos de alta tecnologia cosmética',
    price: 'Orçamento',
    priceDetail: 'Reposição lipídica, nutrição e hidratação profunda',
    duration: '40 min',
    description: 'Lavagem terapêutica no lavatório com shampoos e condicionadores profissionais selecionados para a necessidade específica do seu couro cabeludo e haste capilar.',
    includes: [
      'Diagnóstico da fibra capilar',
      'Lavagem suave e relaxante',
      'Condicionamento com selagem de cutículas e pH equilibrado',
      'Aplicação de leave-in protetor'
    ]
  },
  {
    id: 'salao-de-beleza-vip',
    category: 'vip',
    title: 'Salão de beleza VIP',
    tagline: 'A experiência completa de cuidado, conforto e privacidade',
    price: 'Orçamento',
    priceDetail: 'Pacotes personalizados para Dia da Noiva e celebrações',
    duration: 'Personalizado',
    isVip: true,
    isPopular: true,
    description: 'Atendimento premium no Studio Éden Concept com acesso ao lounge VIP, consultoria de beleza dedicada, ambiente climatizado e privacidade absoluta.',
    includes: [
      'Espaço privativo com luz natural e poltronas confortáveis',
      'Consultoria individual com nossa equipe de especialistas',
      'Combinação de serviços sob medida para sua data especial',
      'Serviço de café gourmet, água aromatizada e espumante'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'portfolio-01',
    title: 'Produção de Cabelo & Maquiagem',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: portfolio01,
    caption: 'Produção do portfólio Studio Éden Concept.',
    tags: ['Cabelo', 'Maquiagem']
  },
  {
    id: 'portfolio-02',
    title: 'Produção de Noiva com Tiara',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: portfolio02,
    caption: 'Produção de noiva do Studio Éden Concept.',
    tags: ['Noiva', 'Tiara']
  },
  {
    id: 'portfolio-03',
    title: 'Cabelo Longo com Ondas',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: portfolio03,
    caption: 'Finalização com ondas do portfólio Studio Éden Concept.',
    tags: ['Cabelo', 'Ondas']
  },
  {
    id: 'portfolio-04',
    title: 'Manicure em Tom Vinho',
    category: 'unhas',
    categoryLabel: 'Unhas & Spa',
    imageUrl: portfolio04,
    caption: 'Produção de manicure do portfólio Studio Éden Concept.',
    tags: ['Manicure', 'Unhas']
  },
  {
    id: 'portfolio-05',
    title: 'Manicure em Tom Marsala',
    category: 'unhas',
    categoryLabel: 'Unhas & Spa',
    imageUrl: portfolio05,
    caption: 'Produção de manicure do portfólio Studio Éden Concept.',
    tags: ['Manicure', 'Unhas']
  },
  {
    id: 'portfolio-06',
    title: 'Mechas Loiras com Ondas',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: portfolio06,
    caption: 'Resultado de cabelo do portfólio Studio Éden Concept.',
    tags: ['Mechas', 'Ondas']
  },
  {
    id: 'portfolio-07',
    title: 'Morena Iluminada com Ondas',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: portfolio07,
    caption: 'Resultado de cabelo do portfólio Studio Éden Concept.',
    tags: ['Morena Iluminada', 'Ondas']
  },
  {
    id: 'portfolio-08',
    title: 'Produção de Noiva',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: portfolio08,
    caption: 'Produção de noiva do portfólio Studio Éden Concept.',
    tags: ['Noiva', 'Penteado']
  },
  {
    id: 'portfolio-09',
    title: 'Produção com Tiara',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: portfolio09,
    caption: 'Produção do portfólio Studio Éden Concept.',
    tags: ['Tiara', 'Maquiagem']
  },
  {
    id: 'portfolio-10',
    title: 'Produção de Maquiagem',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: portfolio10,
    caption: 'Produção do portfólio Studio Éden Concept.',
    tags: ['Maquiagem', 'Produção']
  },
  {
    id: 'portfolio-11',
    title: 'Mechas Loiras & Finalização',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: portfolio11,
    caption: 'Resultado de cabelo do portfólio Studio Éden Concept.',
    tags: ['Mechas Loiras', 'Finalização']
  },
  {
    id: 'gal-noiva-perolas',
    title: 'Noiva Impecável com Joias de Pérolas',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: imgBridalPearls,
    caption: 'Coque baixo deslumbrante com arranjo floral de cristais e colar de pérolas drapeado nas costas.',
    tags: ['Dia da Noiva', 'Penteado', 'Pérolas', 'VIP']
  },
  {
    id: 'gal-balayage-ondas',
    title: 'Cabelo Longo Balayage & Escova Modelada',
    category: 'cabelos',
    categoryLabel: 'Cabelos & Escova',
    imageUrl: imgBalayageHair,
    caption: 'Tons quentes de mel e caramelo com escova em ondas fluidas e acabamento sedoso de alto brilho.',
    tags: ['Balayage', 'Escova Modelada', 'Corte Feminino', 'Brilho']
  },
  {
    id: 'gal-noiva-veu',
    title: 'Noiva Clássica com Tiara de Brilhantes e Véu',
    category: 'noivas',
    categoryLabel: 'Noivas & Penteados',
    imageUrl: imgBrideVeil,
    caption: 'Maquiagem blindada glow e penteado semi-preso coroado com tiara real e véu em tule francês.',
    tags: ['Noiva', 'Maquiagem HD', 'Tiara', 'Véu']
  },
  {
    id: 'gal-unhas-spa',
    title: 'Nail Spa & Manicure Rosa Suave',
    category: 'unhas',
    categoryLabel: 'Unhas & Spa',
    imageUrl: imgManicure,
    caption: 'Unhas das mãos e pés perfeitamente esmaltadas em tom rosa quartzo pastel com cuticulagem russa.',
    tags: ['Manicure', 'Pedicure', 'Unhas de Noiva', 'Spa']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'mariene freitas',
    role: '',
    location: '',
    rating: 5,
    date: '2 meses atrás',
    serviceUsed: '',
    comment: 'Maravilhosa, amo esse salão e as pessoas que trabalham lá , todas são maravilhosas atendem muito bem.'
  },
  {
    id: 'dep-2',
    name: 'Jaqueline Pimenta',
    role: '',
    location: '',
    rating: 5,
    date: '2 meses atrás',
    serviceUsed: '',
    comment: 'Primeira vez que estive no salão e me surpreendi. Nota 10 em tudo ….Meu cabelo ficou maravilhoso!\nForam super atenciosos comigo e com a minha mãe. Com certeza voltarei e já indiquei minhas amigas.'
  },
  {
    id: 'dep-3',
    name: 'TELMA REGINA RIBEIRO TEIXEIRA',
    role: '',
    location: '',
    rating: 5,
    date: '2 meses atrás',
    serviceUsed: '',
    comment: 'lugar lindo, pessoal bem legal e atencioso 💗'
  },
  {
    id: 'dep-4',
    name: 'Bárbara Brandão',
    role: '',
    location: '',
    rating: 5,
    date: '2 meses atrás',
    serviceUsed: '',
    comment: 'Melhor salão de Maringá e região, indico de olho fechado, profissionais maravilhosas, queria ressaltar o trabalho da Bianca e da Angélica que me deixaram mais linda e tiveram todo um cuidado comigo que nunca tive em nenhum salão, não vejo a hora de voltar de novo.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o Serviço Noturno VIP do Studio Éden Concept?',
    answer: 'O Serviço Noturno foi criado para quem possui agenda intensa durante o horário comercial. Atendemos das 19:30 às 23:00 exclusivamente mediante agendamento prévio. O salão fica com acesso reservado, proporcionando máxima privacidade, comodidade e tranquilidade com atendimento individualizado.',
    category: 'Atendimento VIP'
  },
  {
    id: 'faq-2',
    question: 'A escova cacheada ou lisa tem custo adicional na finalização?',
    answer: 'Não! No Studio Éden Concept prezamos pela transparência: você escolhe se deseja o acabamento liso acetinado ou ondas/cachos modelados sem nenhum acréscimo no valor. O serviço já contempla lavagem com produtos de alta nutrição e proteção térmica.',
    category: 'Serviços'
  },
  {
    id: 'faq-3',
    question: 'Como faço para agendar um horário ou o Dia da Noiva?',
    answer: 'O agendamento pode ser feito de forma rápida diretamente pelo nosso WhatsApp oficial (44) 8852-5656 ou preenchendo o formulário em nosso site. Para noivas e formandas, recomendamos antecedência de pelo menos 30 a 60 dias para reservar datas nobres e agendar o teste.',
    category: 'Agendamento'
  },
  {
    id: 'faq-4',
    question: 'Onde o salão está localizado e como chegar?',
    answer: 'Estamos localizados na Av. Colombo, 7720 - Zona 06, Maringá - PR, 87080-190, uma das avenidas mais acessíveis e nobres da cidade, com chegada prática e rápida a partir de qualquer região.',
    category: 'Localização'
  },
  {
    id: 'faq-5',
    question: 'Quais marcas e linhas de produtos são utilizadas nos tratamentos?',
    answer: 'Trabalhamos exclusivamente com cosméticos profissionais importados e nacionais de primeira linha (marcas consagradas de alta tecnologia capilar e maquiagem profissional hipoalergênica com durabilidade HD).',
    category: 'Produtos'
  },
  {
    id: 'faq-6',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix (com confirmação instantânea), cartões de crédito e débito (com opção de parcelamento para pacotes de noiva e combos VIP), além de dinheiro em espécie.',
    category: 'Pagamento'
  }
];

export const AMENITIES = [
  {
    title: 'Lounge VIP Exclusivo',
    desc: 'Ambiente com luz natural, poltronas confortáveis e decoração clean minimalista.'
  },
  {
    title: 'Localização Privilegiada',
    desc: 'Fácil acesso na Av. Colombo, Zona 06 de Maringá, rápida e prática para chegar.'
  },
  {
    title: 'Café Gourmet & Espumante',
    desc: 'Deguste cafés especiais, chás selecionados ou espumante gelado durante seu atendimento.'
  },
  {
    title: 'Suíte para Noivas',
    desc: 'Espaço reservado com iluminação cênica para ensaios fotográficos do making of.'
  },
  {
    title: 'Climatização & Wi-Fi',
    desc: 'Ambiente refrigerado e internet de alta velocidade para você trabalhar ou relaxar.'
  },
  {
    title: 'Atendimento Noturno',
    desc: 'Horários flexíveis até às 23h sob agendamento para quem tem dias corridos.'
  }
];
