//Preguntas de las competiciones de futbol 
const quizzes = {
  //Champions league
  champions: {
    facil: [
      {
        question: "¿Qué equipo ganó la Champions 2020?",
        options: ["Bayern Múnich", "PSG", "Liverpool"],
        answer: "Bayern Múnich"
      },
      {
        question: "¿Qué equipo ganó la Champions 2021?",
        options: ["Manchester City", "Chelsea", "Liverpool"],
        answer: "Chelsea"
      },
      {
        question: "¿Qué jugador tiene más goles en la Champions?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski"],
        answer: "Cristiano Ronaldo"
      },
      {
        question: "¿En qué año inició la Champions moderna?",
        options: ["1990", "1992", "1994"],
        answer: "1992"
      },
      {
        question: "¿Cuántos títulos tiene el Real Madrid en Champions?",
        options: ["12", "15", "16"],
        answer: "15"
      },
      {
        question: "¿Quien es el tercer mejor equipo de la champions a parte del Madrid y AC.Milan?",
        options: ["Barcelona", "Liverpool", "Bayern Munich"],
        answer: "Bayern Munich"
      },
      {
        question: "¿En que temporada gano el chelsea su primera champions?",
        options: ["2012/2013", "2011/2012", "2010/2011"],
        answer: "2011/2012"
      },
      {
        question: "¿Quien metio el gol unico de la final entre Inter de milan contra el Manchester city?",
        options: ["Rodri", "Kevin de bruyne", "Foden"],
        answer: "Rodri"
      },
      {
        question: "¿Quienes eran lo que conformaron el tridente conocido como la BBC?",
        options: ["Benzema Bale Cristiano", "Benzema Cazorla Bale", "James Isco Marcelo"],
        answer: "Benzema Bale Cristiano"
      },
      {
        question: "¿En que año gano la ultima champions league el FC.Barcelona?",
        options: ["2014", "2015", "2017"],
        answer: "2015"
      }
      // Nivel medio de la champions 
    ],
    media: [
      {
        question: "¿Quién ganó la Champions en 1999?",
        options: ["Manchester United", "Bayern Múnich", "Juventus"],
        answer: "Manchester United"
      },
      {
        question: "¿Que jugador metio el gol mas rapido de la historia de la champions?",
        options: ["Roy Makaay", "Lionel Messi", "Cristiano Ronaldo"],
        answer: "Roy Makaay"
      },
      {
        question: "¿Cuantos titulos tiene el Benfica de champions?",
        options: ["1", "2", "0"],
        answer: "2"
      },
      {
        question: "¿Cual fue la final de la temporada 1995/1996?",
        options: ["AC.Milan vs Liverpool", "Juventus vs Ajax", "Real Madrid vs Juventus"],
        answer: "Juventus vs Ajax"
      },
      {
        question: "¿Cuantos goles ha anotado el jugador Raul Gonzales en champions?",
        options: ["68", "71", "75","70"],
        answer: "71"
      },
      {
        question: "¿Quién fue el rival del Real Madrid en la final de la edición inaugural de la Copa de Europa?",
        options: ["Stade de reims", "Inter de milan", "Fiorentina"],
        answer: "Stade de reims"
      },
      {
        question: "¿Quien marco el gol del empate de la epica final de estambul?",
        options: ["Xavi alonso", "Steven gerrard", "Gatusso"],
        answer: "Xavi alonso"
      },
      {
        question: "¿Quien de estos jugadores no ha ganado nunca una chmapions?",
        options: ["Buffon", "Frank lampard", "Robben"],
        answer: "Buffon"
      },
      {
        question: "¿Cual de estos equipos nunca ha ganado una champions?",
        options: ["Aston villa", "Feyernord", "Celtic","Fiorentina"],
        answer: "Fiorentina"
      },
      {
        question: "¿Cual es el entrenador que ha ganado mas titulos de champions?",
        options: ["Pep Guardiola", "Carlo Anchelotti", "Sir Alex Ferguson"],
        answer: "Carlo Anchelotti"
      },
      
      
      
      
    ],
    //Modo dificil
    dificil: [
      {
        question: "¿Qué equipo ha jugado más finales de Champions sin ganarla?",
        options: ["Valencia", "Atlético de Madrid", "Juventus"],
        answer: "Juventus"
      },
      {
        question: "¿Que equipo tiene una champions league sin pertenecer a una de las 5 grandes ligas",
        options: ["Estrella Roja", "Hamburgo", "Molde","Motta"],
        answer: "Estrella Roja"
      },
      {
        question: "¿Qué equipo gano una champions league pero ala vez descendio a segunda en su liga?",
        options: ["Marsella", "Fiorentina", "Juventus","Psg"],
        answer: "Marsella"
      },
      {
        question: "¿En que equipo no jugo Zinedine Zidane?",
        options: ["Real Madrid", "AS cannes", "Juventus","Inter de milan"],
        answer: "Inter de milan"
      },
      {
        question: "¿Qué equipo es conocido como los ciudadanos?",
        options: ["Manchester city", "Atlético de Madrid", "Torino","Celtic"],
        answer: "Manchester city"
      },
      {
        question: "¿En que año gano el Nottingham Forest su primera champions?",
        options: ["1979", "1975", "1984","1968"],
        answer: "1979"
      },
      {
        question: "¿Qué equipo le gano al barcelona de guardiola con 11% de posecion en un partido de champions?",
        options: ["Rangers", "Celtic", "Atalanta","Apoel"],
        answer: "Celtic"
      },
      {
        question: "¿Qué equipo es reconocido o llamado como los merengues",
        options: ["Ac.Milan", "Real Madrid", "Liverpool","Bayern Munich"],
        answer: "Real Madrid"
      },
      {
        question: "¿Que jugador es conocido como Baby Face Killer",
        options: ["Ole Gunnar Solskjær", "Rooney", "Bobby Chartlon","George Best"],
        answer: "Ole Gunnar Solskjær"
      },
      {
        question: "¿Cuantos ecuatorianos han jugador un partido de champions league en total?",
        options: ["14", "10", "8","9","18"],
        answer: "9"
      },
      
      
    ]
  },
  mundial: {
    facil: [
      {
        question: "¿Qué selección ganó el Mundial 2018?",
        options: ["Francia", "Croacia", "Brasil"],
        answer: "Francia"
      },
      {
        question: "¿Qué Pais fue sede del mundial 2006?",
        options: ["Francia", "Alemania", "Portugal"],
        answer: "Alemania"
      },
      {
        question: "¿Los mundiales cada cuanto años se realiza?",
        options: ["5 años ", "4 años", "3 años"],
        answer: "4 años"
      },
      {
        question: "¿En donde sera la sede el proximo mundial?",
        options: ["Canada-USA-Mexico", "USA", "España - Portugal"],
        answer: "Canada-USA-Mexico"
      },
      {
        question: "¿Cual fue la final del mundia de Brasil 2014?",
        options: ["Alemania vs Francia", "Brasil vs Argentina", "Argentina vs Alemania"],
        answer: "Argentina vs Alemania"
      },
      {
        question: "¿Que seleccion de futbol tiene más titulo mundiales?",
        options: ["Brasil", "Argentina", "Alemania"],
        answer: "Brasil"
      },
      {
        question: "¿Que seleccion de futbol es conocida como la garra charrua?",
        options: ["Brasil", "Uruguay", "Paraguay"],
        answer: "Uruguay"
      },
      {
        question: "¿Que jugador ha jugado mas partidos en la historia de los mundiales?",
        options: ["Lionel Messi", "Ronaldo Nazario", "Pele"],
        answer: "Lionel Messi"
      },
      {
        question: "¿Que jugador de los siguientes nunca ha jugado un mundial?",
        options: ["Zlatan Ibrahimović", "Romario", "Cantona"],
        answer: "Zlatan Ibrahimović"
      },
      {
        question: "¿En qué año se jugó el Mundial en España?",
        options: ["1982", "1990", "1994"],
        answer: "1982"
      },

      

    ],
    media: [
      {
        question: "¿En qué año se celebró el primer Mundial?",
        options: ["1928", "1930", "1934"],
        answer: "1930"
      },
      {
        question: "¿En qué Mundial se produjo la famosa Mano de Dios de Maradona?",
        options: ["Mexico 86", "España 82 ", "Italia 90"],
        answer: "Mexico 86"
      },
      {
        question: "¿Qué selección ha sido subcampeona del mundo en más ocasiones?",
        options: ["Paises Bajos", "Francia", "Brasil"],
        answer: "Paises Bajos"
      },
      {
        question: "¿En qué mundial se producio el famoso maracanazo?",
        options: ["1950", "1930", "1954"],
        answer: "1950"
      },
      {
        question: "¿Qué selección ha ganado el Mundial en dos ocasiones consecutivas?",
        options: ["Italia", "Francia", "Brasil"],
        answer: "Italia"
      },
      {
        question: "¿En qué mundial se empezo a utilizar el VAR?",
        options: ["2018", "2022", "2010"],
        answer: "2018"
      },
      {
        question: "¿Quién fue el primer jugador en marcar un gol en un Mundial?",
        options: ["Pele", "Di stefano", "Pedro Cea"],
        answer: "Pedro Cea"
      },
      {
        question: "¿Quien fue el jugador de la frese murio de pie?",
        options: ["Klose", "Roberto Baggio", "Rivaldo"],
        answer: "Roberto Baggio"
      },
      {
        question: "¿En que año Suiza fue sede de un mundial?",
        options: ["1960", "1970", "1954"],
        answer: "1954"
      },
      {
        question: "¿Que tridente era conocido como la triple R?",
        options: ["Ronaldo-Romario-Ronaldihno", "Rivaldo-Ronaldo-Roberto carlos", "Romario-Ronaldo-Rivaldo"],
        answer: "Romario-Ronaldo-Rivaldo"
      },
      

    ],
    dificil: [
      {
        question: "¿Qué jugador es el máximo goleador en Mundiales?",
        options: ["Miroslav Klose", "Pelé", "Ronaldo"],
        answer: "Miroslav Klose"
      },
      {
        question: "¿En qué Mundial se produjo el mayor número de goles por partido?",
        options: ["Francia 1998", "Brasil 1950", "México 1970"],
        answer: "Francia 1998"
      },
      {
        question: "¿Cual es el pais que ha organizado más Copas del Mundo?",
        options: ["Francia", "Brasil", "México"],
        answer: "Brasil"
      },
      {
        question: "¿Que seleccion quedo 4ta en el mundial de Inglaterra 1966?",
        options: ["Yugoslavia", "Hungria", "Union Siovetica","Portugal"],
        answer: "Union Siovetica"
      },
      {
        question: "¿Quien fue el unico jugador que logro dominar la jabulani?",
        options: ["Forlan", "Iniestra", "Xavi","Podolski"],
        answer: "Forlan"
      },
      {
        question: "¿Quien anoto el gol mas rapido de la historia de los mundiales?",
        options: ["Hakan Sukur", "Pele", "Zidane","Ronaldo"],
        answer: "Hakan Sukur"
      },
      {
        question: "¿En que estadio fue la final del mundial 2002?",
        options: ["Yokohama", "Saitama", "Mundialista de Seul","Asiad"],
        answer: "Yokohama"
      },
      {
        question: "¿Cuanto arbitros principales en total hubieron en el mundial 2022?",
        options: ["34", "36", "40","37"],
        answer: "36"
      },
      {
        question: "¿Que país fue descalificado del Mundial de 1950 por no cumplir las reglas de uniformes?",
        options: ["india", "cuba", "paraguay","mexico"],
        answer: "india"
      },
      {
        question: "¿Que seleccion metio mas goles en un mundial?",
        options: ["Brasil 1970", "Alemania 2014", "Italia 2006","Hungria 1954"],
        answer: "Hungria 1954"
      },
    ]
  },
  copa: {
    facil: [
      {
        question: "¿Quién ganó la Copa América 2021?",
        options: ["Brasil", "Argentina", "Uruguay"],
        answer: "Argentina"
      },
      {
        question: "¿Que equipo gano la copa america del centenario?",
        options: ["Chile", "Argentina", "Mexico"],
        answer: "Chile"
      },
      {
        question: "¿Cuantas copas america tiene Brasil?",
        options: ["9", "12", "10"],
        answer: "9"
      },
      {
        question: "¿Quien gano la eurocopa del año 2024?",
        options: ["España", "Alemania", "Inglaterra"],
        answer: "España"
      },
      {
        question: "¿Quien fue el jugador mas joven en debutar una eurocopa?",
        options: ["Marcos Reus", "Lamine Yamal", "Musiala"],
        answer: "Lamine Yamal"
      },
      {
        question: "¿Cual fue lo mas lejos que ha llegado la seleccion de Gales?",
        options: ["Final", "Semifinal", "Cuartos de final"],
        answer: "Semifinal"
      },
      {
        question: "¿Que seleccion fue invitada ala copa america 2019?",
        options: ["Qatar", "Jamaica", "Haiti"],
        answer: "Qatar"
      },
      {
        question: "¿Quien fue el subcampeon de la copa america 2019?",
        options: ["Chile", "Argentina", "Peru"],
        answer: "Peru"
      },
      {
        question: "¿Quien es el ultimo campeon de la copa america?",
        options: ["Argentina", "Colombia", "Brasil"],
        answer: "Argentina"
      },
      {
        question: "¿Que selección ha ganado mas Eurocopas?",
        options: ["Alemania", "España", "Italia"],
        answer: "Alemania"
      },
    ],
    media: [
      {
        question: "¿Cuántas veces ha ganado Uruguay la Copa América?",
        options: ["10", "15", "20"],
        answer: "15"
      },
      {
        question: "¿En qué año se celebró la primera Eurocopa?",
        options: ["1953", "1960", "1964"],
        answer: "1960"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la Eurocopa?",
        options: ["Cristiano Ronaldo", "Pirlo", "Platini"],
        answer: "Cristiano Ronaldo"
      },
      {
        question: "¿Qué jugador ha ganado mas Copas América?",
        options: ["Pele", "Messi", "Vidal"],
        answer: "Vidal"
      },
      {
        question: "¿En que edicion se jugo con 16 equipos la eurocopa?",
        options: ["1990", "1996", "2004"],
        answer: "1996"
      },
      {
        question: "¿Que pais fue el anfitrión de la Copa América 2015?",
        options: ["Chile", "Venezuela", "Colombia"],
        answer: "Chile"
      },
      {
        question: "¿Que seleccion gano el euro del año 1984?",
        options: ["Paises bajos", "Italia", "Francia"],
        answer: "Francia"
      },
      {
        question: "¿Cual es la peor seleccion de la historia de la copa america?",
        options: ["Ecuador", "Venezuela", "Bolivia"],
        answer: "Ecuador"
      },
      {
        question: "¿En que año Grecia quedo campeon?",
        options: ["2003", "2000", "2004"],
        answer: "2004"
      },
      {
        question: "¿Quien fue el maximo goleador de la euro 2012?",
        options: ["Cristiano Ronaldo", "Fernando Torres", "Mario Gomez"],
        answer: "Fernando Torres"
      },
      {
        question: "¿Quien fue el maximo goleador de la copa america 2007?",
        options: ["Kaká", "Luis Fabiano", "Ronaldihno"],
        answer: "Luis Fabiano"
      },
    ],
    dificil: [
      {
        question: "¿Quién marcó el gol decisivo en la final de la Euro 2016?",
        options: ["Cristiano Ronaldo", "Eder", "Griezmann"],
        answer: "Eder"
      },
      {
        question: "¿En qué Copa América Brasil perdió ante Paraguay en la final, en una tanda de penales?",
        options: ["1997", "1999", "2003"],
        answer: "1999"
      },
      {
        question: "¿Que jugador alemán fue el máximo goleador en la Eurocopa 1996?",
        options: ["Jürgen Klinsmann", "Rudi Völler", "Oliver Bierhoff"],
        answer: "Oliver Bierhoff"
      },
      {
        question: "¿Que jugador argentino fue el primero en marcar un gol en una Copa América en 1916?",
        options: ["Guillermo Stábile", "Francisco Varallo", "Antonio Sastre"],
        answer: "Guillermo Stábile"
      },
      {
        question: "¿Qué selección fue subcampeona en la Eurocopa del 80?",
        options: ["Países Bajos", "Checoslovaquia", "Alemania Federal","España"],
        answer: "Países Bajos"
      },
      {
        question: "¿En qué edición de la Eurocopa se implementó por primera vez la regla del -gol de oro-?",
        options: ["1994", "1996", "2004","2000"],
        answer: "1996"
      },
      {
        question: "¿En que edición de la Copa América el partido final entre Brasil y Peru fue suspendido por un error del arbitro?",
        options: ["1955", "1975", "1959","1963"],
        answer: "1959"
      },
      {
        question: "¿Que jugador fue el máximo goleador de la Eurocopa 1988, a pesar de no haber sido campeón?",
        options: ["Marcos van vasten", "Guillit", "Rudi Völler","Dieter Müller"],
        answer: "Marcos van vasten"
      },
      {
        question: "¿Quinn fue el jugador más joven en anotar un gol en la historia de la Eurocopa, en 2004?",
        options: ["Rooney", "Cristiano Ronaldo", "Raul Gonzalez","Benzema"],
        answer: "Rooney"
      },
      {
        question: "¿En qué edición de la Copa América se jugó por primera vez la fase de grupos?",
        options: ["1987", "2001", "1992","1999"],
        answer: "1987"
      },
    ]
  },
  Sudamerica :{
    facil: [
      {
        question: "¿Qué equipo ganó la Copa Libertadores 2020?",
        options: ["Flamengo","Palmeiras","River plate"],
        answer: "Flamengo"
      },
      {
        question: "Qué equipo tiene mas libertadores",
        options: ["Independiente de avellaneda","Boca Juniors","Flamengo"],
        answer: "Independiente de avellaneda"
      },
      {
        question: "¿Qué club ganó la Copa Libertadores en 2015?",
        options: ["Pumas","River plate","Tigres"],
        answer: "River plate"
      },
      {
        question: "¿Qué equipo ganó la Copa Libertadores 2000?",
        options: ["Palmeiras","Vasco da gama","Boca Juniors"],
        answer: "Boca Juniors"
      },
      {
        question: "¿Qué equipo ganó la Copa Libertadores 2008?",
        options: ["Liga de quito","Fluminense","Olimpia"],
        answer: "Liga de quito"
      },
      {
        question: "¿Qué equipo brasileño ganó la Copa Sudamericana 2018?",
        options: ["Atlético Mineiro","Bahia","Atlético Paranaense"],
        answer: "Atlético Paranaense"
      },
      {
        question: "¿Qué equipo chileno ganó la Copa Sudamericana 2011?",
        options: ["Colo colo","Universidad de chile","Cobresal"],
        answer: "Universidad de chile"
      },
      {
        question: "¿Cual club peruano tiene un titulo internacional?",
        options: ["Cienciano","Alianza Lima","Universitario"],
        answer: "Cienciano"
      },
      {
        question: "¿En qué año se jugó la primera edición de la Copa Sudamericana?",
        options: ["2005","2007","2002"],
        answer: "2002"
      },
      {
        question: "¿Qué equipo argentino ganó la Copa Sudamericana 2007?",
        options: ["Racing Club","Independiente de avellaneda","Lanus"],
        answer: "Independiente de avellaneda"
      },
    ],
    media:[
      {
        question: "¿Cual fue el ultimo año que equipo mexicanos participaron?",
        options: ["2015","2016","2019"],
        answer: "2015"
      },
      {
        question: "¿Qué club mexicano llegó a la final de la Copa Libertadores en 2001, pero perdió ante Boca Juniors?",
        options: ["Pumas","America","Cruz Azul"],
        answer: "Cruz Azul"
      },
      {
        question: "¿Qué equipo ganó la Copa Sudamericana 2009, tras derrotar a Liga de Quito en la final?",
        options: ["River plate","Racing","Velez"],
        answer: "Velez"
      },
      {
        question: "¿Qué equipo colombiano ganó la Copa Sudamericana 2015?",
        options: ["Millonarios","America de cali","Atletico nacional"],
        answer: "Atletico nacional"
      },
      {
        question: "¿Que equipo ganó la Copa Sudamericana 2014, derrotando a River Plate en la final??",
        options: ["Huracan","Palmeiras","Bolivar"],
        answer: "Huracan"
      },
      {
        question: "¿En qué edición de la Copa Libertadores participaron equipos de la CONCACAF por primera vez?",
        options: ["2000","2003","2001"],
        answer: "2000"
      },
      {
        question: "¿Qué país ha tenido más clubes ganadores de la Copa Libertadores?",
        options: ["Brasil","Argentina","Uruguay"],
        answer: "Brasil"
      },
      {
        question: "¿Qué jugador fue el máximo goleador de la Copa Libertadores 1992?",
        options: ["Valdano","Romario","Sensini"],
        answer: "Valdano"
      },
      {
        question: "¿Quién es el jugador más joven en anotar un gol en la historia de la Copa Libertadores?",
        options: ["Saviola","Juan Roman Riquelme","James Rodriguez"],
        answer: "Saviola"
      },
      {
        question: "¿En que edicion de la  copa libertadores el Boca Juniors de Carlos Bianchi gano el torneo en la final contra Palmeiras, logrando su tercer título consecutivo?",
        options: ["2007","2000","2003"],
        answer: "2003"
      },
    ],
    dificil:[
      {
        question: "¿Qué jugador es el máximo goleador histórico de la Copa Libertadores con 54 goles?",
        options: ["Luis Suarez","Alberto Spencer","Fernando Morena"],
        answer: "Alberto Spencer"
      },
      {
        question: "¿Qué equipo argentino logró su primer título internacional al ganar la Copa Sudamericana 2005?",
        options: ["Velez","River","Boca"],
        answer: "Velez"
      },
      {
        question: "¿Qué jugador  fue el máximo goleador de la Copa Sudamericana 2016?",
        options: ["Dayron Moreno","Junior Sornoza","Miguel Borja"],
        answer: "Dayron Moreno"
      },
      {
        question: "¿Qué jugador uruguayo fue expulsado en la final de la Copa Libertadores 1988 entre Nacional y Newell's Old Boys?",
        options: ["Hugo de leon","Julio Cesar","Juan Roman Riquelme"],
        answer: "Hugo de leon"
      },
      {
        question: "¿Qué equipo mexicano fue subcampeón de la Copa Sudamericana 2004, perdiendo ante Atlético Nacional en la final?",
        options: ["America","Pachuca","Santos Laguna"],
        answer: "Santos Laguna"
      },
      {
        question: "¿Qué club venezolano alcanzó su mejor posición histórica en la Copa Sudamericana 2017, llegando a las semifinales?",
        options: ["Caracas","Tachira","Bolivar"],
        answer: "Caracas"
      },
      {
        question: "¿Cuantas libertadores tiene Olimpia?",
        options: ["3","5","4","2"],
        answer: "3"
      },
      {
        question: "¿Qué equipo argentino fue el único en ganar la Copa Libertadores invicto, en la edición de 1972?",
        options: ["Independiente","Lanus","River plate"],
        answer: "Independiente"
      },
      {
        question: "¿Qué equipo brasileño eliminó al Real Madrid en la Copa Libertadores 1960, en una edición histórica?",
        options: ["Santos","Peñarol","Palmeiras"],
        answer: "Santos"
      },
      {
        question: "¿Qué jugador anotó un gol en la final de la Copa Libertadores 1966, que permitió a Peñarol ganar el título ante el River Plate de Argentina?",
        options: ["Atilio García","Luis Torres","Fernando Fernandez"],
        answer: "Atilio García"
      },

    ]


  }
  
};

