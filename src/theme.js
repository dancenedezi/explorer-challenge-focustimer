export const theme = document.getElementById('toggle-mode')

export function toggleTheme() {
  theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
  })
}