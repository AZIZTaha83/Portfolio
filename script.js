//<script>
    window.addEventListener('load', () => {
      const loginBox = document.getElementById('login-animation');
      const loginMessage = document.getElementById('login-message');
  
      // Étape 1 : "Connexion en cours..."
      setTimeout(() => {
        loginMessage.textContent = 'Accès autorisé ✓';
      }, 1000); // après 2 secondes
  
      // Étape 2 : disparition de l'animation
      setTimeout(() => {
        loginBox.style.opacity = '0';
        setTimeout(() => loginBox.style.display = 'none', 500);
      }, 2000); // total 3 secondes
    });
 // </script>
  


// Recherche simple dans la page (scroll vers le résultat et surlignage)
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('globalSearchInput');
  const btn = document.getElementById('globalSearchBtn');
  const result = document.getElementById('globalSearchResult');
  let lastMark = null;

  function clearHighlight() {
    if (lastMark) {
      lastMark.outerHTML = lastMark.innerText;
      lastMark = null;
    }
  }

  function searchAndHighlight() {
    clearHighlight();
    const query = input.value.trim();
    if (!query) {
      result.textContent = '';
      return;
    }
    // Recherche dans le body
    const bodyText = document.body.innerText;
    const idx = bodyText.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) {
      result.textContent = 'Aucun résultat trouvé.';
      return;
    }
    // Recherche dans le DOM (éléments visibles)
    let found = false;
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    while(treeWalker.nextNode()) {
      const node = treeWalker.currentNode;
      const pos = node.nodeValue.toLowerCase().indexOf(query.toLowerCase());
      if (pos !== -1 && node.parentElement.id !== 'globalSearchInput') {
        // Surligner le texte trouvé
        const mark = document.createElement('mark');
        mark.textContent = node.nodeValue.substr(pos, query.length);
        lastMark = mark;
        const after = node.splitText(pos);
        after.nodeValue = after.nodeValue.substr(query.length);
        node.parentNode.insertBefore(mark, after);
        // Scroll vers le résultat
        mark.scrollIntoView({behavior:'smooth', block:'center'});
        found = true;
        break;
      }
    }
    result.textContent = found ? 'Résultat trouvé et surligné.' : 'Aucun résultat trouvé.';
  }

  btn.addEventListener('click', searchAndHighlight);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchAndHighlight();
  });
});
//</script>
// Code JavaScript partie 2

    document.addEventListener("DOMContentLoaded", function() {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      const backToTopBtn = document.getElementById('backToTopBtn');
    
      function activateNav() {
        let index = sections.length;
    
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector('.navbar-nav .nav-link[href="#' + sections[index].id + '"]');
        if (activeLink) activeLink.classList.add("active");
      }

      // Gestion du bouton retour en haut
      function toggleBackToTopBtn() {
        if (window.scrollY > 300) {
          backToTopBtn.style.display = 'block';
          setTimeout(() => {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.transform = 'scale(1)';
          }, 10);
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.transform = 'scale(0.8)';
          setTimeout(() => {
            if (window.scrollY <= 300) {
              backToTopBtn.style.display = 'none';
            }
          }, 300);
        }
      }

      // Fonction pour remonter en haut
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

      activateNav();
      toggleBackToTopBtn();
      
      window.addEventListener("scroll", function() {
        activateNav();
        toggleBackToTopBtn();
      });      // Événement clic sur le bouton
      backToTopBtn.addEventListener('click', scrollToTop);      // Gestion du formulaire de contact
      const contactForm = document.getElementById('contact-form');
      const successMessage = document.getElementById('success-message');
      const submitBtn = document.getElementById('submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');      // Gestion simple des boutons de projets dans la modal des compétences
      function setupProjectToggle() {
        // Supprimer les anciens listeners s'il y en a
        removeProjectToggleListeners();
        
        // Bouton pour BUT1
        const toggleBut1 = document.getElementById('toggle-but1-projects');
        const but1Projects = document.getElementById('but1-projects');
        
        if (toggleBut1 && but1Projects) {
          toggleBut1.removeEventListener('click', toggleBut1.clickHandler);
          toggleBut1.clickHandler = () => {
            if (but1Projects.classList.contains('d-none')) {
              but1Projects.classList.remove('d-none');
              toggleBut1.innerHTML = '<i class="fas fa-eye-slash me-1"></i>Masquer projets';
              toggleBut1.classList.remove('btn-outline-success');
              toggleBut1.classList.add('btn-outline-danger');
            } else {
              but1Projects.classList.add('d-none');
              toggleBut1.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
              toggleBut1.classList.remove('btn-outline-danger');
              toggleBut1.classList.add('btn-outline-success');
            }
          };
          toggleBut1.addEventListener('click', toggleBut1.clickHandler);
        }

        // Bouton pour BUT2
        const toggleBut2 = document.getElementById('toggle-but2-projects');
        const but2Projects = document.getElementById('but2-projects');
        
        if (toggleBut2 && but2Projects) {
          toggleBut2.removeEventListener('click', toggleBut2.clickHandler);
          toggleBut2.clickHandler = () => {
            if (but2Projects.classList.contains('d-none')) {
              but2Projects.classList.remove('d-none');
              toggleBut2.innerHTML = '<i class="fas fa-eye-slash me-1"></i>Masquer projets';
              toggleBut2.classList.remove('btn-outline-success');
              toggleBut2.classList.add('btn-outline-danger');
            } else {
              but2Projects.classList.add('d-none');
              toggleBut2.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
              toggleBut2.classList.remove('btn-outline-danger');
              toggleBut2.classList.add('btn-outline-success');
            }
          };
          toggleBut2.addEventListener('click', toggleBut2.clickHandler);
        }

        // Bouton pour BUT3
        const toggleBut3 = document.getElementById('toggle-but3-projects');
        const but3Projects = document.getElementById('but3-projects');
        
        if (toggleBut3 && but3Projects) {
          toggleBut3.removeEventListener('click', toggleBut3.clickHandler);
          toggleBut3.clickHandler = () => {
            if (but3Projects.classList.contains('d-none')) {
              but3Projects.classList.remove('d-none');
              toggleBut3.innerHTML = '<i class="fas fa-eye-slash me-1"></i>Masquer projets';
              toggleBut3.classList.remove('btn-outline-success');
              toggleBut3.classList.add('btn-outline-danger');
            } else {
              but3Projects.classList.add('d-none');
              toggleBut3.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
              toggleBut3.classList.remove('btn-outline-danger');
              toggleBut3.classList.add('btn-outline-success');
            }
          };
          toggleBut3.addEventListener('click', toggleBut3.clickHandler);
        }
      }

      function removeProjectToggleListeners() {
        const toggleBut1 = document.getElementById('toggle-but1-projects');
        const toggleBut2 = document.getElementById('toggle-but2-projects');
        const toggleBut3 = document.getElementById('toggle-but3-projects');
        
        if (toggleBut1 && toggleBut1.clickHandler) {
          toggleBut1.removeEventListener('click', toggleBut1.clickHandler);
        }
        if (toggleBut2 && toggleBut2.clickHandler) {
          toggleBut2.removeEventListener('click', toggleBut2.clickHandler);
        }
        if (toggleBut3 && toggleBut3.clickHandler) {
          toggleBut3.removeEventListener('click', toggleBut3.clickHandler);
        }
      }

      function resetProjectToggle() {
        // Remettre tous les boutons et projets à leur état initial
        const toggleBut1 = document.getElementById('toggle-but1-projects');
        const toggleBut2 = document.getElementById('toggle-but2-projects');
        const toggleBut3 = document.getElementById('toggle-but3-projects');
        const but1Projects = document.getElementById('but1-projects');
        const but2Projects = document.getElementById('but2-projects');
        const but3Projects = document.getElementById('but3-projects');

        // Remettre les boutons à l'état "Voir projets"
        if (toggleBut1) {
          toggleBut1.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
          toggleBut1.classList.remove('btn-outline-danger');
          toggleBut1.classList.add('btn-outline-success');
        }
        if (toggleBut2) {
          toggleBut2.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
          toggleBut2.classList.remove('btn-outline-danger');
          toggleBut2.classList.add('btn-outline-success');
        }
        if (toggleBut3) {
          toggleBut3.innerHTML = '<i class="fas fa-eye me-1"></i>Voir projets';
          toggleBut3.classList.remove('btn-outline-danger');
          toggleBut3.classList.add('btn-outline-success');
        }

        // Masquer tous les projets
        if (but1Projects) but1Projects.classList.add('d-none');
        if (but2Projects) but2Projects.classList.add('d-none');
        if (but3Projects) but3Projects.classList.add('d-none');
      }

      if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
          e.preventDefault();
          
          // Afficher l'état de chargement
          btnText.classList.add('d-none');
          btnLoading.classList.remove('d-none');
          submitBtn.disabled = true;
          
          try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            });
            
            if (response.ok) {
              // Afficher le message de succès
              successMessage.classList.remove('d-none');
              contactForm.reset(); // Vider le formulaire
              
              // Masquer le message après 5 secondes
              setTimeout(() => {
                successMessage.classList.add('d-none');
              }, 5000);
            } else {
              throw new Error('Erreur lors de l\'envoi');
            }
          } catch (error) {
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
          } finally {
            // Restaurer l'état du bouton
            btnText.classList.remove('d-none');
            btnLoading.classList.add('d-none');
            submitBtn.disabled = false;
          }
        });
      }

      // Animation des jauges dans la modal des compétences
      const competencesModal = document.getElementById('competencesModal');      if (competencesModal) {
        competencesModal.addEventListener('shown.bs.modal', function () {
          animateProgressBars();
          setupToggleButtons();
          setupProjectToggle();
        });

        competencesModal.addEventListener('hidden.bs.modal', function () {
          resetProgressBars();
          resetToggleButtons();
          resetProjectToggle();
          removeProjectToggleListeners();
        });
      }

      function animateProgressBars() {
        const progressBars = document.querySelectorAll('#competencesModal .progress-bar');
        
        progressBars.forEach((bar, index) => {
          const targetWidth = bar.style.width;
          bar.style.width = '0%';
          bar.style.transition = 'none';
          
          // Délai progressif pour chaque barre
          setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = targetWidth;
            
            // Animation de pulsation à la fin
            setTimeout(() => {
              bar.style.animation = 'pulse-glow 0.6s ease-in-out';
            }, 1500);
            
          }, index * 200);
        });
      }

      function resetProgressBars() {
        const progressBars = document.querySelectorAll('#competencesModal .progress-bar');
        progressBars.forEach(bar => {
          bar.style.transition = 'none';
          bar.style.animation = 'none';
        });
      }

      function setupToggleButtons() {
        const toggleButtons = document.querySelectorAll('#competencesModal [data-bs-toggle="collapse"]');
        
        toggleButtons.forEach(button => {
          const icon = button.querySelector('i');
          const targetId = button.getAttribute('data-bs-target');
          const targetElement = document.querySelector(targetId);
          
          // Écouter les événements d'ouverture/fermeture
          targetElement.addEventListener('shown.bs.collapse', function () {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
            button.style.transform = 'rotate(180deg)';
          });
          
          targetElement.addEventListener('hidden.bs.collapse', function () {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
            button.style.transform = 'rotate(0deg)';
          });
        });
      }

      function resetToggleButtons() {
        const toggleButtons = document.querySelectorAll('#competencesModal [data-bs-toggle="collapse"]');
        
        toggleButtons.forEach(button => {
          const icon = button.querySelector('i');
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
          button.style.transform = 'rotate(0deg)';
        });
      }
    });
