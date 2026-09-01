/* ============================================================================
   CB00 MARKETING · SpeedMax Racing Experience (operação: VTurismo)
   ---------------------------------------------------------------------------
   ESTE É O ARQUIVO DE CONTEÚDO. A equipe VTurismo atualiza o app editando
   apenas este arquivo (e fazendo git push). Nada aqui exige mexer no index.html.
   Dicas:
   - Textos aceitam HTML simples (<b>, <br>).
   - Horários no formato 'HH:MM' (hora local de Las Vegas).
   - Para esconder um módulo inteiro, mude para false em CONFIG.modulos.
   ========================================================================== */

const CONFIG = {
  projeto: 'SpeedMax Racing Experience',
  subtitulo: 'NASCAR Las Vegas Weekend 2026',
  assinatura: 'Experiência oficial CB00 Marketing',
  cidade: 'Las Vegas',
  periodo: '01 a 06 de outubro de 2026',
  inicioViagem: '2026-10-01T21:00:00-03:00',   // usado no contador regressivo — embarque (noite de qui 01/10, horário de Brasília)
  whatsappConcierge: '5521981155451',            // WhatsApp VTurismo (só números, com DDI)
  grupoWhatsapp: 'https://chat.whatsapp.com/JGUK0ZzDoWo0hG2weiqZqg', // link de convite do grupo do WhatsApp da viagem — deixe vazio para esconder o botão
  telefoneEmergenciaVT: '+55 21 98115-5451',
  coordenador: { nome: 'Vinicius Lyrio — VTurismo', fone: '+55 21 98115-5451', obs: 'Coordenador do grupo, à disposição durante toda a experiência.' },
  responsavelSpeedMax: { nome: 'Responsável SpeedMax', fone: 'a confirmar', obs: 'Contato institucional SpeedMax durante a viagem.' },
  // mostrar/esconder módulos do app:
  modulos: { agenda:true, resumo:true, comunicados:true, concierge:true, hospedagem:true, transportes:true, guia:true, raceday:true, docs:true, emergencia:true },
};

/* ============ CURIOSIDADES (contagem regressiva antes da viagem) =========
   Exibidas em rodízio diário na Home, enquanto a viagem não começa —
   no lugar do card de comunicado urgente (que só faz sentido durante a
   viagem). Depois do embarque, a Home volta a mostrar o comunicado.        */
const CURIOSIDADES = [
  { titulo:'Por que "Sin City"? 🎲', texto:'Las Vegas nasceu oficialmente em 1905, mas só virou o que é depois que Nevada legalizou os cassinos em 1931 — em plena Grande Depressão, como forma de gerar receita para o estado.' },
  { titulo:'A era da máfia 🕴️', texto:'Nos anos 1940-60, cassinos icônicos como o Flamingo (erguido pelo mafioso Bugsy Siegel) e o Desert Inn foram financiados por dinheiro do crime organizado — a "limpeza" da cidade só começou nos anos 1980, com a chegada de grandes corporações.' },
  { titulo:'A casa sempre vence 🃏', texto:'Todo jogo de cassino tem uma vantagem matemática embutida para a casa, chamada "house edge" — no blackjack ela pode cair para menos de 1% jogando bem, mas no caça-níqueis costuma passar de 5%.' },
  { titulo:'A Strip não fica em Las Vegas 🛣️', texto:'A famosa Las Vegas Strip, com a maioria dos megarresorts, está tecnicamente fora dos limites da cidade — fica em uma área não incorporada do condado de Clark, criada assim de propósito para escapar de impostos e leis mais rígidas da cidade.' },
  { titulo:'O Speedway 🏁', texto:'O Las Vegas Motor Speedway, palco da South Point 400, tem um oval de 1,5 milha construído em 1996 — sua configuração de curvas com inclinação progressiva (10° a 20°) é considerada uma das mais desafiadoras da NASCAR Cup Series.' },
  { titulo:'Pit stop relâmpago 🔧', texto:'Um pit stop de elite na NASCAR troca 4 pneus e reabastece o carro em menos de 10 segundos — mais rápido que a maioria das pessoas troca um pneu furado no acostamento.' },
  { titulo:'De onde vem "NASCAR" 🏎️', texto:'A sigla significa National Association for Stock Car Auto Racing, fundada em 1948 na Flórida por Bill France Sr. — os "stock cars" eram originalmente carros de rua modificados, muitos usados por contrabandistas de bebida na época da Lei Seca.' },
  { titulo:'Playoffs de alta pressão 🏆', texto:'A South Point 400 costuma ser uma das etapas decisivas dos Playoffs da NASCAR Cup Series — corridas nessa fase eliminam pilotos a cada rodada, tornando cada largada em Las Vegas praticamente uma final antecipada.' },
  { titulo:'A cidade que nunca dorme de verdade 🕐', texto:'Las Vegas é uma das poucas cidades do mundo sem lei de "last call" — bares e cassinos podem servir álcool 24 horas por dia, todos os dias do ano.' },
  { titulo:'Luzes que se veem do espaço 💡', texto:'O brilho da Strip é tão intenso que astronautas relatam conseguir identificar Las Vegas à noite direto da Estação Espacial Internacional, mesmo entre outras cidades americanas.' },
];

/* ============================ COMUNICADOS =================================
   Mais recente primeiro é indiferente — o app ordena por data/hora (desc).
   urgente:true destaca em dourado no topo e vira banner na Home.           */
