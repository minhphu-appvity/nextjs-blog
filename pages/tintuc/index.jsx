import Layout from '../layout/Layout';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row'

const TinTuc = ({ posts }) => {
  
  return (
    <>
      <Layout />
      <Container>
        <h1>Tin tuc</h1>
        <Row>
          {/* {posts.map(post => (
            <Col lg={3}>
              <Card className={styles.matCard}>
                <img className={styles.matImage} src={post.image} alt={post.tilte} />
                <Card.Title className={styles.matCardTitle}>{post.title}</Card.Title>
                <Card.Footer className={styles.matCardFooter}>
                  <span className={styles.matTitle}>Lượt xem{post.view}</span>
                </Card.Footer>
              </Card></Col>
          ))} */}
        </Row>

      </Container>
    </>
  )
}
// export const getStaticProps = async () => {
//   const posts = await getDataFromAPI()
//   console.log(posts)
//   return {
//     props: {
//       posts
//     }
//   }
// }
export default TinTuc