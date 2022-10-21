const storageKey = 'theme-preference';

const theme = {
  value: getColorPreference(),
};

function getColorPreference() {
    const colorPreference = localStorage.getItem(storageKey);
    if (colorPreference) {
        return colorPreference;
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

function reflectPreference() {
    // console.log('reflectPreference called!');
    if (theme.value === 'light') {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }

    document.getElementById('theme-switch')?.setAttribute('aria-label', theme.value);
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
}

function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';

    setPreference();
}

reflectPreference();

window.onload = () => {
    reflectPreference();

    document.getElementById('theme-switch').addEventListener('click', onClick);
}

window.matchMedia('(prefers-color-scheme: dark)')
.addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
});
