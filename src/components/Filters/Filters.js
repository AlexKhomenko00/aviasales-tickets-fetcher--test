import s from "./Filters.module.css";

const Filters = ({ checkedItems, onListItemClick }) => {
  return (
    <aside className={s.stopsCount}>
      <h2 className={s.stopsCountTitle}>Колличество пересадок</h2>
      <ul className={s.stopsList}>
        {checkedItems.map((item) => (
          <li key={item.key} className={s.stopsItem}>
            <label className={s.stopsLabel}>
              <input
                type="checkbox"
                className={s.stopItemCheckbox}
                name={item.name}
                checked={item.checked}
                onChange={onListItemClick}
              />
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Filters;
