import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'
import styles from './styles.module.scss'

export function Header(){

  const currentData = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr
  })
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Logo da Aplicação" />

      <p> O Melhor para você ouvir, sempre</p>

      <span>{currentData}</span>
    </header>
  )
}