/*  // Code pour faire défiler les onglets automatiquement*/
    document.addEventListener('DOMContentLoaded', () => {
  const tabsOrder = ['but1','but2','but3'];
  const tabButtons = tabsOrder.reduce((acc, key) => {
    acc[key] = document.querySelector(`#projectsTab button[data-bs-target="#${key}"]`);
    return acc;
  }, {});
  const tabInstances = Object.fromEntries(
    tabsOrder.map(key => [key, new bootstrap.Tab(tabButtons[key])])
  );
  let currentIndex = 0;

  function cycleTabs() {
    const key = tabsOrder[currentIndex];
    tabInstances[key].show();
    currentIndex = (currentIndex + 1) % tabsOrder.length;
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const btnAnnual      = document.getElementById('toggle-annual');
  const btnHistorical  = document.getElementById('toggle-historical');
  const annualContent  = document.getElementById('annualContent');
  const histContent    = document.getElementById('historicalContent');

  function showAnnual() {
    annualContent.classList.remove('d-none');
    histContent.classList.add('d-none');
    btnAnnual.classList.replace('btn-outline-primary','btn-primary');
    btnHistorical.classList.replace('btn-primary','btn-outline-primary');
  }

  function showHistorical() {
    histContent.classList.remove('d-none');
    annualContent.classList.add('d-none');
    btnHistorical.classList.replace('btn-outline-primary','btn-primary');
    btnAnnual.classList.replace('btn-primary','btn-outline-primary');
  }

  btnAnnual.addEventListener('click', showAnnual);
  btnHistorical.addEventListener('click', showHistorical);

  // Initialisation à l'ouverture de la modal
  const competencesModal = document.getElementById('competencesModal');
  competencesModal.addEventListener('show.bs.modal', showAnnual);
});

/*CAROUSEL 1 */
const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  let index = 0;

  function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }
