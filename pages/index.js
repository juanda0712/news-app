import styles from '../styles/Home.module.css';
import PageLayout from '../components/pageLayout';
import Image from 'next/image';
export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length == 0 && <p>No hay articulos que mostrar</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <Image
                width={450}
                height={300}
                alt={'Image for the title ${article.title}'}
                src={article.urlToImage}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

/**
 *
 * Cuando utilizar getServerSideProps?
 * -Cuando tengasn infinitas combinaciones, que se imposible generar todos los estaticos
 * normalmente se utiliza en filtrados
 *
 * Cuando usar getStaticProps?
 * *Cuando hayan finitas peticiones a la api para generar esos estaticos
 * ejemplo de uso: generar todos los blogs de una pagina personal
 */

//Para N requests => Se ejecuta una sola vez en Build-time (o para refrecar la pagina)
export async function getStaticProps() {
  const response = await fetch(
    'https://newsapi.org/v2/everything?q=tesla&from=2022-10-30&sortBy=publishedAt&apiKey=8abf3613a6a4449099c5610d2d336d34'
  );
  const { articles } = await response.json();

  return {
    props: {
      articles: articles.slice(0, 10),
    },
  };
}

//N requests => se ejecuta N veces
//para datos que necesitas MUY Live
//tiene demasiados datos dinamicos

/*
export async function getServerSideProps() {
  const response = await fetch(
    'https://newsapi.org/v2/everything?q=tesla&from=2022-10-29&sortBy=publishedAt&apiKey=8abf3613a6a4449099c5610d2d336d34'
  );
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}
*/