const COMUNICADOS = [
  { data:'2026-10-01', hora:'09:00', titulo:'Bem-vindos à SpeedMax Racing Experience',
    texto:'Sua jornada em Las Vegas foi cuidadosamente planejada pela <b>CB00 Marketing</b>, com operação e logística da VTurismo. Este app é a central oficial da viagem: programação, transfers, avisos e concierge — tudo em um só lugar. Qualquer necessidade, fale com o Concierge.',
    urgente:false },
  { data:'2026-10-01', hora:'10:00', titulo:'Documentos em mãos',
    texto:'Lembre-se de viajar com <b>passaporte</b> (validade mínima de 6 meses) e <b>visto americano</b> válidos. Recomendamos foto dos documentos no celular e uma cópia na bagagem de mão.',
    urgente:false },
  { data:'2026-10-02', hora:'15:00', titulo:'Welcome Dinner — dress code',
    texto:'Hoje, 20h00 — restaurante selecionado pelo concierge. Dress code: <b>esporte fino</b> (smart casual elegante). Ponto de encontro: lobby do Fontainebleau às 19h30.',
    urgente:true },
];

/* ============================ PROGRAMAÇÃO =================================
   dias[].itens[]: hora, titulo, local, endereco, dress, obs, mapa (busca no
   Google Maps), dur (minutos, p/ "adicionar ao calendário").
   cal: horário real do evento (mesmo valor de "hora", em HH:MM) — só itens
   com horário certo devem ter esse campo, senão o botão "Adicionar ao
   calendário" aparece com hora errada. tz: fuso do LOCAL do evento (não do
   fuso de quem está lendo) — default '-07:00' (Las Vegas). Só declare tz
   quando o evento acontece fora de Las Vegas (ex.: embarque em São Paulo
   '-03:00', escala em Dallas '-05:00').
   ordemHora: só para itens sem horário certo (ex. "horário a confirmar",
   "noite livre") — um horário aproximado (HH:MM) usado apenas para esse
   item aparecer como "próxima atividade" na Home. Não vira botão de
   calendário (isso continua sendo só o campo cal).                        */