/*CAROUSEL 2 */
const slides2 = document.getElementById('slides2');
  const totalSlides2 = slides2.children.length;
  let index2 = 0;

  function showSlide2(i) {
    index2 = (i + totalSlides2) % totalSlides2;
    slides2.style.transform = `translateX(-${index2 * 100}%)`;
  }

  function nextSlide2() {
    showSlide2(index2 + 1);
  }

  function prevSlide2() {
    showSlide2(index2 - 1);
  }


document.addEventListener('DOMContentLoaded', () => {
  const tabsOrder = ['but1', 'but2', 'but3'];
  const tabButtons = tabsOrder.reduce((acc, key) => {
    acc[key] = document.querySelector(`#projectsTab button[data-bs-target="#${key}"]`);
    return acc;
  }, {});
  const tabInstances = Object.fromEntries(
    tabsOrder.map(key => [key, new bootstrap.Tab(tabButtons[key])])
  );
  
  let currentIndex = 0;
  let intervalId = null;

  const autoScrollSwitch = document.getElementById('autoScrollSwitch');
  
  function cycleTabs() {
    currentIndex = (currentIndex + 1) % tabsOrder.length;
    const key = tabsOrder[currentIndex];
    tabInstances[key].show();
  }

  function startAutoScroll() {
    if (intervalId === null) {
      // Premier changement immédiat
      cycleTabs();
      // Puis toutes les 10 secondes
      intervalId = setInterval(cycleTabs, 10000);
    }
  }

  function stopAutoScroll() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Gérer le switch
  autoScrollSwitch.addEventListener('change', function() {
    if (this.checked) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  });

  // Démarrer le défilement automatique si le switch est coché au chargement
  if (autoScrollSwitch.checked) {
    startAutoScroll();
  }

  // Arrêter le défilement si l'utilisateur clique manuellement sur un onglet
  document.querySelectorAll('#projectsTab button[data-bs-toggle="tab"]').forEach(button => {
    button.addEventListener('click', () => {
      if (autoScrollSwitch.checked) {
        // Désactiver le switch
        autoScrollSwitch.checked = false;
        stopAutoScroll();
      }
    });
  });
});