let selectedCompetition = "";//selecionar la competicion
let currentQuiz = [];
let selectedAnswers = {};//elegir la respuesta
let timer; // Variable para manejar el temporizador

function showDifficultyOptions(competition) {
  selectedCompetition = competition;
  document.querySelector("main > section").style.display = "none";
  document.getElementById("difficulty-section").style.display = "block";
}

function startQuiz(difficulty) {
  document.getElementById('digital-clock-timer').style.display = 'block';
  document.getElementById("difficulty-section").style.display = "none";
  const quizSection = document.getElementById("quiz-section");
  quizSection.style.display = "block";
  document.getElementById("quiz-title").textContent = `Quiz de ${selectedCompetition} - Dificultad: ${difficulty}`;
  currentQuiz = quizzes[selectedCompetition][difficulty];
  loadQuestions();

  // Inicia el temporizador
  startDigitalClock(100, () => {
    Swal.fire({
      title: "¡Se acabó el tiempo!",
      text: "Tus respuestas han sido enviadas automáticamente.",
      icon: "warning",
      confirmButtonText: "OK",
    }).then(() => {
      calculateResult();
    });
  });
}

function loadQuestions() {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";
  selectedAnswers = {}; // Resetear answers

  currentQuiz.forEach((item, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `
      <p>${index + 1}. ${item.question}</p>
      ${item.options
        .map(
          (option, i) =>
            `<button onclick="selectAnswer(${index}, '${option}', this)" id="option-${index}-${i}">${option}</button>`
        )
        .join("")}
    `;
    container.appendChild(questionElement);
  });
}

