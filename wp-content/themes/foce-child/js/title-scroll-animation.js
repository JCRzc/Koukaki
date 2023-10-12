// Défilement des titres

// Supprimer les classes de transition
const targetStory = document.querySelector('.story-h2');
targetStory.classList.remove('story-h2');
const targetStepOne = document.querySelector('.stepOne');
targetStepOne.classList.remove('stepOne');
const targetStepTwo = document.querySelector('.stepTwo');
targetStepTwo.classList.remove('stepTwo');

function setupIntersectionObserver(animationClass, targetClass, targetElement) {

  // Créer l'observateur d'intersection :
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Si l'élément est visible
      if (entry.isIntersecting) {
        // Ajouter la classe d'animation
        targetElement.classList.add(animationClass);
        return;
      }
      // Nous ne sommes pas en intersection, donc supprimer la classe !
      targetElement.classList.remove(animationClass);
    });
  });

  // Indiquer à l'observateur quels éléments à suivre
  observer.observe(document.querySelector(targetClass));
}

setupIntersectionObserver('story-h2', '.observe-story', targetStory);
setupIntersectionObserver('stepOne', '.observe-studio', targetStepOne);
setupIntersectionObserver('stepTwo', '.observe-studio', targetStepTwo);
