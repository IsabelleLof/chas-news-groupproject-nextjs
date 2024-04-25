import Navbar from "@/components/Navbar";
import HeaderComponent from "@/components/HeaderComponent";
import NewsCards from "@/components/NewsCards";
import APIKEY from "@/components/APIKeys";
import NewsLayout from "@/components/NewsLayout";
import PageLayout from "@/components/PageLayout";

const DIN_API_NYCKEL = APIKEY;

export async function getStaticProps() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=world&prioritydomain=top&language=en&image=1`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
  };
}

export default function Home({ news }) {
  return (
    <main>
      <PageLayout>
        <HeaderComponent />
        <Navbar />

        <ul>
          <NewsLayout>
            {news.map((article) => (
              <li key={article.article_id}>
                <NewsCards
                  article={article}
                  id={article.article_id}
                  title={article.title}
                  imgSrc={article.image_url}
                  href={`/category/world/${article.article_id}`}
                  desc={article.description}
                ></NewsCards>
              </li>
            ))}
          </NewsLayout>
        </ul>
      </PageLayout>
    </main>
  );
}
