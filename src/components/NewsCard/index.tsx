import { IconEye, IconThumbUp } from "@tabler/icons-react";
import type { NewsItem } from "../../types/news";
import { dateFormatter } from "../../units/dateFormatter";
import Chip from "../Chip";
import { Typography } from "../Typography";
import "./style.scss";

interface NewsCardProps {
  news: NewsItem;
  showImage?: boolean;
  IsBusiness?: boolean;
}

const buildAssetUrl = (assetPath?: string) => {
  if (!assetPath) return "";

  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  const normalized = assetPath.replace(/^\/+/, "");

  if (normalized.startsWith("assets/")) {
    return `${window.location.origin}/${normalized}`;
  }

  return `${window.location.origin}/assets/${normalized}`;
};

export const NewsCard = ({
  news,
  showImage = true,
  IsBusiness = false,
}: NewsCardProps) => {
  const imagePath = news.cover?.images?.[0]?.s;
  const newsCoverImage = buildAssetUrl(imagePath);

  if (IsBusiness) {
    return (
      <>
        <article className="news-card--business">
          {showImage && newsCoverImage && (
            <div className="news-card__header">
              <div className="news-card__cover">
                <img
                  className="news-card__image"
                  src={newsCoverImage}
                  alt={news.title}
                />
              </div>
              <Chip variable="warning" hasIcon isRounded>
                Топ новость
              </Chip>
            </div>
          )}

          <div className="news-card__content">
            <Typography variable="body">{news.title}</Typography>

            <div className="news-card__info news-card__info--business">
              <div className="news-card__rubrics">
                {news.directions.map((direction) => (
                  <Chip variable="line" key={direction.id}>
                    {direction.name}
                  </Chip>
                ))}
                {news.rubrics.map((rubdic) => (
                  <Chip variable="line" key={rubdic.id}>
                    {rubdic.name}
                  </Chip>
                ))}
              </div>

              <Typography variable="body" isBase>
                {dateFormatter(news.publishedAt, "dateTime")}
              </Typography>

              <div className="news-card__stats">
                <div className="news-card__stats-wrapper">
                  <IconThumbUp size={14} />
                  <Typography variable="caption">{news.likeCount}</Typography>
                </div>
                <div className="news-card__stats-wrapper">
                  <IconEye size={14} />
                  <Typography variable="caption">{news.viewCount}</Typography>
                </div>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }

  return (
    <>
      <article className="news-card">
        {newsCoverImage && (
          <div className="news-card__cover">
            <img
              className="news-card__image"
              src={newsCoverImage}
              alt={news.title}
            />
          </div>
        )}

        <div className="news-card__content">
          <Typography variable="body" isBase>
            {dateFormatter(news.publishedAt, "dateTime")}
          </Typography>

          <Typography variable="body">{news.title}</Typography>

          <div className="news-card__info">
            <div className="news-card__rubrics">
              {news.directions.map((direction) => (
                <Chip variable="secondary" key={direction.id}>
                  {direction.name}
                </Chip>
              ))}
              {news.rubrics.map((rubdic) => (
                <Chip variable="info" key={rubdic.id}>
                  {rubdic.name}
                </Chip>
              ))}
            </div>

            <div className="news-card__stats">
              <div className="news-card__stats-wrapper">
                <IconThumbUp size={14} />
                <Typography variable="caption">{news.likeCount}</Typography>
              </div>
              <div className="news-card__stats-wrapper">
                <IconEye size={14} />
                <Typography variable="caption">{news.viewCount}</Typography>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
