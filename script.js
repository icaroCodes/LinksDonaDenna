document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
            
    // Eu coloquei LocalStorage para salvar a preferencia do tema e carregar o estado salvo
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
    if (savedTheme) {
        body.className = savedTheme;

    }

    else if (prefersDark) {
        body.className = 'dark';     
    }
            
    else {
        body.className = 'light';
    }

    // Eu coloquei isso para atualizar o ícone do tema
    updateToggleIcon(body.className === 'dark');

    // Essa função é responsável pela alternancia do tema
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark');
                
        if (isDark) {
            body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }

        else {
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
        updateToggleIcon(isDark);

            });

    // Essa função serve para atualizar o ícone
    function updateToggleIcon(isDark) {
        const icon = toggleButton.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
        });