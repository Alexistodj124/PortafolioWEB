var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Emprendedor', 'Dueño de negocios', 'Wakeboarder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

const titles = [
  'Sobre Mi',
  'Filosofía Profesional',
  'Intereses y Pasatiempos',
  'Objetivo Profesional a Largo Plazo',
  'Logros y Reconocimientos'
];

const texts = [
  'Mi nombre es Alexis Mesias Flores y soy Ingeniero en Ciencias de la Computación y Tecnologías de la Información. Soy un fullstack developer apasionado por los retos y la constante evolución tecnológica.',
  'Mi filosofía es que mientras existan problemas, siempre habrá trabajo. Me motiva la idea de que la tecnología está en constante ascenso y ofrece infinitas posibilidades.',
  'Me apasiona el emprendimiento y disfruto trabajando en proyectos que pueden ayudar a otras empresas a crecer, tal como lo hice en mis inicios.',
  'A largo plazo, aspiro a tener una empresa de software dedicada a crear y vender soluciones tecnológicas a pequeñas y medianas empresas.',
  'Mis habilidades en ventas han sido fundamentales para vender mis servicios a empresas, y es algo de lo que me siento muy orgulloso.'
];

function typeContent(index) {
  if (index < titles.length) {
    new Typed('.about-title', {
      strings: [titles[index]],
      typeSpeed: 20,
      backSpeed: 10,
      backDelay: 1000,
      showCursor: false,
      onComplete: function () {
        new Typed('.about-text', {
          strings: [texts[index]],
          typeSpeed: 15,
          backSpeed: 5,
          backDelay: 1000,
          showCursor: false,
          onComplete: function () {
            setTimeout(function () {
              typeContent(index + 1);
            }, 1000);
          }
        });
      }
    });
  } else {
    setTimeout(function () {
      typeContent(0);
    }, 1000); 
  }
}
typeContent(0);



document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('experienceChart').getContext('2d');
  
  var chartConfig = {
      type: 'bar',
      
      data: {
        labels: ['JavaScript','React','Next', 'Python', 'Django', 'HTML/CSS'],
          datasets: [{
              label: 'Nivel de Manejo',
              data: [85, 75, 65, 70, 80, 90], // Niveles de manejo del 0 al 100
              backgroundColor: [
                  'rgb(5, 231, 220)',
                  'rgb(5, 231, 220)',
                  'rgb(5, 231, 220)',
                  'rgb(5, 231, 220)',
                  'rgb(5, 231, 220)',
                  'rgb(5, 231, 220)'
              ],
              borderColor: [
                  'black',
                  'black',
                  'black',
                  'black',
                  'black',
                  'black'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100
              }
          },
          animation: {
              duration: 5000 
          },
          plugins: {
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          return context.dataset.label + ': ' + context.parsed.y + '%';
                      }
                  }
              }
          }
      }
  };

  var experienceChart = new Chart(ctx, chartConfig);
  function resetChart() {
      experienceChart.destroy();
      experienceChart = new Chart(ctx, chartConfig);
  }
  setInterval(resetChart, 3000);
});



document.addEventListener('DOMContentLoaded', function () {
  var projectTitles = ['Auto Partes Los Luises CRM', 'OBDII Car BLOG'];
  var projectImages = [
    ['./apll1.png', './apll2.png', './apll3.png'], 
    ['./blog1.png', './blog2.png', './blog3.png']  
  ];

  var index = 0; 
  var imageIndex = 0;
  function nextProject() {
      var projectTitleElement = document.getElementById('project-title');
      var projectImageElement = document.getElementById('project-image');
      projectTitleElement.textContent = projectTitles[index];
      projectImageElement.style.backgroundImage = 'url(' + projectImages[index][imageIndex] + ')';
      imageIndex++;
      if (imageIndex >= projectImages[index].length) {
          imageIndex = 0;
          // Increment the index to switch to the next project
          index++;
          // If we reached the end of projects, reset the index to loop back to the first project
          if (index >= projectTitles.length) {
              index = 0;
          }
      }
  }
  nextProject();
  function animateAndChangeProject() {
      var projectImageElement = document.getElementById('project-image');
      projectImageElement.classList.add('animate');
      setTimeout(function () {
          projectImageElement.classList.remove('animate');
          nextProject();
          setTimeout(animateAndChangeProject, 3000);
      }, 1000); 
  }
  animateAndChangeProject();
});


