import { useDispatch, useSelector } from "react-redux";
import Tabs from "../components/Tabs/Tabs";
import actions from "../redux/actions";

const TabsContainer = () => {
  const tabValue = useSelector((store) => store.tabValue);
  const dispatch = useDispatch();

  const handleTabValueChange = (e) => {
    dispatch({
      type: actions.setTabValue.toString(),
      payload: { tabValue: e.target.name },
    });
  };
  return <Tabs onTabChange={handleTabValueChange} tabValue={tabValue} />;
};

export default TabsContainer;
