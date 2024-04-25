import NewsCards from "@/components/NewsCards";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import APIKEY from "@/components/APIKeys";
import HeaderComponent from "@/components/HeaderComponent";
import NewsLayout from "@/components/NewsLayout";
import PageLayout from "@/components/PageLayout";

const DIN_API_NYCKEL = APIKEY;

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=${params.keyword}&prioritydomain=top&language=en&image=1`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function News({ news }) {
  const router = useRouter();

  return (
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
                href={`${router.query.keyword}/${article.article_id}`}
                desc={article.description}
              ></NewsCards>
            </li>
          ))}
        </NewsLayout>
      </ul>
    </PageLayout>
  );
}
