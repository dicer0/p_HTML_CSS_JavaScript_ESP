/*Configuración del efecto de partículas en el fondo, agregado con la librería Particle.js, importado
a través del archivo particles.min.js, descargado del siguiente link:
https://vincentgarreau.com/particles.js/
En el primer parámetro del JSON se indica el id del elemento HTML que mostará las partículas.*/
particlesJS("particle-background", {
    "particles": {
      "number": {
        /*Con el atributo value, cambio el numero de partículas.*/
        "value": 250,
        "density": {
          "enable": true,
          /*Con el atributo value_area, cambio la densidad de partículas, 
          si aumento su valor se reduce la densidad, pero si lo reduzco 
          se aumenta.*/
          "value_area": 800
        }
      },
      /*Aquí se puede cambiar el color de la partícula.*/
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        /*Con el atributo random, las partículas aparecen de forma aleatoria.*/
        "random": true,
        "anim": {
          /*Con el atributo random y enable, las partículas aparecen de forma aleatoria.*/
          "enable": true,
          /*Con el atributo speed, se cambia la velocidad con la que se mueven las 
          partículas, puede tener un valor entre 0 y 1.*/
          "speed": 0.1,
          "opacity_min": 0.7,
          "sync": false
        }
      },
      "size": {
        /*Con el atributo size: value, se cambia el tamaño de las partículas.*/
        "value": 1,
        "random": true,
        "anim": {
          /*Con el atributo size y enable, se cambia el tamaño de las partículas.*/
          "enable": true,
          /*Con el atributo speed, se cambia la velocidad con la que se mueven las 
          partículas, puede tener un valor entre 1 y 100.*/
          "speed": 1,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        /*Con el atributo speed, se cambia la velocidad con la que se mueven las 
        partículas, puede tener un valor entre 1 y 100.*/
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      /*detect_on window: Con este parámetro se logra que afecte el mouse a las partículas.*/
      "detect_on": "window",
      "events": {
        /*mode repulse: Indicamos que el mouse empuje a las partículas cuando pasa sobre ellas.*/
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          /*Con distance indicamos la distancia que empuja el mouse a las partículas cuando pasa 
          sobre ellas, solo afecta cuando este modo haya sido asignado a onhover u onclick.*/
          "distance": 35,
          "duration": 0.1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);