const AGENDA = [
  { data:'2026-10-01', rotulo:'Qui · 01 out', tema:'Embarque', itens:[
    { hora:'19:00', titulo:'Check-in no aeroporto (GRU) ✈️', local:'Aeroporto Internacional de São Paulo/Guarulhos (GRU)', endereco:'Guarulhos, SP',
      dress:'Casual confortável', obs:'Recomendado chegar com 4h de antecedência ao voo AA 906 (23:15). O Cauã, da equipe VTurismo, aguarda o grupo no balcão de check-in da American Airlines para auxiliar no processo.', dur:0, cal:'19:00', tz:'-03:00' },
    { hora:'23:15', titulo:'Voo AA 906 — GRU → MIA ✈️', local:'Aeroporto de Guarulhos (GRU)', endereco:'Guarulhos, SP',
      dress:'—', obs:'American Airlines · saída 23:15 (01/10) · chegada em Miami 06:45 (02/10, horário local).', dur:0, cal:'23:15', tz:'-03:00' },
  ]},
  { data:'2026-10-02', rotulo:'Sex · 02 out', tema:'Chegada & Welcome', itens:[
    { hora:'09:55', titulo:'Voo AA 1173 — MIA → LAS ✈️', local:'Aeroporto de Miami (MIA)', endereco:'Miami, FL',
      dress:'—', obs:'American Airlines · conexão em Miami · saída 09:55 · chegada em Las Vegas 12:08 (horário local).', dur:0, cal:'12:08' },
    { hora:'12:08', titulo:'Chegada a Las Vegas ✈️', local:'Harry Reid International Airport (LAS)', endereco:'5757 Wayne Newton Blvd, Las Vegas, NV 89119',
      dress:'—', obs:'Recepção especial no desembarque, com o Vinicius (VTurismo) aguardando o grupo (Airport Meet & Greet), apoio de bagagens incluído.', dur:60, cal:'12:08' },
    { hora:'após a chegada', titulo:'Transfer In 🚐', local:'Aeroporto → Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Vans executivas com motorista · briefing de boas-vindas no trajeto (~15 min).', dur:30, cal:'13:00' },
    { hora:'16:00', titulo:'Check-in — Fontainebleau Las Vegas 🏨', local:'Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Check-in assistido pela equipe VTurismo · tempo livre para descanso.', dur:60, cal:'16:00' },
    { hora:'20:00', titulo:'Welcome Dinner 🍽', local:'Restaurante selecionado', endereco:'Las Vegas, NV',
      dress:'Esporte fino', obs:'Jantar de boas-vindas e integração do grupo. Encontro no lobby às 19h30.', dur:150, cal:'20:00' },
  ]},
  { data:'2026-10-03', rotulo:'Sáb · 03 out', tema:'Experiências Signature', itens:[
    { hora:'horário a confirmar', titulo:'Desert Off-Road Experience 🏜', local:'Deserto de Nevada (UTVs)', endereco:'Las Vegas, NV',
      dress:'Roupa confortável, tênis fechado, óculos de sol e protetor solar', obs:'Saída do hotel em veículos executivos · aventura em UTVs com operadores especializados. Horário de saída avisado pelo Vinicius no dia anterior.', dur:300, cal:'', ordemHora:'09:00',
      midia:[
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczPQGlahd0BdoqDj6kw5vxsTE-oqo2TQ7GWck1oRHDR4fPMm--uuaioIe2rKZ7hOjn36htebWUuEL-QoSuq_QfRXlvNgj-a2wUtg4F3yA62RWtrz1hg=w1200', legenda:'Desert Off-Road Experience' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczNADTXtgRpbOAr8xxGI9ahDlGagah7BMTkErsPh3KQIIQbdZ34Y15a4yluyrfG5mF9Y9QsQraIbCsM41Hw_odYO-mmIg2_4sC3IZKq-hcRuzxTIkBI=w1200', legenda:'Desert Off-Road Experience' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczMyepXY_Bsv83u-ZyTq9OCbjXg-nVEWN421goyMKIrssGQTaUjw8aRluAeNuGYTjppUCfnD8zmI99pKHUcFWqtd3SrA19Hr3zq7QusxnmO8ic5qYbg=w1200', legenda:'Desert Off-Road Experience' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczOtySZYkoRS3gu1puQQOf-s8gAV0Z3o3ojqAude5U-dgfE-Y1PICnE--l5frEhhfYC-iypsZLlYubrvyZyKvkHjhNNy9vL3VvHsGkBOuMjoyKd205E=w1200', legenda:'Desert Off-Road Experience' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczNkCK6P8c1i1Hqctoy-mbnCg6ILuH2JmQhdcfQ5uWENteEQcH8z_A3yMa9fd2Y5JHm7eE_vfw00mDunIUyeagmXrSW67y683M5PJVJoujJ6SeYgeB8=w1200', legenda:'Desert Off-Road Experience' },
      ] },
    { hora:'opcional', titulo:'Experiências Opcionais — Adrenaline Mountain 🎯', local:'Adrenaline Mountain', endereco:'Las Vegas, NV',
      dress:'Sapato fechado e documento de identidade com foto', obs:'Ainda no mesmo parque do Off-Road dá pra turbinar o dia com pacotes extras, pagos à parte: <b>Campo de tiro ao ar livre</b> — mais de 90 armas de fogo à sua escolha, de pistolas a metralhadoras alimentadas por fita e o sniper Barrett .50 cal, com instrutor individual em cada arma. <b>Equipamento pesado</b> — suba na cabine de uma escavadeira de verdade e esmague carros com controle hidráulico, sem experiência necessária. <b>Lança-chamas</b> — opere um lança-chamas real e solte rajadas de até 24 metros de fogo no deserto aberto. Não está incluído no pacote — fale com o concierge pra reservar com antecedência. <a href="https://wa.me/5521981155451?text=Ol%C3%A1!%20Sou%20do%20grupo%20SpeedMax%20Racing%20Experience%20e%20quero%20incluir%20uma%20experi%C3%AAncia%20opcional%20na%20Adrenaline%20Mountain%20(tiro%2C%20equipamento%20pesado%20ou%20lan%C3%A7a-chamas)." target="_blank" rel="noopener" style="color:var(--gold)">💬 Reservar com o concierge</a>', dur:60, cal:'', ordemHora:'12:15',
      midia:[
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczOCJzWBaI3KHDTLdwL9Rg4ujRLyBaae7_p2eNc2ZPAzyA8gsQiGtU3ZbKKIBkbP6hBVpxk-xeroqeZPPt68fpMhV_zN5vW0aSO_o7JreDsGOEnyGrM=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczPdp9CclKo7fq4Ojg7zh3HcVf1Go1Dd1lsUiKlp4uHzSC6LAE9uTlsa6H676HoOtQMmXd_WaBil-MUllLCFOZpOW7oUbf71TKjohjI3PdNK-5zhB68=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczPzANylhLsL2SbfB8qRcHFuRwfX57HVk6WQ0MtvOpJfzdPzMgBO1m9_QYxaWV4gva2wnFhXXJgawLmqqwAyUDPjte7NywGtJhfopYtJieabTR1PEiw=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczNklI9QHvuX3k3ECLszsheRz0PyQYXhMbZ350meRvD3eNrrzF_9mtcSx0qKNZTmBbBHK_9-onNEybRg3l6kyWnW_VKBbl51L4QWSsh6fwhb95bqGZI=w1200', legenda:'Adrenaline Mountain — lança-chamas' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczNXd_Ra5Pg7Y0Y0tWt7HKSptA8bG7CVZ_AIiUMzboa1Tw2gTBd46yJQu16htDpnOnsxIeioPFfLCpA_AbSKxtTZ1L4X_4q7LS8G0zxpR75k5yGgD_8=w1200', legenda:'Adrenaline Mountain — tiro' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczP8ab6NZjaA6nWkac1E27NuGVHOZZoqZl0wNXS8UbfSEA_UqDe6c4InuPxO4Rc0GXDb72aHlYWxKD38n3J79Md3-3sp2NxWvpDKPPPhLTBbSnHgZ1Q=w1200', legenda:'Adrenaline Mountain — tiro' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczP0jpWZd7NvQKLh9f6VJam5b_fFerWwBryO7uWpW3NLzCyNEvUEf0PYjdhzDFoLQ3Ey0KDwxQtMcRkD8DWqD8STOHmT62Wly5LfrTnGuhAM4Wdf9HY=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczM8GqdyNS_KXGF50l0Oh_levWpfmBCxKszcexLTXRG6INiLlF8ziparvB1UF3fis1Kob_pX4ufHVZ-TYJ2AWnpBGXC9Vbb4EDXbosg4icyxmkKs69M=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczO0stA7nqoi_Crrx_40Hi2FgNfoiHNdNrRIxW50sRCFzc3z_BDPq9swd2Smw4DwXkypLhDTE5lIQzdVqLcbqYjO4HG1xyQWjlNaJh3SpfMlvgxKYm8=w1200', legenda:'Adrenaline Mountain — opcionais' },
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczNkD-Yc3JR4Nnn-htPWZi6SlE86ioZZO1of46uigWXTPwOWG9iEdyTRQADWRkohlvu3JeP8E6pH4DOXdoMG1V7v9v2whqMXJP624svxtibTsLboeHw=w1200', legenda:'Adrenaline Mountain — opcionais' },
      ] },
    { hora:'após a atividade', titulo:'Almoço — incluído 🍽', local:'Restaurante selecionado', endereco:'Las Vegas, NV',
      dress:'Casual', obs:'Almoço estilo American Barbecue, incluído após o Off-Road.', dur:90, cal:'', ordemHora:'13:00' },
    { hora:'final de tarde/noite', titulo:'Tarde e noite livres 🌆', local:'Las Vegas, NV', endereco:'',
      dress:'Casual', obs:'Sem programação fixa — aproveite a Strip, cassinos ou reserve algo com o concierge.', dur:0, cal:'', ordemHora:'18:00',
      sugestao:'Aproveite para conhecer os cassinos icônicos da Strip e ver de perto o espetáculo das Fountains of Bellagio, a poucos minutos do hotel. Se quiser elevar a noite — um jantar especial, acesso vip a algum cassino ou balada — é só chamar o concierge.' },
  ]},
  { data:'2026-10-04', rotulo:'Dom · 04 out', tema:'🏁 NASCAR Race Day', itens:[
    { hora:'10:00', titulo:'Saída para o Speedway 🚐', local:'Lobby — Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'Casual (boné e protetor solar recomendados)', obs:'Race Day Transfer — saída pontual. Trajeto ~30 min até o Las Vegas Motor Speedway.', dur:60, cal:'10:00' },
    { hora:'11:00', titulo:'NASCAR Race Day — South Point 400 🏁', local:'Las Vegas Motor Speedway', endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
      dress:'Casual', obs:'Playoffs da NASCAR Cup Series · arquibancada Seção 2Q, em frente à linha de chegada, com Pre-Race Track Pass incluído · horário oficial da largada a confirmar pela NASCAR. Veja a área Race Day do app.', dur:420, cal:'11:00',
      midia:[
        { tipo:'foto', url:'https://www.lvms.com/images/dsc05613_1200x1000.jpg', legenda:'Pre-Race Track Pass — Las Vegas Motor Speedway' },
        { tipo:'video', id:'DQZ0IKKE2Y8', legenda:'South Point 400 — NASCAR em Las Vegas' },
      ] },
    { hora:'12:00', titulo:'Pausa para o almoço 🍽', local:'Las Vegas Motor Speedway', endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
      dress:'Casual', obs:'Aproveite a praça de alimentação dentro do Speedway — várias opções à sua escolha (almoço não incluído).', dur:90, cal:'12:00' },
    { hora:'noite', titulo:'Noite livre 🌆', local:'Las Vegas, NV', endereco:'',
      dress:'Casual', obs:'Sem programação fixa após a corrida — aproveite a Strip ou reserve algo com o concierge.', dur:0, cal:'', ordemHora:'19:00',
      sugestao:'Depois de um dia de corrida, vale relaxar: Fremont Street Experience, com o telão de LED gigante da Vegas antiga, ou uma volta no High Roller, a roda-gigante de 167 m com vista da Strip. O concierge organiza o transfer e reserva o horário pra você.' },
  ]},
  { data:'2026-10-05', rotulo:'Seg · 05 out', tema:'Outlet (opcional) & Michael Jackson ONE', itens:[
    { hora:'10:00', titulo:'Passeio opcional — Outlet 🛍', local:'Premium Outlets Las Vegas', endereco:'Las Vegas, NV',
      dress:'Casual', obs:'Passeio opcional, sob consulta — confirme interesse com o concierge. Horário aproximado das 10h às 15h.', dur:300, cal:'10:00' },
    { hora:'21:30', titulo:'Michael Jackson ONE · Cirque du Soleil 🎭', local:'Michael Jackson ONE Theatre — Mandalay Bay', endereco:'3950 Las Vegas Blvd S, Las Vegas, NV 89119',
      dress:'Esporte fino', obs:'Espetáculo do Cirque du Soleil em homenagem a Michael Jackson, no Mandalay Bay.', dur:100, cal:'21:30',
      midia:[
        { tipo:'foto', url:'https://lh3.googleusercontent.com/pw/AP1GczN8ImwEaCYVqhILm-NIEZUs-zvYgkwaIoiYTYTqrPSNJhYKtxcy0Mu8uidKMtqysPlHXHFkLUTAfx-R_9smXmEYoJeo-oQ16R-reYPLeMZX7l-08wM=w1200', legenda:'Michael Jackson ONE — Cirque du Soleil' },
        { tipo:'video', id:'6kLqvDj8wx4', legenda:'Michael Jackson ONE — trailer oficial' },
      ] },
  ]},
  { data:'2026-10-06', rotulo:'Ter · 06 out', tema:'Partida', itens:[
    { hora:'09:00', titulo:'Check-out 🧳', local:'Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Check-out assistido · guarda de bagagens até o transfer.', dur:60, cal:'09:00' },
    { hora:'09:30', titulo:'Transfer Out 🚐 ✈️', local:'Hotel → Harry Reid International Airport (LAS)', endereco:'5757 Wayne Newton Blvd, Las Vegas, NV 89119',
      dress:'—', obs:'Transfer executivo com apoio da equipe até o check-in — para o voo AA 1482 (12:41).', dur:60, cal:'09:30' },
    { hora:'12:41', titulo:'Voo AA 1482 — LAS → DFW ✈️', local:'Harry Reid International Airport (LAS)', endereco:'5757 Wayne Newton Blvd, Las Vegas, NV 89119',
      dress:'—', obs:'American Airlines · saída 12:41 · chegada em Dallas-Fort Worth 17:36 (horário local).', dur:0, cal:'12:41' },
    { hora:'20:50', titulo:'Voo AA 963 — DFW → GRU ✈️', local:'Aeroporto de Dallas-Fort Worth (DFW)', endereco:'Dallas, TX',
      dress:'—', obs:'American Airlines · saída 20:50 (06/10) · chegada em Guarulhos 09:00 (07/10, horário de Brasília).', dur:0, cal:'20:50', tz:'-05:00' },
    { hora:'—', titulo:'Retorno ao Brasil 🇧🇷', local:'—', endereco:'',
      dress:'—', obs:'Fim da SpeedMax Racing Experience. Até a próxima! 🏁', dur:0, cal:'' },
  ]},
];

