import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import NewsCards from "@/components/NewsCards";
import HeaderComponent from "@/components/HeaderComponent";
import NewsLayout from "@/components/NewsLayout";
import PageLayout from "@/components/PageLayout";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmark);

  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <Navbar />
        <div>
          {bookmarks.articles.length === 0 ? (
            <h2>You have no bookmarks</h2>
          ) : (
            <ul>
              <NewsLayout>
                {bookmarks.articles.map((article) => (
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
          )}
        </div>
      </PageLayout>
    </>
  );
}
