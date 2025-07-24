import styles from './styles.module.css'

type DefaultButtonProps = {
    icon: React.ReactNode
    color: 'purple' | 'red'
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = 'purple', ...props }: DefaultButtonProps) {
  const buttonTheme = `${styles.button} ${styles[color]}`

  return (
    <>
      <button className={buttonTheme} {...props}>
        {icon}
      </button>
    </>
  );
}
