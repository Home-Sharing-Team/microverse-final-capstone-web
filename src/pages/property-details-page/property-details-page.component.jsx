import { useParams } from 'react-router-dom';

import './property-details-page.styles.scss';

export function PropertyDetailsPage() {
  const { propertyId } = useParams();

  return (
    <div>{`Property with ID: ${propertyId}`}</div>
  );
}
