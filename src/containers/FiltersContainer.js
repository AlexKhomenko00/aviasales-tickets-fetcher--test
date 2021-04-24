import { useDispatch, useSelector } from "react-redux";

import Filters from "../components/Filters/Filters";
import actions from "../redux/actions";

const FiltersContainer = () => {
  const checkedItems = useSelector((state) => state.stopsFilters);
  const dispatch = useDispatch();

  const handleListItemClick = (e) => {
    const itemName = e.currentTarget.name;
    const isChecked = e.currentTarget.checked;
    dispatch({
      type: actions.toggleStops.toString(),
      payload: { itemName, isChecked },
    });
  };

  return (
    <Filters
      checkedItems={checkedItems}
      onListItemClick={handleListItemClick}
    />
  );
};

export default FiltersContainer;