function selectAnswer(questionIndex, option, button) {
  selectedAnswers[questionIndex] = option;

  // Cambiar color de los botones para mostrar selección
  currentQuiz[questionIndex].options.forEach((_, i) => {
    const btn = document.getElementById(`option-${questionIndex}-${i}`);
    btn.style.backgroundColor = "#6fbe6f"; // Reset al color verde
  });

  button.style.backgroundColor = "#f5a524"; // Color naranja para el seleccionado
}

function calculateResult() {
  clearInterval(timer); // Detiene el temporizador
  let correctAnswers = 0;

  currentQuiz.forEach((item, index) => {
    if (selectedAnswers[index] === item.answer) {
      correctAnswers++;
    }
  });

  showResult(correctAnswers);
}
//resetear el juego
function resetGame() {
  clearInterval(timer);
  resetDigitalClock();
  document.getElementById('digital-clock-timer').style.display = 'none';

  // Mostrar solo la sección de competiciones
  document.getElementById('competitions-section').style.display = 'block';
  
  // Ocultar las demás secciones
  document.getElementById('difficulty-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'none';

  selectedCompetition = "";
  currentQuiz = [];
  selectedAnswers = {};
}

//alerta de resultados 
function showResult(correctAnswers) {
  const totalQuestions = currentQuiz.length;
  let title, text, icon;

  if (correctAnswers === totalQuestions) {
    title = "¡Genio!";
    text = "Lo sabes todo de fútbol.";
    icon = "success";
  } else if (correctAnswers >= totalQuestions / 2) {
    title = "¡Casi sabes de todo!";
    text = `Respondiste correctamente ${correctAnswers} de ${totalQuestions} preguntas.`;
    icon = "info";
  } else if (correctAnswers > 2) {
    title = "¡Algo sabes!";
    text = `Respondiste ${correctAnswers} de ${totalQuestions}. ¡Sigue practicando!`;
    icon = "warning";
  } else {
    title = "¡No sabes de fútbol!";
    text = "No lograste responder muchas preguntas correctamente.";
    icon = "error";
  }
//alertas
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: "Volver al inicio",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      resetGame();
    }
  });
}
//Iniciar el temporizador
function startDigitalClock(duration, callback) {
  const clockMinutes = document.getElementById("minutes");
  const clockSeconds = document.getElementById("seconds");
  let remainingTime = duration;

  timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    clockMinutes.textContent = minutes.toString().padStart(2, "0");
    clockSeconds.textContent = seconds.toString().padStart(2, "0");

    if (remainingTime <= 0) {
      clearInterval(timer);
      callback();
    } else {
      remainingTime--;
    }
  }, 1000);
}
//Funcion de resetear el temporizador
function resetDigitalClock() {
  document.getElementById("minutes").textContent = "01";
  document.getElementById("seconds").textContent = "40";
}
