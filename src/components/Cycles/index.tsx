import styles from './styles.module.css'

export function Cycles() {
    const workTime = `${styles.cycleDot} ${styles.workTime}`
    const shortBreakTime = `${styles.cycleDot} ${styles.shortBreakTime}`
    const longBreakTime = `${styles.cycleDot} ${styles.longBreakTime}`
    
    return (
    <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cycleDots}>
            <span className={workTime}></span>
            <span className={shortBreakTime}></span>
            <span className={workTime}></span>
            <span className={shortBreakTime}></span>
            <span className={workTime}></span>
            <span className={shortBreakTime}></span>
            <span className={workTime}></span>
            <span className={longBreakTime}></span>
        </div>
    </div>)
}
