import s from "./Tabs.module.css";

const Tabs = ({ onTabChange, tabValue }) => {
  return (
    <div className={s.tabs}>
      <button
        name="cheapest"
        onClick={onTabChange}
        autoFocus
        className={tabValue === "cheapest" ? s.activeTab : s.tab}
      >
        Самый дешевый
      </button>
      <button
        name="fastest"
        onClick={onTabChange}
        className={tabValue === "fastest" ? s.activeTab : s.tab}
      >
        Самый быстрый
      </button>
      <button
        name="optimal"
        onClick={onTabChange}
        className={tabValue === "optimal" ? s.activeTab : s.tab}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Tabs;
