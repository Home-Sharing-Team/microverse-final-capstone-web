import PropTypes from 'prop-types';
import { CreateHostingForm } from '../create-hosting-form/create-hosting-form.component';
import { Popup } from '../popup/popup.component';

import './create-hosting-popup.styles.scss';

export function CreateHostingPopup({ handleClosePopup }) {
  return (
    <Popup size="sm" handleClosePopup={handleClosePopup}>
      <div className="create-hosting-popup">
        <CreateHostingForm />
      </div>
    </Popup>
  );
}

CreateHostingPopup.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
};
