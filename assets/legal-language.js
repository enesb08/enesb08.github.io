const languageSections = document.querySelectorAll('[data-language]');

document.querySelectorAll('.language-switch').forEach((navigation) => {
  navigation.hidden = false;
});

document.querySelectorAll('[data-set-language]').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.setLanguage;
    languageSections.forEach((section) => {
      section.hidden = section.dataset.language !== language;
      if (!section.hidden) {
        document.documentElement.lang = language;
        document.title = section.dataset.title;
        document.querySelector('meta[name="description"]').content = section.dataset.description;
        section.querySelector(`[data-set-language="${language}"]`).focus({ preventScroll: true });
      }
    });
  });
});