/* ============================ RESUMO DA VIAGEM ============================ */
const RESUMO = {
  intro:'Tudo o que você precisa saber já está garantido — é só embarcar. Veja abaixo o que faz parte da sua SpeedMax Racing Experience.',
  incluido:[
    { icone:'✈️', titulo:'Aéreo internacional', texto:'Passagens ida e volta GRU ⇄ Las Vegas (via Miami/Dallas), American Airlines.' },
    { icone:'🚐', titulo:'Todos os transfers', texto:'Aeroporto ⇄ hotel e todos os deslocamentos da programação oficial, em veículos executivos.' },
    { icone:'🏨', titulo:'4 noites de hospedagem', texto:'Fontainebleau Las Vegas, o resort mais novo da Strip.' },
    { icone:'🍽', titulo:'Welcome Dinner', texto:'Jantar de boas-vindas e integração do grupo.' },
    { icone:'🏜', titulo:'Desert Off-Road Experience', texto:'Aventura em UTVs pelo deserto de Nevada, com almoço American Barbecue incluído.' },
    { icone:'🏁', titulo:'NASCAR Race Day — South Point 400', texto:'Pre-Race Track Pass + arquibancada Seção 2Q, em frente à linha de chegada.' },
    { icone:'🎭', titulo:'Michael Jackson ONE · Cirque du Soleil', texto:'Ingresso para o espetáculo no Mandalay Bay.' },
    { icone:'🛡', titulo:'Seguro viagem internacional', texto:'Cobertura para todo o período da experiência (01–06/10).' },
    { icone:'💬', titulo:'Concierge VTurismo 24h', texto:'Equipe acompanhando o grupo do início ao fim — qualquer necessidade, é só chamar.' },
  ],
  naoIncluido:[
    'Café da manhã do hotel (o Fontainebleau reúne mais de 30 opções de restaurantes e cafés)',
    'Almoço do dia do Race Day (praça de alimentação disponível dentro do Speedway)',
    'Passeio opcional ao Outlet (sob consulta com o concierge)',
    'Bebidas, refeições extras e despesas pessoais fora da programação',
    'Gorjetas (praxe nos EUA: 15–20%)',
  ],
  fechamento:'Qualquer extra que queira incluir na experiência — jantar especial, passeio, upgrade — o concierge VTurismo está à disposição para organizar.',
};

