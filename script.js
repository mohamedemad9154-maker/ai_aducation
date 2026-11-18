const languageBtn = document.getElementById('languageBtn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
let currentLanguage = 'en';

languageBtn.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('ar', currentLanguage === 'ar');
  languageBtn.textContent = currentLanguage === 'en' ? 'عربي' : 'English';
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
