import Link from 'next/link';
import { Destination } from '@/lib/types';
import styles from './DestinationCard.module.css';

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={destination.image_url || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80'}
          alt={destination.name}
          className={styles.image}
        />
        <div className={styles.overlay} />
        <span className={styles.region}>{destination.region}</span>
        <div className={styles.info}>
          <h3 className={styles.name}>{destination.name}</h3>
          <p className={styles.country}>{destination.country}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{destination.description}</p>
        <Link href={`/packages?destination=${destination.id}`} className="btn btn-secondary btn-sm">
          View Packages →
        </Link>
      </div>
    </div>
  );
}