/* ============================ HOSPEDAGEM ================================= */
const HOTEL = {
  nome:'Fontainebleau Las Vegas', foto:'img/fontainebleau.jpg',
  endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109, EUA',
  fone:'+1 (702) 678-5000',
  checkin:'16h00 (02/10)', checkout:'09h00 (06/10)',
  wifi:'Cortesia nos quartos e áreas sociais — rede e senha informadas no check-in.',
  cafe:'Não incluso no plano padrão — o hotel reúne mais de 30 restaurantes e cafés (orientações com o concierge).',
  encontro:'Lobby principal, junto à recepção — ponto de encontro oficial do grupo para todas as saídas.',
  uteis:['O resort mais novo da Strip — 67 andares, spa premiado e cassino integrado.',
         'Guarde o cartão do quarto para circular nas áreas de hóspedes.',
         'Cofre no quarto para passaporte e valores.',
         'Gorjeta usual: US$ 2–5 por mala / serviço de quarto.'],
  compras:{
    titulo:'📦 Recebendo compras online no hotel',
    texto:'O Fontainebleau recebe encomendas e compras feitas pela internet através do Business Center (operado pela FedEx Office), dentro do próprio hotel.',
    passos:[
      'Endereço de entrega: seu nome completo (igual ao da reserva) + Fontainebleau Las Vegas — Business Center, 2777 S. Las Vegas Blvd., Las Vegas, NV 89109.',
      'Retirada: os pacotes ficam disponíveis no horário de funcionamento do Business Center — vale ligar antes para confirmar (+1 702-789-3027).',
      'Taxas: o hotel pode cobrar uma taxa de manuseio por volume recebido — confirme o valor direto com o Business Center antes de mandar a compra.',
    ],
  },
};

/* ============================ TRANSPORTES ================================
   carros[]: o "Ver meu carro" de cada transfer. A equipe atualiza na operação
   (placa, motorista, foto real do veículo e onde ele está estacionado).
   foto: arquivo em img/ (ideal: foto real do carro no dia) · apelido: opcional
   (ex.: 'Van 1') quando houver mais de um veículo.                          */
