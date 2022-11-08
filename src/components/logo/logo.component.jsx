import Icon from '../icon/icon.component';
import './logo.styles.scss';

export function Logo() {
  return (
    <div className="logo">
      <Icon name="logo" size="lg" />
      <span className="logo__text">Home Sharing</span>
    </div>
  );
}
