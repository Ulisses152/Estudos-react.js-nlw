import styles from'./styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'

export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podecastr"/>

      <p>O melhor pra você ouvir, sempre</p>
      <span>{currentDate}</span>

    </header>
  );
}