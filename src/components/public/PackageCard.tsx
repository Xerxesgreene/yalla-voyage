import { Package } from '@/lib/types';
import styles from './PackageCard.module.css';

interface Props {
  pkg: Package;
}

export default function PackageCard({ pkg }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={pkg.image_url || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80'}
          alt={pkg.title}
          className={styles.image}
        />
        <div className={styles.badges}>
          <span className={styles.badge}>{pkg.duration_days} days</span>
          <span className={styles.badgePrice}>SAR {pkg.price_sar.toLocaleString()}</span>
        </div>
      </div>
      <div className={styles.body}>
        {pkg.destination && (
          <span className={styles.location}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
              <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {pkg.destination.name}, {pkg.destination.country}
          </span>
        )}
        <h3 className={styles.title}>{pkg.title}</h3>
        <p className={styles.description}>{pkg.description}</p>
        {pkg.features && pkg.features.length > 0 && (
          <ul className={styles.features}>
            {pkg.features.slice(0, 3).map((f, i) => (
              <li key={i} className={styles.feature}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" className={styles.featureIcon}>
                  <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
            {pkg.features.length > 3 && (
              <li className={styles.moreFeatures}>+{pkg.features.length - 3} more included</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
