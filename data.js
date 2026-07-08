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
  periodo: '02 a 06 de outubro de 2026',
  inicioViagem: '2026-10-02T12:00:00-07:00',   // usado no contador regressivo
  whatsappConcierge: '552141452310',            // WhatsApp VTurismo (só números, com DDI)
  telefoneEmergenciaVT: '+55 21 4145-2310',
  coordenador: { nome: 'Coordenação VTurismo', fone: '+55 21 4145-2310', obs: 'Coordenador do grupo — nome e celular local serão confirmados antes do embarque.' },
  responsavelSpeedMax: { nome: 'Responsável SpeedMax', fone: 'a confirmar', obs: 'Contato institucional SpeedMax durante a viagem.' },
  // mostrar/esconder módulos do app:
  modulos: { agenda:true, comunicados:true, concierge:true, hospedagem:true, transportes:true, guia:true, raceday:true, docs:true, emergencia:true },
};

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
    texto:'Hoje, 20h00 — <b>Ocean Prime</b>. Dress code: <b>esporte fino</b> (smart casual elegante). Ponto de encontro: lobby do Fontainebleau às 19h30.',
    urgente:true },
];

/* ============================ PROGRAMAÇÃO =================================
   dias[].itens[]: hora, titulo, local, endereco, dress, obs, mapa (busca no
   Google Maps), dur (minutos, p/ "adicionar ao calendário").               */
