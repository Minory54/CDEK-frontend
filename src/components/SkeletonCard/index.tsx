import "./style.scss";

export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image" />
      <div className="skeleton-wrapper">
        <div className="skeleton skeleton-date" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton-info-wrapper">
          <div className="skeleton skeleton-badge" />
          <div className="skeleton skeleton-stats" />
        </div>
      </div>
    </div>
  );
};
