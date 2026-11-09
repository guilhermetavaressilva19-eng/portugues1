// Base de dados contendo todas as 12 redações fornecidas pelo Guilherme Tavares
const redacoesData = [
    {
        id: 1,
        titulo: "El Niño e os Desafios Sociais frente às Mudanças Climáticas",
        tema: "Mudanças Climáticas no Brasil",
        texto: `As mudanças climáticas representam um dos maiores desafios da sociedade contemporânea. Nesse contexto, o fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, pode intensificar eventos climáticos extremos, como secas, enchentes e ondas de calor. No Brasil, esses acontecimentos afetam milhares de pessoas e evidenciam a falta de preparação da sociedade. Dessa forma, a ausência de infraestrutura adequada e a pouca conscientização da população dificultam o enfrentamento desses problemas.\n\nEm primeiro lugar, a precariedade da infraestrutura urbana aumenta os impactos dos eventos climáticos extremos. Em diversas cidades brasileiras, a falta de sistemas eficientes de drenagem, o descarte irregular de lixo e a ocupação de áreas de risco contribuem para enchentes e deslizamentos. Como consequência, muitas famílias perdem suas casas e enfrentam dificuldades para reconstruir suas vidas. Assim, torna-se necessário ampliar os investimentos públicos em prevenção e planejamento urbano.\n\nAlém disso, a falta de educação ambiental também prejudica a preparação da sociedade. Muitas pessoas desconhecem os riscos relacionados às mudanças climáticas e não sabem como agir em situações de emergência. Nesse sentido, as escolas e os meios de comunicação possuem papel fundamental na divulgação de informações sobre prevenção, sustentabilidade e segurança. Portanto, conscientizar a população é essencial para diminuir os danos causados por esses fenômenos.\n\nDiante disso, é fundamental que o Governo Federal, em parceria com estados e municípios, desenvolva políticas públicas de prevenção aos desastres climáticos. Para isso, devem ser realizados investimentos em infraestrutura, sistemas de alerta e fiscalização de áreas de risco. Além disso, o Ministério da Educação deve promover campanhas e projetos escolares sobre mudanças climáticas, por meio de palestras e atividades educativas. Dessa maneira, será possível construir uma sociedade mais preparada, consciente e segura diante dos eventos extremos.`
    },
    {
        id: 2,
        titulo: "Desafios da Migração e o Acolhimento na Sociedade Global",
        tema: "Direitos Humanos e Imigração",
        texto: `A migração é um fenômeno presente em diversos países e ocorre por motivos como guerras, crises econômicas e busca por melhores condições de vida. Nesse contexto, a Declaração Universal dos Direitos Humanos, criada pela Organização das Nações Unidas (ONU), estabelece que todos os indivíduos possuem direitos fundamentais, independentemente de sua origem. Entretanto, na sociedade contemporânea, muitos migrantes enfrentam dificuldades de acolhimento e preconceito nos países de destino. Dessa forma, a discriminação e a falta de políticas públicas eficientes representam desafios para a convivência em contextos globais.\n\nEm primeiro lugar, o preconceito contra imigrantes dificulta sua integração social. Isso acontece porque muitos estrangeiros são vistos de maneira negativa devido às diferenças culturais, linguísticas e religiosas. Como consequência, essas pessoas podem sofrer exclusão social e encontrar obstáculos para conseguir emprego, moradia e acesso à educação. Assim, a intolerância prejudica tanto os migrantes quanto a construção de uma sociedade mais justa e respeitosa.\n\nAlém disso, a insuficiência de políticas públicas de acolhimento agrava essa situação. A falta de assistência governamental, de oportunidades de trabalho e de acesso aos serviços básicos dificulta a adaptação dos recém-chegados. Nesse sentido, é fundamental que os países desenvolvam medidas que garantam condições dignas de vida aos migrantes, contribuindo para sua inclusão e para a redução das desigualdades sociais.\n\nPortanto, é necessário enfrentar os desafios relacionados à migração e ao acolhimento. Para isso, os governos devem ampliar as políticas públicas de assistência aos imigrantes, por meio da oferta de cursos de idiomas, oportunidades de emprego e acesso à educação e à saúde. Ademais, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre o respeito às diferenças culturais. Dessa maneira, será possível construir uma sociedade mais acolhedora, na qual a diversidade seja valorizada e os direitos humanos sejam respeitados.`
    },
    {
        id: 3,
        titulo: "Preservação da Fauna Brasileira e Equilíbrio Ecológico",
        tema: "Meio Ambiente e Biodiversidade",
        texto: `A conservação da fauna brasileira é um desafio importante para a preservação do meio ambiente. Nesse sentido, o Brasil possui uma grande diversidade de espécies, porém muitas estão ameaçadas de extinção devido às ações humanas. Entre as principais causas desse problema estão o desmatamento e a caça ilegal, que prejudicam o equilíbrio ecológico e colocam em risco a biodiversidade.\n\nEm primeiro lugar, o desmatamento é um dos principais fatores que ameaçam os animais brasileiros. A destruição de florestas para a expansão agropecuária e urbana reduz os habitats naturais, dificultando a sobrevivência de diversas espécies. Como consequência, ocorre a diminuição da biodiversidade e o desequilíbrio das cadeias alimentares, prejudicando o funcionamento dos ecossistemas.\n\nAlém disso, a caça ilegal e o tráfico de animais silvestres contribuem para o desaparecimento de espécies. A retirada desses animais da natureza afeta a reprodução e o controle das populações, causando impactos ambientais. Dessa forma, a falta de fiscalização e de conscientização da sociedade agrava o problema e dificultam a conservação da fauna brasileira.\n\nPortanto, é necessário combater a extinção de espécies e preservar o equilíbrio ecológico. Para isso, o Governo Federal, por meio dos órgãos ambientais, deve ampliar a fiscalização e combater o desmatamento e o tráfico de animais. Além disso, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre a importância da biodiversidade. Assim, será possível proteger a fauna brasileira e garantir a preservação dos ecossistemas para as futuras gerações.`
    },
    {
        id: 4,
        titulo: "Exploração Espacial vs. Responsabilidade Social",
        tema: "Ciência e Tecnologia",
        texto: `Desde o início da corrida espacial, no século XX, a humanidade passou a ampliar seus conhecimentos sobre o Universo e a desenvolver tecnologias capazes de transformar a vida em sociedade. No século XXI, esse processo ganhou ainda mais força com o crescimento de empresas privadas e de novas missões espaciais. Entretanto, embora a exploração do espaço represente importantes avanços científicos, ela também apresenta desafios relacionados à desigualdade social e aos impactos ambientais. Dessa forma, torna-se necessário conciliar o progresso científico com a responsabilidade social.\n\nEm primeiro lugar, é importante destacar que os investimentos na exploração espacial podem contribuir para o desenvolvimento tecnológico. Tecnologias criadas para missões espaciais podem posteriormente ser utilizadas em áreas como comunicação, meteorologia e monitoramento ambiental. Nesse sentido, o avanço científico pode trazer benefícios para a sociedade. Contudo, quando os investimentos são concentrados em projetos de alto custo enquanto problemas básicos, como pobreza, fome e falta de acesso à educação, permanecem, surge um questionamento sobre a distribuição dos recursos e das prioridades sociais.\n\nAlém disso, a intensificação das atividades espaciais gera impactos que não podem ser ignorados. O aumento do número de satélites e lançamentos contribui para a formação de detritos espaciais, que podem colocar outras missões em risco e dificultar a utilização sustentável da órbita terrestre. Assim, o desenvolvimento tecnológico precisa estar acompanhado de medidas de controle e cooperação internacional, evitando que a busca pelo conhecimento provoque novos problemas ambientais e tecnológicos.\n\nPortanto, é fundamental buscar um equilíbrio entre exploração espacial e responsabilidade social. Para isso, governos e organizações internacionais devem estabelecer normas para controlar os impactos ambientais das atividades espaciais, além de fiscalizar empresas privadas do setor. Paralelamente, os investimentos científicos devem promover benefícios sociais, direcionando parte dos recursos e das tecnologias desenvolvidas para áreas como educação, comunicação e preservação ambiental. Dessa maneira, será possível garantir que a exploração espacial avance sem deixar de considerar as necessidades da sociedade e a preservação do planeta.`
    },
    {
        id: 5,
        titulo: "A Valorização e Preservação dos Monumentos Históricos",
        tema: "Cultura e Patrimônio Nacional",
        texto: `Os monumentos históricos são importantes para a sociedade, pois representam acontecimentos, culturas e costumes que fazem parte da história de um país. No Brasil, existem diversos patrimônios que ajudam a preservar a memória nacional. Porém, muitos deles enfrentam problemas relacionados à falta de manutenção, ao abandono e à ação do próprio ser humano. Nesse contexto, a falta de investimentos e de conscientização da população são alguns dos principais desafios para a preservação desses espaços.\n\nPrimeiramente, a falta de investimentos é um dos fatores que prejudicam a conservação dos monumentos históricos. Muitos locais precisam de reformas e cuidados constantes para evitar sua deterioração. Entretanto, quando não existem recursos suficientes para realizar essas ações, os patrimônios podem sofrer danos que, com o tempo, tornam sua recuperação mais difícil e cara. Dessa forma, é fundamental que o poder público dê maior atenção à preservação desses locais.\n\nAlém disso, a falta de conscientização da população também contribui para esse problema. Atos de vandalismo, pichações e descarte inadequado de lixo podem danificar monumentos que possuem grande importância cultural. Muitas vezes, isso acontece porque parte da sociedade não conhece o valor histórico desses espaços. Por isso, a educação pode contribuir para formar cidadãos mais conscientes sobre a importância de proteger o patrimônio histórico brasileiro.\n\nPortanto, é necessário que o poder público, em parceria com as escolas e instituições culturais, desenvolva ações voltadas à preservação dos monumentos históricos. O Governo deve ampliar os investimentos em restauração e manutenção, enquanto as escolas podem promover projetos e visitas educativas que mostrem aos estudantes a importância desses patrimônios. Assim, será possível reduzir os danos causados pelo abandono e pela falta de conscientização, garantindo que a história e a cultura brasileira sejam preservadas para as próximas gerações.`
    },
    {
        id: 6,
        titulo: "A Hiper-realidade e a Influência dos Algoritmos de IA",
        tema: "Redes Sociais e Filosofia (Baudrillard)",
        texto: `Segundo o filósofo Jean Baudrillard, a hiper-realidade ocorre quando representações passam a influenciar indivíduos sobre aquilo que é real. Essa ideia pode estar relacionada com a prática de consumo da sociedade que muitas das vezes é influenciada pela mídia. Diante disso, percebe-se prioritariamente que as redes sociais são as principais causadoras da desinformação agregada ao estilo de vida, juntamente com as inteligências artificiais usadas como auxílio para a criação de imagens e vídeos.\n\nEm primeiro lugar, algoritmos são projetados para entreter o público conforme os conteúdos consumidos por aquele indivíduo, contribuindo para expandir o acesso a essa ferramenta capaz de alterar o modo de vida. Dessa forma, quanto mais uma pessoa consome determinado conteúdo, maior é a possibilidade de receber publicações semelhantes, isso pode influenciar as suas escolhas, seus interesses e até mesmo sua forma de enxergar a realidade, visto que o indivíduo passa a ter contato frequente com determinadas referências. Assim, os algoritmos podem contribuir para a criação de uma realidade personalizada, onde os conteúdos apresentados passam a afetar os hábitos da sociedade.\n\nAlém disso, a utilização das inteligências artificiais na criação de imagens e vídeos também contribui para esse problema. Atualmente, conteúdos produzidos ou modificados por essas ferramentas podem apresentar situações que não correspondem necessariamente com a realidade. Como consequência, a circulação dessas produções nas redes sociais pode dificultar a identificação entre informações verdadeiras e falsas. Nesse sentido, a ideia de hiper-realidade apresentada por Jean Baudrillard permanece evidente, pois representações divulgadas pela mídia podem adquirir uma influência maior do que a própria realidade. Dessa maneira, a sociedade pode ser influenciada por referências digitais na construção de seus pensamentos, comportamentos e hábitos de consumo.\n\nPortanto, é necessário buscar formas de diminuir os impactos causados pela influência dos algoritmos na sociedade. Para isso, as plataformas digitais, em parceria com órgãos responsáveis pela educação e comunicação, devem promover campanhas de conscientização sobre o funcionamento dos algoritmos e a identificação de conteúdo produzidos ou modificados por inteligência artificial. Essa ação deve ocorrer por meio das próprias redes sociais, com vídeos informativos e avisos sobre conteúdos que podem ser potencialmente manipulados, a fim de desenvolver maior capacidade de análise entre os usuários. Sendo assim, será possível reduzir os efeitos da desinformação e permitir que a sociedade tenha uma relação mais consciente com a mídia e com os conteúdos consumidos diariamente.`
    },
    {
        id: 7,
        titulo: "A Linha Tênue entre Autocuidado e Obsessão Estética",
        tema: "Cultura Fitness e Saúde Mental",
        texto: `A busca por saúde e bem-estar ganhou um espaço sem precedentes na sociedade moderna. Academias lotadas, alimentação equilibrada e a rotina de exercícios físicos são celebrados como pilares de uma vida longa e funcional. No entanto, existe uma linha tênue entre a cultura fitness voltada para o autocuidado e a obsessão pela busca de uma estética inatingível.\n\nImpulsionada pelas redes sociais, a indústria do corpo perfeito frequentemente vende padrões irrealistas, moldados por filtros, ângulos estudados e, em muitos casos, procedimentos estéticos não revelados. Essa comparação constante transforma o cuidado com a saúde em uma fonte de frustração e ansiedade. Quando o valor de uma pessoa passa a ser medido pelo percentual de gordura ou pela definição muscular, o bem-estar físico e mental é comprometido.\n\nA verdadeira cultura fitness deve focar na funcionalidade, na energia e na longevidade, respeitando a diversidade de corpos e limites de cada indivíduo. Cuidar de si mesmo é um ato de respeito ao próprio corpo, e não uma punição para alcançar um ideal fabricado. Encontrar o equilíbrio entre metas saudáveis e a aceitação pessoal é o único caminho sustentável para o real bem-estar.`
    },
    {
        id: 8,
        titulo: "Caminhos e Desafios da Inclusão Digital no Brasil",
        tema: "Tecnologia e Desigualdade Social",
        texto: `Segundo o filósofo Pierre Lévy, as tecnologias digitais ampliam as possibilidades de participação social e compartilhamento de conhecimento. No entanto, essa realidade ainda não é acessível a todos os brasileiros. Embora a Internet tenha se tornado indispensável para atividades como educação, trabalho e comunicação, parte da população permanece excluída desse cenário. Diante dessa perspectiva, discutir os caminhos e desafios da inclusão digital do Brasil é essencial para compreender os impactos da desigualdade social e da insuficiência de investimentos em infraestrutura tecnológica.\n\nEm primeiro lugar, a desigualdade socioeconômica constitui um dos principais entraves à inclusão digital no Brasil. A esse respeito, a Constituição Federal de 1988 assegura a todos os cidadãos o direito à igualdade de oportunidades. Entretanto, essa garantia não é amplamente concretizada visto que muitas famílias de baixa renda não possuem acesso a dispositivos eletrônicos e à Internet de qualidade. Por conseguinte, parcela significativa da população encontra dificuldades para estudar, buscar emprego e acessar serviços essenciais, perpetuando esse cenário de marginalização tecnológica.\n\nAlém disso, a insuficiência da infraestrutura tecnológica contribui para a manutenção do problema. Sob essa ótica, Marshall McLuhan desenvolveu o conceito de "aldeia global", segundo o qual os avanços tecnológicos aproximam pessoas e facilitam a circulação de informações. Todavia, essa realidade não contempla todos os brasileiros, visto que diversas regiões do país ainda enfrentam dificuldades relacionadas à cobertura e à qualidade de rede. Essa carência de investimentos impede que os benefícios da conectividade alcancem a toda população.\n\nPortanto, torna-se imprescindível a adoção de medidas que promovam a inclusão digital no Brasil. Para isso, o Ministério das Comunicações, em parceria com as empresas de telecomunicações, deve ampliar a infraestrutura de Internet em regiões periféricas e rurais, através de investimentos e incentivos fiscais destinados à expansão da cobertura de rede. Ademais, o Ministério da Educação deve implementar programas de capacitação tecnológica nas escolas públicas, com oferta de equipamentos e cursos de letramento digital aos estudantes. Dessa maneira, será possível democratizar o acesso às tecnologias, reduzir as desigualdades sociais e garantir uma participação mais efetiva dos cidadãos na sociedade contemporânea.`
    },
    {
        id: 9,
        titulo: "O Endividamento Jovem e o Impacto das Apostas Virtuais (Bets)",
        tema: "Mídia, Consumo e Jogos de Azar",
        texto: `O livro "O Jogador" de Fiódor Dostoiévski, narra a trajetória de um homem cuja a vida é arruinada pela dependência nos jogos, retratando a realidade de muitos jovens brasileiros acerca das bets. Com isso, o endividamento e a influência exercida pelas mídias digitais apresenta-se como desafios relevantes na sociedade brasileira. Nesse contexto, grande parte das famílias brasileiras enfrentam algum nível de endividamento, e o perfil mais vulnerável é composto por homens e famílias de baixa renda, o que evidencia os métodos usados para o ganho de renda de forma fácil, como as bets. Dessa maneira, colaborando para o endividamento dos jovens brasileiros, que muitas das vezes são influenciados por criadores de conteúdo famosos, prometendo diversão e, em simultâneo, ganho financeiro.\n\nDiante disso, influenciadores digitais contribuem significativamente para o sucesso dos jogos de azar. Ademais, o crescimento contínuo da Internet contribui para expandir abruptamente a facilidade de apostar, com vários sites e plataformas, mas com mecanismos de proteção ainda insuficientes.\n\nPortanto, o Governo Federal deve ampliar a fiscalização das plataformas de apostas e regulamentar a divulgação nas redes sociais, por meio da criação de leis mais rigorosas e campanhas de conscientização, de modo a mitigar o endividamento e a dependência associados aos jogos de azar.`
    },
    {
        id: 10,
        titulo: "Ciclo Hidrológico, Negligência Ambiental e Desigualdade",
        tema: "Desequilíbrio Ecológico e Sociedade",
        texto: `O filme O Dia Depois de Amanhã dirigido por Roland Emmerich ilustra eventos climáticos decorrentes do desequilíbrio ambiental, demonstrando como as mudanças no ciclo hidrológico podem causar prejuízos econômicos e desestruturação social. Nesse contexto, observa-se que tal problemática se baseia, sobretudo, na desintegração ecológica e na disfunção social relacionadas ao meio ambiente.\n\nDiante desse cenário a degradação ambiental está diretamente relacionada à ação humana dentro da natureza, negligenciando seu estado constante como o ciclo da água. Acerca disso, o Estado deve ter seu devido papel em preservar o meio ambiente onde há habitat de múltiplas espécies que atuam em cooperação umas com as outras, sendo assim, uma vez que a remoção de vegetação do solo ocorre, a água deixa de se infiltrar no ambiente, o que intensifica períodos de seca e favorece a ocorrência de enchentes. Nesse sentido, a atuação da sociedade no cenário exprime negligência quanto à preservação ambiental, evidenciando o descaso coletivo diante da degradação da natureza. Dessa forma, priorizam-se os interesses econômicos de grupos privilegiados em detrimento da sustentabilidade, intensificando os impactos hidrológicos e contribuindo para o agravamento da desigualdade social sobretudo em áreas mais vulneráveis.\n\nEm suma, as mudanças no ciclo hídrico e a intensificação da seca evidenciam a necessidade de intervenção estatal. Nesse sentido cabe ao governo promover investimentos em infraestrutura, além de implementar campanhas educativas com o objetivo de conscientização. Dessa forma, será possível promover o equilíbrio do ciclo hidrológico e reduzir as desigualdades sociais, principalmente em áreas vulneráveis.`
    },
    {
        id: 11,
        titulo: "O Uso Indiscriminado de Canetas Emagrecedoras e o Padrão Estético",
        tema: "Saúde Pública e Mídias Digitais",
        texto: `Segundo Bauman, a sociedade contemporânea valoriza soluções rápidas, o que contribui para o uso indevido de métodos para o emagrecimento, como canetas emagrecedoras. Neste contexto, a saúde populacional e a interferência da mídia na aparência estética apresenta-se como problema principal. Diante disso, a pressão dos indivíduos para obterem o "corpo perfeito", leva a terem ansiedade, depressão e cometerem o abuso de certas substâncias, como Ozempic, sem prescrições médicas, o que é perigoso para a saúde.\n\nNo entanto, a influência midiática na sociedade, relacionada ao padrão de corpo ideal, gera insegurança em pessoas de estatura comum, levando-as a buscar soluções imediatistas e, muitas vezes, prejudiciais à saúde. Nesse cenário, a propagação de conteúdos nas redes sociais intensifica a comparação entre indivíduos, reforçando um modelo estético irreal e excludente. Como consequência, muitos recorrem ao uso indevido de medicamentos sem orientação profissional, ignorando os riscos envolvidos. Além disso, a falta de informação adequada sobre os efeitos colaterais dessas substâncias agrava o problema. Sem acompanhamento médico, o uso dessas canetas pode desencadear complicações sérias, comprometendo o bem-estar físico e mental dos usuários.\n\nPortanto, torna-se necessário combater o uso indiscriminado de métodos de emagrecimento na sociedade. Para isso, o Ministério da Saúde, em parceria com as mídias digitais, deve promover campanhas informativas por meio das redes sociais e de anúncios televisivos, esclarecendo os riscos do uso indevido de medicamentos e incentivando a busca por orientação profissional. Além disso, as escolas devem abordar a temática da saúde mental e da aceitação corporal em projetos pedagógicos, a fim de reduzir a influência de padrões estéticos irreais. Dessa forma, será possível minimizar os impactos negativos dessa problemática na saúde da população.`
    },
    {
        id: 12,
        titulo: "Inteligências Artificiais, Deepfakes e Educação Digital",
        tema: "Tecnologia, Desinformação e Sociedade",
        texto: `O uso das inteligências artificiais tem impactado a rotina da sociedade, embora sejam utilizadas de forma positiva, o uso das mesmas distorce figuras políticas e culturais por meio de imagens e vídeos alterados, manipulando indivíduos desinformados e gerando suspeita sobre aqueles que têm conhecimento sobre os conteúdos produzidos. Nesse contexto, Jean Baudrillard afirma que vivemos em um mundo de "hiper-realidade", onde a simulação torna-se mais realista do que é a realidade. Com isso, pessoas fragilizadas são influenciadas pelas deepfakes, passando a confiar ou até investir financeiramente em conteúdos falsos, sendo manipuladas por tecnologias que apresentam facilidade na criação de materiais altamente convincentes.\n\nDiante disso, percebe-se que a falta de educação midiática contribui significativamente para a disseminação desses conteúdos. Grande parte da população não possui conhecimento suficiente para identificar informações manipuladas, o que favorece a propagação de notícias falsas e golpes virtuais. Além disso, a rápida evolução das inteligências artificiais supera a capacidade de fiscalização de órgãos responsáveis, ampliando ainda mais os riscos sociais.\n\nPortanto, torna-se essencial a adoção de medidas para mitigar os impactos negativos das inteligências artificiais. O governo deve investir em políticas públicas voltadas à educação digital, promovendo senso crítico na população. Bem como, as empresas de tecnologia devem aprimorar sistemas de verificação e detecção de conteúdos manipulados. Igualmente, cabe ao indivíduo adotar uma postura crítica diante das informações consumidas, verificando fontes e evitando o compartilhamento de conteúdos duvidosos. Assim, com a atuação conjunta entre o Estado, empresas e sociedade, será possível reduzir a influência de conteúdos falsos e preservar a confiabilidade no ambiente digital.`
    }
];