const AGENDA = [
  { data:'2026-10-02', rotulo:'Sex · 02 out', tema:'Chegada & Welcome', itens:[
    { hora:'tarde', titulo:'Chegada a Las Vegas ✈️', local:'Harry Reid International Airport (LAS)', endereco:'5757 Wayne Newton Blvd, Las Vegas, NV 89119',
      dress:'—', obs:'Equipe VTurismo aguardando no desembarque (Airport Meet & Greet), com apoio de bagagens.', dur:60, cal:'14:00' },
    { hora:'após a chegada', titulo:'Transfer In 🚐', local:'Aeroporto → Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Veículos executivos · briefing de boas-vindas no trajeto (~15 min).', dur:30, cal:'15:00' },
    { hora:'16:00', titulo:'Check-in — Fontainebleau Las Vegas 🏨', local:'Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Check-in assistido pela equipe VTurismo · tempo livre para descanso.', dur:60, cal:'16:00' },
    { hora:'20:00', titulo:'Welcome Dinner 🍽', local:'Ocean Prime Las Vegas', endereco:'3716 Las Vegas Blvd S Suite 200, Las Vegas, NV 89109',
      dress:'Esporte fino', obs:'Jantar de boas-vindas e integração do grupo. Encontro no lobby às 19h30.', dur:150, cal:'20:00' },
  ]},
  { data:'2026-10-03', rotulo:'Sáb · 03 out', tema:'Experiências Signature', itens:[
    { hora:'09:00', titulo:'Desert Off-Road Experience 🏜', local:'Deserto de Nevada (UTVs)', endereco:'Las Vegas, NV',
      dress:'Roupa confortável, tênis fechado, óculos de sol e protetor solar', obs:'Saída do hotel em veículos executivos · aventura em UTVs com operadores especializados.', dur:300, cal:'09:00' },
    { hora:'14:00', titulo:'Almoço — incluído 🍽', local:'Restaurante selecionado', endereco:'Las Vegas, NV',
      dress:'Casual', obs:'Almoço incluído após o Off-Road — restaurante selecionado pelo concierge.', dur:90, cal:'14:00' },
    { hora:'18:30', titulo:'Las Vegas Night Flight 🚁', local:'Heliporto — Maverick Helicopters', endereco:'6075 Las Vegas Blvd S, Las Vegas, NV 89119',
      dress:'Casual elegante', obs:'Sobrevoo panorâmico da Strip iluminada ao anoitecer (~12–15 min de voo).', dur:90, cal:'18:30' },
    { hora:'21:30', titulo:'Espetáculo Premium — “O” · Cirque du Soleil 🎭', local:'O Theatre — Bellagio', endereco:'3600 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'Esporte fino', obs:'O espetáculo mais icônico de Las Vegas, no teatro aquático do Bellagio. Jantar leve incluído antes do espetáculo, próximo ao teatro (orientação do concierge).', dur:100, cal:'21:30' },
  ]},
  { data:'2026-10-04', rotulo:'Dom · 04 out', tema:'🏁 NASCAR Race Day', itens:[
    { hora:'10:00', titulo:'Saída para o Speedway 🚐', local:'Lobby — Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'Casual (boné e protetor solar recomendados)', obs:'Race Day Transfer — saída pontual. Trajeto ~30 min até o Las Vegas Motor Speedway.', dur:60, cal:'10:00' },
    { hora:'11:00', titulo:'NASCAR Race Day — South Point 400 🏁', local:'Las Vegas Motor Speedway', endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
      dress:'Casual', obs:'Playoffs da NASCAR Cup Series · camarote SpeedMax · horário oficial da largada a confirmar pela NASCAR. Veja a área Race Day do app.', dur:420, cal:'11:00' },
    { hora:'12:00', titulo:'Almoço Race Day — incluído 🍽', local:'Las Vegas Motor Speedway (hospitality)', endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
      dress:'Casual', obs:'Almoço incluído no Speedway antes da largada — formato alinhado à estrutura do camarote SpeedMax.', dur:90, cal:'12:00' },
    { hora:'20:30', titulo:'Beyond the Finish Line 🍷', local:'Barry’s Downtown Prime — Circa Resort', endereco:'8 Fremont St, Las Vegas, NV 89101',
      dress:'Esporte fino', obs:'Jantar de encerramento do Race Day, celebrando o dia no Speedway.', dur:120, cal:'20:30' },
    { hora:'22:30', titulo:'Hidden Vegas Experience 🍸', local:'The Laundry Room (speakeasy) — Commonwealth', endereco:'525 E Fremont St, Las Vegas, NV 89101',
      dress:'Esporte fino', obs:'Speakeasy exclusivo, a poucos passos do jantar — coquetelaria autoral para fechar a noite.', dur:90, cal:'22:30' },
  ]},
  { data:'2026-10-05', rotulo:'Seg · 05 out', tema:'Dia livre em Las Vegas', itens:[
    { hora:'09:30', titulo:'City tour por Las Vegas 🚌', local:'Saída do lobby — Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'Casual · tênis, óculos de sol e protetor solar', obs:'Passeio pela manhã pelos ícones da cidade: Strip, Welcome to Las Vegas Sign e mirantes. Retorno ao hotel.', dur:180, cal:'09:30' },
    { hora:'tarde', titulo:'Tarde livre — compras 🛍', local:'Forum Shops · Fashion Show · Premium Outlets', endereco:'Las Vegas, NV',
      dress:'Casual', obs:'Tarde livre para compras. O concierge VTurismo indica lojas, outlets e organiza transfers a pedido.', dur:0, cal:'' },
    { hora:'noite', titulo:'Noite livre — cassinos 🎰', local:'Cassinos da Strip', endereco:'Las Vegas Blvd S, Las Vegas, NV',
      dress:'Esporte fino (21+ · leve documento com foto)', obs:'Noite livre para explorar os cassinos mais icônicos do mundo: Bellagio, Caesars, Wynn e The Venetian. Reservas e sugestões com o concierge.', dur:0, cal:'' },
  ]},
  { data:'2026-10-06', rotulo:'Ter · 06 out', tema:'Partida', itens:[
    { hora:'11:00', titulo:'Check-out 🧳', local:'Fontainebleau Las Vegas', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'—', obs:'Check-out assistido · guarda de bagagens conforme horário dos voos.', dur:60, cal:'11:00' },
    { hora:'12:00', titulo:'Almoço de despedida — incluído 🍽', local:'Restaurante no Fontainebleau', endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109',
      dress:'Casual', obs:'Conforme o horário dos voos do grupo.', dur:90, cal:'12:00' },
    { hora:'conforme voos', titulo:'Transfer Out 🚐 ✈️', local:'Hotel → Harry Reid International Airport (LAS)', endereco:'5757 Wayne Newton Blvd, Las Vegas, NV 89119',
      dress:'—', obs:'Transfer executivo com apoio da equipe até o check-in. Horário definido conforme os voos do grupo.', dur:60, cal:'13:00' },
    { hora:'—', titulo:'Retorno ao Brasil 🇧🇷', local:'—', endereco:'',
      dress:'—', obs:'Fim da SpeedMax Racing Experience. Até a próxima! 🏁', dur:0, cal:'' },
  ]},
];

/* ============================ HOSPEDAGEM ================================= */
const HOTEL = {
  nome:'Fontainebleau Las Vegas', foto:'img/fontainebleau.jpg',
  endereco:'2777 Las Vegas Blvd S, Las Vegas, NV 89109, EUA',
  fone:'+1 (702) 678-5000',
  checkin:'16h00 (02/10)', checkout:'11h00 (06/10)',
  wifi:'Cortesia nos quartos e áreas sociais — rede e senha informadas no check-in.',
  cafe:'Não incluso no plano padrão — o hotel reúne mais de 30 restaurantes e cafés (orientações com o concierge).',
  encontro:'Lobby principal, junto à recepção — ponto de encontro oficial do grupo para todas as saídas.',
  uteis:['O resort mais novo da Strip — 67 andares, spa premiado e cassino integrado.',
         'Guarde o cartão do quarto para circular nas áreas de hóspedes.',
         'Cofre no quarto para passaporte e valores.',
         'Gorjeta usual: US$ 2–5 por mala / serviço de quarto.'],
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
  { rotulo:'Desert Off-Road', data:'Sáb · 03 out', encontro:'Lobby do Fontainebleau · 08h45', saida:'09h00',
    veiculo:'Van executiva', resp:'Coordenador VTurismo', obs:'Levar óculos de sol, tênis fechado e protetor solar.',
    carros:[
      { foto:'img/van_sprinter.jpg', modelo:'Mercedes-Benz Sprinter Executive', placa:'a confirmar',
        local:'Pórtico VIP do Fontainebleau (valet) — em frente ao lobby', motorista:'a confirmar' },
    ]},
  { rotulo:'Night Flight + Espetáculo', data:'Sáb · 03 out', encontro:'Lobby do Fontainebleau · 17h45', saida:'18h00',
    veiculo:'Van executiva', resp:'Coordenador VTurismo', obs:'Sequência heliporto → jantar leve → Bellagio (“O”). Retorno após o show.',
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
    veiculo:'Vans executivas', resp:'Equipe VTurismo', obs:'Sequência: Speedway → Barry’s Downtown Prime → The Laundry Room → hotel.',
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
  { rotulo:'Transfer Out', data:'Ter · 06 out', encontro:'Lobby do Fontainebleau (horário conforme voos)', saida:'a confirmar',
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
];

/* ==================== RACE DAY | Presented by SpeedMax ================== */
const RACEDAY = {
  corrida:'South Point 400',
  serie:'NASCAR Cup Series · Playoffs — Round of 12',
  data:'Domingo, 04 de outubro de 2026',
  local:'Las Vegas Motor Speedway',
  endereco:'7000 Las Vegas Blvd N, Las Vegas, NV 89115',
  horario:'Largada: horário oficial a confirmar pela NASCAR (historicamente início da tarde, horário local)',
  infoSpeedway:'Tri-oval de 1,5 milha (2,4 km) ao norte da Strip — 267 voltas · 400,5 milhas. Um dos palcos dos Playoffs da Cup Series.',
  programacao:[
    ['10h00','Saída do hotel — Race Day Transfer (lobby 09h45, saída pontual)'],
    ['11h00','Chegada ao Speedway · acesso ao camarote SpeedMax'],
    ['—','Camarote: hospitalidade, orientações da equipe e telões — documentos/credenciais sempre com você'],
    ['pós-corrida','Ponto de encontro: portão do camarote — a equipe VTurismo conduz o grupo às vans'],
    ['20h30','Beyond the Finish Line — jantar no Barry’s Downtown Prime (Circa)'],
    ['22h30','Hidden Vegas Experience — The Laundry Room (speakeasy)'],
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
   tipo: 'audio' | 'video' | 'texto' · src: arquivo em midia/ (opcional).     */
const INSIGHTS = [
  { tipo:'texto', hora:'—', titulo:'Race Insights by Cacá Bueno', desc:'Durante o Race Day, o pentacampeão Cacá Bueno publica aqui áudios curtos explicando os momentos da corrida: largada, pit stops, bandeiras, estratégia de pneus e as últimas voltas. Fique de olho! 🎧', src:'' },
  { tipo:'audio', hora:'em breve', titulo:'A largada', desc:'O que observar nos primeiros metros da South Point 400.', src:'' },
  { tipo:'audio', hora:'em breve', titulo:'Pit stop & estratégia de pneus', desc:'Por que a troca de pneus decide corridas — o olhar de quem entende de borracha.', src:'' },
  { tipo:'audio', hora:'em breve', titulo:'Bandeira amarela', desc:'Como o caution muda tudo: reagrupamento, wave around e a corrida no pit lane.', src:'' },
  { tipo:'audio', hora:'em breve', titulo:'Últimas voltas', desc:'Overtime, pressão e o sprint final rumo à bandeira quadriculada.', src:'' },
];

/* ======================= DOCUMENTOS & CHECKLIST ========================== */
const DOCS = {
  checklist:[
    ['Passaporte','Validade mínima de 6 meses a partir da data de retorno.'],
    ['Visto americano (B1/B2)','Válido para a data da viagem. Leve-o no passaporte atual (ou no antigo, acompanhado do novo).'],
    ['Seguro viagem','Cobertura internacional para todo o período (02–05/10). Guarde o número da apólice e o telefone do seguro no celular.'],
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
  { icone:'🟢', titulo:'VTurismo — Concierge 24h', valor:'+55 21 4145-2310', tel:'+552141452310', obs:'WhatsApp e telefone durante toda a experiência.', wa:true },
  { icone:'🏨', titulo:'Hotel — Fontainebleau Las Vegas', valor:'+1 (702) 678-5000', tel:'+17026785000', obs:'Recepção 24h · 2777 Las Vegas Blvd S.' },
  { icone:'🛡', titulo:'Seguro viagem', valor:'apólice a confirmar', tel:'', obs:'Número da apólice e central 24h serão enviados no checklist documental.' },
  { icone:'🏥', titulo:'Hospital de referência', valor:'Sunrise Hospital & Medical Center', tel:'+17027318000', obs:'3186 S Maryland Pkwy — emergência 24h (~10 min do hotel).', mapa:'Sunrise Hospital & Medical Center, 3186 S Maryland Pkwy, Las Vegas' },
  { icone:'🟩', titulo:'Responsável SpeedMax', valor:'a confirmar', tel:'', obs:'Contato institucional SpeedMax durante a viagem.' },
];
