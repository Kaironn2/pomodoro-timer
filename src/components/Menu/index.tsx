import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { RouterLink } from "../RouterLink";

type availableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as availableThemes || 'dark'
    return storageTheme
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
    
    setTheme((prevTheme) => {
        const nextTheme = prevTheme === 'dark' ? 'light': 'dark'
        return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  })

  return (
    <nav className={styles.menu}>
      <RouterLink
        href="/"
        className={styles.menuLink}
        aria-label="Ir para o início"
        title="Ir para o início"
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        href="/history"
        className={styles.menuLink}
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        href="/settings"
        className={styles.menuLink}
        aria-label="Ir para a página de configurações"
        title="Ir para a página de configurações"
      >
        <SettingsIcon />
      </RouterLink>

      <a
        href="#"
        className={styles.menuLink}
        aria-label="Alterar tema da página"
        title="Alterar tema da página"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
