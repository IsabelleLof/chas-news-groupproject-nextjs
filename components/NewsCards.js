import Link from "next/link";
import { addBookmark, removeBookmark } from "@/redux/bookmarks";
import { useDispatch, useSelector } from "react-redux";

export default function NewsCards({ title, imgSrc, href, desc, id, article }) {
  const dispatch = useDispatch();

  const bookmarks = useSelector((state) => state.bookmark);

  const handleAddBookmark = (article) => {
    dispatch(addBookmark(article));
  };

  const handleRemoveBookmark = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <div className="flex flex-col justify-center items-center border-b-2 max-w-80">
      <img src={imgSrc} />

      <h1 className="text-2xl font-bold">{title}</h1>

      <p className="pb-2">{desc}</p>
      <Link href={href}>Read More</Link>

      {bookmarks.articles.find((bookmark) => bookmark.article_id === id) ? (
        <button onClick={() => handleRemoveBookmark(id)}>
          Remove Bookmark
        </button>
      ) : (
        <button onClick={() => handleAddBookmark(article)}>Bookmark</button>
      )}
    </div>
  );
}