const TRANSPORTES = [
  { rotulo:'Transfer In', data:'Sex · 02 out', encontro:'Desembarque LAS — equipe com placa VTurismo', saida:'imediata após o desembarque',
    veiculo:'Vans executivas / SUV', resp:'Equipe VTurismo · Meet & Greet', obs:'Apoio com bagagens incluído. Trajeto ~15 min até o hotel.',
    carros:[
      { apelido:'Van 1', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Bolsão de vans executivas do desembarque LAS — a equipe conduz o grupo até o veículo', motorista:'a confirmar' },
      { apelido:'SUV', foto:'img/suv_suburban.jpg', modelo:'Chevrolet Suburban Executive', placa:'a confirmar',
        local:'Bolsão de vans executivas do desembarque LAS', motorista:'a confirmar' },
    ]},
  { rotulo:'Welcome Dinner', data:'Sex · 02 out', encontro:'Lobby do Fontainebleau · 19h30', saida:'19h40',
    veiculo:'Van executiva', resp:'Coordenador VTurismo', obs:'Retorno ao hotel após o jantar.',
    carros:[
      { foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet) — em frente ao lobby', motorista:'a confirmar' },
    ]},
  { rotulo:'Desert Off-Road', data:'Sáb · 03 out', encontro:'Lobby do Fontainebleau — horário avisado por Vinicius no dia anterior', saida:'a confirmar',
    veiculo:'Van executiva', resp:'Coordenador VTurismo', obs:'Levar óculos de sol, tênis fechado e protetor solar.',
    carros:[
      { foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet) — em frente ao lobby', motorista:'a confirmar' },
    ]},
  { rotulo:'Race Day Transfer — ida', data:'Dom · 04 out', encontro:'Lobby do Fontainebleau · 09h45', saida:'10h00 (pontual)',
    veiculo:'Vans executivas', resp:'Equipe VTurismo (acompanhamento integral)', obs:'~30 min até o Speedway. Saída pontual — trânsito intenso em dia de corrida.',
    carros:[
      { apelido:'Van 1', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet)', motorista:'a confirmar' },
      { apelido:'Van 2', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet)', motorista:'a confirmar' },
    ]},
  { rotulo:'Race Day Transfer — volta', data:'Dom · 04 out', encontro:'Ponto de encontro pós-corrida (ver área Race Day)', saida:'após a liberação do estacionamento',
    veiculo:'Vans executivas', resp:'Equipe VTurismo', obs:'Sequência: Speedway → jantar → bar selecionado → hotel.',
    carros:[
      { apelido:'Van 1', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Estacionamento reservado do Speedway — a equipe informa o setor/vaga no dia', motorista:'a confirmar' },
      { apelido:'Van 2', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Estacionamento reservado do Speedway — a equipe informa o setor/vaga no dia', motorista:'a confirmar' },
    ]},
  { rotulo:'City Tour — Dia livre', data:'Seg · 05 out', encontro:'Lobby do Fontainebleau · 09h15', saida:'09h30',
    veiculo:'Vans executivas', resp:'Coordenador VTurismo', obs:'Passeio da manhã pelos ícones da cidade. Tarde e noite livres — transfers pontuais a pedido, pelo concierge.',
    carros:[
      { apelido:'Van 1', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet)', motorista:'a confirmar' },
    ]},
  { rotulo:'Transfer Out', data:'Ter · 06 out', encontro:'Lobby do Fontainebleau · 09h15', saida:'09h30 — voo AA 1482 (12:41)',
    veiculo:'Vans executivas / SUV', resp:'Equipe VTurismo', obs:'Apoio até o check-in da companhia aérea.',
    carros:[
      { apelido:'Van 1', foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet)', motorista:'a confirmar' },
      { apelido:'SUV', foto:'img/suv_suburban.jpg', modelo:'Chevrolet Suburban Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet)', motorista:'a confirmar' },
    ]},
];

/* ============================ GUIA DE LAS VEGAS ========================== */
const GUIA = [
  { icone:'🍽', titulo:'Restaurantes recomendados', itens:[
    ['Carbone (ARIA)','Ítalo-americano icônico — reserva essencial.'],
    ['Delilah (Wynn)','Supper club glamouroso, jantar com música ao vivo.'],
    ['SW Steakhouse (Wynn)','Steakhouse clássica à beira do Lake of Dreams.'],
    ['Bazaar Meat (Sahara)','Carnes por José Andrés — experiência autoral.'],
    ['Mon Ami Gabi (Paris)','Bistrô com varanda de frente para as fontes do Bellagio.'] ]},
  { icone:'🛍', titulo:'Compras', itens:[
    ['Forum Shops (Caesars Palace)','Grifes em cenário romano — na própria Strip.'],
    ['Fashion Show Mall','Shopping completo em frente ao Wynn.'],
    ['Las Vegas North Premium Outlets','Outlets de marca — ótimo custo-benefício (~15 min).'] ]},
  { icone:'🎰', titulo:'Cassinos icônicos', itens:[
    ['Bellagio','Elegância clássica + as fontes dançantes.'],
    ['Caesars Palace','O cassino mais famoso do mundo.'],
    ['Wynn / Encore','Requinte cinco estrelas.'],
    ['The Venetian','Canais de Veneza cobertos, com gôndolas.'] ]},
  { icone:'🎡', titulo:'Atrações próximas', itens:[
    ['Sphere','O venue mais futurista do mundo — shows imersivos.'],
    ['Fountains of Bellagio','Espetáculo de águas gratuito, a cada 15–30 min.'],
    ['High Roller (LINQ)','Roda-gigante de 167 m com vista da Strip.'],
    ['Fremont Street Experience','A velha Vegas sob um telão de LED gigante.'],
    ['Welcome to Las Vegas Sign','O letreiro clássico — foto obrigatória.'] ]},
  { icone:'💡', titulo:'Dicas práticas', itens:[
    ['Clima em outubro','Seco e agradável: ~28 °C de dia, ~15 °C à noite. Leve um casaco leve para a noite e para os ambientes com ar-condicionado.'],
    ['Fuso horário','Las Vegas está 4 horas atrás de Brasília (UTC-7 em outubro).'],
    ['Gorjetas','15–20% em restaurantes · US$ 2–5 para valet, malas e housekeeping. Muitas contas já incluem "service charge" — confira antes.'],
    ['Como se locomover','O grupo tem transporte executivo em toda a programação. Nos tempos livres: Uber/Lyft (rápidos e seguros) ou monotrilho da Strip.'],
    ['Cuidados básicos','Hidrate-se (clima desértico) · cassinos e bares: apenas 21+, com documento · guarde o passaporte no cofre e circule com uma foto dele.'] ]},
  { icone:'🎲', titulo:'Manual Vegas — conduta & jogo', itens:[
    ['Vegas funciona 24h, mas seu corpo não','Durma quando der — o cassino não fecha, mas você precisa.'],
    ['Aposte o que você decidiu perder','Não o que sobrou. Defina um limite antes de entrar na mesa.'],
    ['Cassino é diversão, não plano de renda','Trate como entretenimento, não como investimento.'],
    ['Bebida liberada (e às vezes grátis) enquanto joga','Mas ritmo é tudo — hidrate-se entre uma e outra.'] ]},
  { icone:'🃏', titulo:'Manual Vegas — curiosidades', itens:[
    ['Gorjeta não é opcional nos EUA','15–20% é o padrão em praticamente tudo.'],
    ['"Jeitinho brasileiro" não existe por aqui','Regras são regras, filas são filas.'],
    ['Por que ninguém quer sua nota de US$ 50?','Vegas tem uma superstição enraizada de que nota de cinquenta dá azar. A lenda mais famosa remonta a Bugsy Siegel, o mafioso que ergueu o primeiro cassino do Strip (o Flamingo) e foi executado a tiros em 1947 — algumas versões dizem que ele só tinha notas de US$ 50 no bolso quando foi encontrado. Verdade ou lenda urbana? Ninguém sabe ao certo. Mas em Vegas, ninguém quer testar.'] ]},
  { icone:'🏛', titulo:'Manual Vegas — um pouco de história', itens:[
    ['Por que no meio do deserto?','Las Vegas nasceu como destino porque, em quase todo o país, jogo era proibido — exceto em Nevada.'],
    ['A era da máfia','Nos anos 40–60, a máfia de Nova York e Chicago construiu boa parte dos primeiros cassinos do Strip — inclusive o lendário Flamingo, erguido por Bugsy Siegel.'],
    ['A virada corporativa','A cidade só virou o destino corporativo/família que é hoje nos anos 90, quando grandes corporações compraram os cassinos.'],
    ['Pra quem quiser se aprofundar','O The Mob Museum, no centro histórico, é dedicado a essa era — vale a visita num tempo livre.'] ]},
];

/* ==================== RACE DAY | Presented by SpeedMax ================== */
const RACEDAY = {
  corrida:'South Point 400',
  serie:'NASCAR Cup Series · Playoffs — Round of 12',
  data:'Domingo, 04 de outubro de 2026',
  local:'Las Vegas Motor Speedway',
  endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
  horario:'Largada: horário oficial a confirmar pela NASCAR (historicamente início da tarde, horário local)',
  infoSpeedway:'Oval de 1,5 milha (2,4 km) ao norte da Strip, um dos complexos de motorsport mais completos dos EUA (1.200 acres). South Point 400: 267 voltas · 400,5 milhas — 5ª etapa do Chase (Playoffs), abrindo o Round of 12 da NASCAR Cup Series.',
  finaisSemana:[
    ['Sex 02/10','Chegada do paddock e desfile dos carros da Cup Series (hauler parade) — acesso público, boa oportunidade de fotos.'],
    ['Sáb 03/10','Treinos e classificação pela manhã · corrida da Xfinity/O\'Reilly Series à tarde (16h30).'],
    ['Dom 04/10','Portões abrem 10h · apresentação dos pilotos 13h50 · largada da South Point 400 às 14h30 (horário local).'],
  ],
  classificacaoNota:'Prévia do campeonato — posições podem mudar até outubro, já que a South Point 400 é a abertura do Round of 12 dos Playoffs.',
  classificacaoAtualizadaEm:'Atualizado após Richmond (ago/2026) — faltam 2 corridas da temporada regular antes do início dos Playoffs.',
  classificacao:[
    ['1','Denny Hamlin','#11 Toyota','969 pts · 4 vitórias'],
    ['2','Ryan Blaney','#12 Ford','854 pts · 2 vitórias'],
    ['3','Ty Gibbs','#54 Toyota','842 pts · 2 vitórias'],
    ['4','Tyler Reddick','#45 Toyota','831 pts · 5 vitórias'],
    ['5','Chase Briscoe','#19 Toyota','715 pts · 1 vitória'],
    ['6','Chase Elliott','#9 Chevrolet','695 pts · 2 vitórias'],
    ['7','Christopher Bell','#20 Toyota','695 pts'],
    ['8','Kyle Larson','#5 Chevrolet','660 pts'],
    ['9','Joey Logano','#22 Ford','659 pts · 2 vitórias'],
    ['10','Chris Buescher','#17 Ford','653 pts'],
  ],
  programacao:[
    ['10h00','Saída do hotel — Race Day Transfer (lobby 09h45, saída pontual)'],
    ['11h00','Chegada ao Speedway · acesso à arquibancada — Seção 2Q, em frente à linha de chegada'],
    ['—','Pre-Race Track Pass incluído — ingressos confirmados'],
    ['pós-corrida','Ponto de encontro: local a confirmar — a equipe VTurismo conduz o grupo às vans'],
    ['noite','Noite livre — sem programação fixa após a corrida'],
  ],
  comunicadoSpeedMax:'Bem-vindos ao Race Day. A SpeedMax preparou este dia para que vocês vivam de perto a energia da NASCAR em Las Vegas. Boa corrida! 🏁',
};

/* RACE DAY LIVE — atualização MANUAL pela equipe (até integração com API NASCAR).
   Edite os campos abaixo durante a corrida e faça git push; o app exibe na hora.
   flag: 'verde' | 'amarela' | 'vermelha' | 'branca' | 'quadriculada' | '—'    */
const RACE_LIVE = {
  ativo:true,                       // false esconde o painel ao vivo
  status:'Aguardando a largada',
  volta:'— / 267',
  lider:'—',
  flag:'—',
  atualizadoEm:'programação oficial será confirmada pela NASCAR',
  top5:[],                          // ex.: ['#5 K. Larson','#11 D. Hamlin',...]
  mudancas:[],                      // ex.: [{hora:'13h42', texto:'Larson assume a liderança na volta 87'}]
};

/* RACE INSIGHTS — áudios/vídeos/textos exclusivos.
   tipo: 'audio' | 'video' | 'texto' · src: preenchido automaticamente quando
   o Cacá ou o Vinicius sobem o áudio pela área restrita (#admin) — o campo
   aqui embaixo é só o texto padrão exibido antes do upload. key: identifica
   o momento da corrida na área restrita (não mude depois de já ter subido
   áudio para ele).                                                        */
const INSIGHTS = [
  { tipo:'texto', hora:'—', titulo:'Race Insights by Cacá Bueno', desc:'Durante o Race Day, o pentacampeão Cacá Bueno publica aqui áudios curtos explicando os momentos da corrida: largada, pit stops, bandeiras, estratégia de pneus e as últimas voltas. Fique de olho! 🎧', src:'' },
  { tipo:'audio', key:'largada', hora:'em breve', titulo:'A largada', desc:'O que observar nos primeiros metros da South Point 400.', src:'' },
  { tipo:'audio', key:'pitstop', hora:'em breve', titulo:'Pit stop & estratégia de pneus', desc:'Por que a troca de pneus decide corridas — o olhar de quem entende de borracha.', src:'' },
  { tipo:'audio', key:'bandeira', hora:'em breve', titulo:'Bandeira amarela', desc:'Como o caution muda tudo: reagrupamento, wave around e a corrida no pit lane.', src:'' },
  { tipo:'audio', key:'ultimas', hora:'em breve', titulo:'Últimas voltas', desc:'Overtime, pressão e o sprint final rumo à bandeira quadriculada.', src:'' },
];

/* ============================ ÁREA RESTRITA ================================
   admin: login completo (documentos por passageiro + áudios do Race Day).
   audioOnly: login simples do Cacá — só a tela de upload/gravação de áudio.
   As senhas NÃO ficam aqui — são criadas direto no Firebase Authentication.  */
const ACESSO_RESTRITO = {
  adminEmail: 'vinicius@vturismo.com.br',
  audioOnlyUsuario: 'Caca00',           // login simples do Cacá — vira e-mail interno automaticamente
  audioOnlyDominio: 'speedmax.app',     // domínio interno fictício, só para o login funcionar no Firebase
};

/* Config pública do Firebase (não é segredo) — a proteção real está no login
   (Authentication) e nas regras do Storage/Firestore no console.           */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAzNDtynNifnjltqvvBrbwmMuOi3Ws09Tc",
  authDomain: "speedmax-nascar-app.firebaseapp.com",
  projectId: "speedmax-nascar-app",
  storageBucket: "speedmax-nascar-app.firebasestorage.app",
  messagingSenderId: "824476697911",
  appId: "1:824476697911:web:09006c1cb7a36d2e9ac6b2",
};

/* ==================== DOCUMENTOS POR PASSAGEIRO (área restrita) =========
   Link individual e privado — não existe lista pública no app. Cada
   passageiro recebe o link #pax-{slug} diretamente (WhatsApp) pelo
   Vinicius. Os arquivos de cada um ficam no Firestore/Storage, enviados
   pela área restrita.                                                     */
const PASSAGEIROS = [
  { slug:'george-hartmann', nome:'George Prado Hartmann' },
  { slug:'geisel-vieira', nome:'Geisel Botelho Vieira' },
  { slug:'roberto-rubio', nome:'Roberto Alexandre Vieira Rubio' },
  { slug:'francisco-geremias', nome:'Francisco de Assis Geremias Junior' },
  { slug:'caio-castrale', nome:'Caio Henrique Esteve Castrale' },
  { slug:'arthur-soares', nome:'Arthur José Soares Neto' },
  { slug:'marcelo-cardoso', nome:'Marcelo Cardoso da Silva' },
  { slug:'carline-mello', nome:'Carline Pereira de Mello' },
  { slug:'felipe-koroth', nome:'Felipe Pereira Koroth' },
  { slug:'sidney-seemann', nome:'Sidney Seemann' },
  { slug:'stelamaris-ost', nome:'Stelamaris Ost' },
  { slug:'edgar-alonso', nome:'Edgar Alonso' },
  { slug:'vinicius-shimao', nome:'Vinicius Augusto Shimao' },
  { slug:'juliano-silva', nome:'Juliano Silva' },
  { slug:'manuela-nascimento', nome:'Manuela Nascimento' },
  { slug:'nicolle-vidal', nome:'Nicolle Vidal' },
  { slug:'priscila-alonso', nome:'Priscila Aparecida Bodevan da Silva Alonso' },
  { slug:'juliana-mello', nome:'Juliana Meirelles de Mello' },
  { slug:'luis-lermen', nome:'Luis Eduardo Fernandes Lermen' },
  { slug:'gino', nome:'Gino' },
];

/* ======================= DOCUMENTOS & CHECKLIST ========================== */
const DOCS = {
  checklist:[
    ['Passaporte','Validade mínima de 6 meses a partir da data de retorno.'],
    ['Visto americano (B1/B2)','Válido para a data da viagem. Leve-o no passaporte atual (ou no antigo, acompanhado do novo).'],
    ['Seguro viagem','Cobertura internacional para todo o período (01–06/10). Guarde o número da apólice e o telefone do seguro no celular.'],
    ['Autorização de viagem','Se aplicável (menores de 18 anos desacompanhados de ambos os pais).'],
    ['Regras de bagagem','Conforme a companhia aérea do seu bilhete — em geral 1 mala de 23 kg despachada + bagagem de mão de 10 kg. Confira sua reserva.'],
    ['Endereço do hotel','Fontainebleau Las Vegas — 2777 Las Vegas Blvd S, Las Vegas, NV 89109 (tenha à mão na imigração).'],
    ['Contatos de emergência','Salve os contatos da área Emergência deste app no seu celular.'],
  ],
  disclaimer:'A VTurismo realizará o checklist documental e enviará orientações aos participantes. A obtenção, validade e regularidade dos documentos de viagem são de responsabilidade exclusiva de cada participante.',
};

/* ============================ EMERGÊNCIA ================================= */
const EMERGENCIA = [
  { icone:'🚨', titulo:'Emergência local (EUA)', valor:'911', tel:'911', obs:'Polícia, ambulância e bombeiros — 24h.' },
  { icone:'🟢', titulo:'VTurismo — Concierge 24h', valor:'+55 21 98115-5451', tel:'+5521981155451', obs:'WhatsApp e telefone durante toda a experiência.', wa:true },
  { icone:'🏨', titulo:'Hotel — Fontainebleau Las Vegas', valor:'+1 (702) 678-5000', tel:'+17026785000', obs:'Recepção 24h · 2777 Las Vegas Blvd S.' },
  { icone:'🛡', titulo:'Seguro viagem', valor:'apólice a confirmar', tel:'', obs:'Número da apólice e central 24h serão enviados no checklist documental.' },
  { icone:'🏥', titulo:'Hospital de referência', valor:'Sunrise Hospital & Medical Center', tel:'+17027318000', obs:'3186 S Maryland Pkwy — emergência 24h (~10 min do hotel).', mapa:'Sunrise Hospital & Medical Center, 3186 S Maryland Pkwy, Las Vegas' },
  { icone:'🟩', titulo:'Responsável SpeedMax', valor:'a confirmar', tel:'', obs:'Contato institucional SpeedMax durante a viagem.' },
];
