import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <RouterLink href='/about-pomodoro'>
                Entenda como funciona a técnica de pomodoro
            </RouterLink>
            <RouterLink href='/'>
                Tomato &copy; {new Date().getFullYear()}
            </RouterLink>
        </footer>
    )
}
