import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import { fetchPropertyItems } from '../../redux/property/property.actions';
import { selectPropertyIsLoading, selectPropertyItems } from '../../redux/property/property.selectors';
import { checkUserSessionAsync } from '../../redux/user/user.actions';

export function Homepage() {
  const dispatch = useDispatch();
  const propertyItems = useSelector(selectPropertyItems);
  const isLoading = useSelector(selectPropertyIsLoading);

  useEffect(() => {
    dispatch(fetchPropertyItems());
    dispatch(checkUserSessionAsync());
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <div>
            {
              propertyItems.map((property) => (
                <p key={property.id}>{property.name}</p>
              ))
            }
          </div>
        )
      }
    </>
  );
}
