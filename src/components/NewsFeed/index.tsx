import clsx from "clsx";
import "./style.scss";
import { Typography } from "../Typography";
import { dateFormatter, type DateFormat } from "../../units/dateFormatter";
import Divider from "../Divider";
import { NewsCard } from "../NewsCard";
import { useNews } from "../../hooks/useNews";
import { useState } from "react";
import { Pagination } from "../Pagination";
import { SkeletonCard } from "../SkeletonCard";
import emptyStateImg from "../../assets/image/Пустое состояние.png";

type Variable = "company" | "business" | "important";

interface NewsFeedProps {
  title: string;
  className?: string;
  variable: Variable;
  dateFormat?: DateFormat;
}

const dateNow: string = `${new Date()}`;

export const NewsFeed = ({
  title,
  className,
  variable,
  dateFormat = "monthYear",
}: NewsFeedProps) => {
  const [page, setPage] = useState(1);

  const endpoint =
    variable === "important"
      ? "news/feed/company/empty"
      : "news/feed/company/short";

  const { data, loading, error } = useNews({ endpoint, page, perPage: 3 });
  const totalPages = data?.totalPages ?? 1;

  const news = data?.news ?? [];

  return (
    <>
      <section className={clsx("news-feed", className)}>
        <div className="news-feed__content">
          <div className="news-feed__header">
            <div className="news-feed__titles">
              <Typography variable="title">{title}</Typography>
              <Typography variable="caption">
                {dateFormatter(dateNow, dateFormat)}
              </Typography>
            </div>
            <Divider />
          </div>
          <div className="news-feed__cards">
            {loading && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
            )}

            {!loading && error && <p>Ошибка: {error}</p>}

            {!loading && !error && news.length === 0 && (
              <div className="news-feed__empty">
                <img
                  src={emptyStateImg}
                  alt="Нет новостей"
                  loading="lazy"
                  decoding="async"
                />
                <Typography variable="body">Новых новостей нет</Typography>
              </div>
            )}

            {!loading &&
              !error &&
              news.map((item, index) => (
                <NewsCard
                  key={item.id}
                  news={item}
                  showImage={variable !== "business" || index === 0}
                  IsBusiness={variable == "business"}
                />
              ))}
          </div>
          {variable !== "important" && (
            <div className="news-feed__pagination">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
