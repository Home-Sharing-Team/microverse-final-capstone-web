import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import {
  fetchPropertyItemsAsync,
  fetchPropertyItemsByCategoryAsync,
} from '../../redux/property/property.actions';
import {
  selectPropertyIsLoading,
  selectPropertyItems,
} from '../../redux/property/property.selectors';

import './homepage.styles.scss';
import { PropertyCard } from '../../components/property-card/property-card.component';
import { CategorySelector } from '../../components/category-selector/category-selector.component';
import { selectCategoryItems } from '../../redux/category/category.selectors';

const ALL_CATEGORIES_BUTTON_ID = -1;

export function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState(
    ALL_CATEGORIES_BUTTON_ID,
  );

  const dispatch = useDispatch();
  const propertyItems = useSelector(selectPropertyItems);
  const categoryItems = useSelector(selectCategoryItems);
  const isPropertyLoading = useSelector(selectPropertyIsLoading);

  const handleFetchProperties = (categoryId) => {
    if (categoryId === ALL_CATEGORIES_BUTTON_ID) {
      dispatch(fetchPropertyItemsAsync());
    } else {
      dispatch(fetchPropertyItemsByCategoryAsync(categoryId));
    }

    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    handleFetchProperties(ALL_CATEGORIES_BUTTON_ID);
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__top">
        <CategorySelector
          categories={categoryItems}
          handleCategoryButtonClick={handleFetchProperties}
          allButtonId={ALL_CATEGORIES_BUTTON_ID}
          activeButtonId={selectedCategory}
        />
      </div>
      {isPropertyLoading ? (
        <Spinner />
      ) : (
        <div className="homepage__bottom">
          {propertyItems.length > 0 ? (
            <div className="properties-grid">
              {propertyItems.map((property) => (
                <Link key={property.id} to={`/properties/${property.id}`}>
                  <PropertyCard property={property} />
                </Link>
              ))}
            </div>
          ) : (
            <p>
              I&apos;m sorry, we don&apos;t have any property hosted for this
              category. Be the first to host one!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
