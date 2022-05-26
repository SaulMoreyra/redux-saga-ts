import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as asyncActions from "../redux/actions";
import { slices as pureActions } from "../redux/slices";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...asyncActions, ...pureActions }, dispatch);
};

export default useActions;
