import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <RouterLink href='/about-pomodoro'>
                Entenda como funciona a técnica de pomodoro
            </RouterLink>
            <RouterLink href='/'>
                Kairos &copy; {new Date().getFullYear()}
            </RouterLink>
        </footer>
    )
}
