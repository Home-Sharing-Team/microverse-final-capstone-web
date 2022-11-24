/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { CYCLE_TYPES } from '../../utils/cycle.utils';
import { CreateHostingForm } from '../create-hosting-form/create-hosting-form.component';
import { Popup } from '../popup/popup.component';

import './create-hosting-popup.styles.scss';

export function CreateHostingPopup({
  hostings,
  handleClosePopup,
  handleCreateHosting,
}) {
  const availableCycleOptions = Object.values(CYCLE_TYPES)
    .filter((cycle) => !hostings.some((hosting) => hosting.cycle === cycle));

  return (
    <Popup size="sm" handleClosePopup={handleClosePopup}>
      <div className="create-hosting-popup">
        <CreateHostingForm
          availableCycleOptions={availableCycleOptions}
          handleSubmitCallback={handleCreateHosting}
        />
      </div>
    </Popup>
  );
}

CreateHostingPopup.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
  hostings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCreateHosting: PropTypes.func.isRequired,
};
