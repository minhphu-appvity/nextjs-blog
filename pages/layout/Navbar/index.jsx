import Link from 'next/link'
import styles from '../../../styles/page/Navbar.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import Row from 'react-bootstrap/Row';
import PersonIcon from '@material-ui/icons/Person';
import Container from 'react-bootstrap/Container';
export default function Navbar() {

  return (
    <div className={styles.main}>
      <Container fluid="md">
        <Row>
          <div className={styles.matNavbarMain}>
            <div className={styles.matLogo}>
              <Link href="/">
                <h3>Tin Anime</h3>
              </Link>
            </div>
            <ul className={styles.matMenuList}>
              <li className={styles.matMenuItem}>
                <Link href="/tintuc">
                  <a className={styles.matTitle}>Tin Tức</a>
                </Link>
              </li>
              <li className={styles.matMenuItem}>
                <Link href="/review">
                  <a className={styles.matTitle}>Review</a>
                </Link>
              </li>
              <li className={styles.matMenuItem}>
                <Link href="/manga">
                  <a className={styles.matTitle}>Manga</a>
                </Link>
              </li>
              <li className={styles.matMenuItem}>
                <Link href="/tingame">
                  <a className={styles.matTitle}>Tin Game</a>
                </Link>
              </li>
            </ul>
            <div className={styles.matNavbarSearch}>
              <input type="text" className={styles.matInputSearch} />
              <SearchIcon className={styles.matIcon}></SearchIcon>
            </div>
            <div className={styles.matActionBtn}>
              <Link href="/dangnhap">
                <button className={styles.matButtonLogin}>
                  <span>Login</span>
                  <PersonIcon />
                </button></Link>
            </div>
          </div>
        </Row>

      </Container>

    </div>

  )
}