// Inicialização da Página
document.addEventListener('DOMContentLoaded', () => {
    carregarRedacoes();
    configurarAlternadorTema();
});

// 1. Renderização dos Cards de Redação
function carregarRedacoes() {
    const grid = document.getElementById('gridRedacoes');
    grid.innerHTML = '';

    redacoesData.forEach(redacao => {
        const card = document.createElement('div');
        card.className = 'redacao-card';
        card.onclick = () => abrirModal(redacao.id);

        card.innerHTML = `
            <span class="card-tag">${redacao.tema}</span>
            <h4>${redacao.titulo}</h4>
            <p class="preview-text">${redacao.texto.substring(0, 140)}...</p>
            <div style="margin-top: 10px; color: var(--accent); font-weight: bold; font-size: 0.85rem;">
                Ler Texto Completo <i class="fa-solid fa-arrow-right"></i>
            </div>
        `;

        grid.appendChild(card);
    });
}

// 2. Filtro de Escolas na Linha do Tempo
function filtrarEscola(categoria) {
    const cards = document.querySelectorAll('.timeline-grid .card');
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (categoria === 'todas') {
            card.style.display = 'flex';
        } else {
            if (card.classList.contains(categoria)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 3. Modal de Redação
function abrirModal(id) {
    const redacao = redacoesData.find(item => item.id === id);
    if (!redacao) return;

    document.getElementById('modalCategory').innerText = redacao.tema;
    document.getElementById('modalTitle').innerText = redacao.titulo;
    document.getElementById('modalBody').innerText = redacao.texto;
    
    document.getElementById('modalRedacao').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modalRedacao').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modalRedacao');
    if (event.target === modal) {
        fecharModal();
    }
};

// 4. Formulário da Cápsula do Tempo
document.getElementById('formRecado').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const mensagem = document.getElementById('mensagemRecado').value;
    const container = document.getElementById('listaRecados');

    const novoRecado = document.createElement('div');
    novoRecado.className = 'recado-item';
    novoRecado.innerHTML = `
        <strong>${nome}:</strong>
        <p>${mensagem}</p>
        <small style="color: var(--text-muted); font-size:0.75rem;">Registrado agora na Cápsula</small>
    `;

    container.prepend(novoRecado);

    document.getElementById('nomeAluno').value = '';
    document.getElementById('mensagemRecado').value = '';
});

// 5. Alternador de Tema Escuro / Claro
function configurarAlternadorTema() {
    const themeBtn = document.getElementById('themeToggle');
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Escuro';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
        }
    });
}

// 6. Rolar para a Seção
function scrollParaSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
