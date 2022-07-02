
import SearchInput from '../../components/SearchInput'
import styles from '../../styles/Home.module.css'


export default function Home(){

  const handleSearch = (searchValue: string) => {
    console.log(`procura ativado: ${searchValue}`)
  }

  return(
    <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem Vindo (a)</div>
              <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
            </div>
            <div className={styles.headerTopRight}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
              </div>
            </div>
          </div>

          <div className={styles.headerBotton}>
            <SearchInput
              mainColor="#FB9400"
              onSearch={handleSearch}
             />
          </div>
        </header>
    </div>
  )
}