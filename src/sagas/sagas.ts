import { all, put, takeLatest, delay } from "typed-redux-saga";
import { slices } from "../redux/slices";
import { login } from "../redux/actions";

function* workFunc({
  payload
}: {
  payload: { email: string; password: string };
}) {
  yield delay(1000);
  yield put(slices.actionForm(payload));
  yield put(slices.actionLoading(true));
  yield delay(2000);
  yield put(slices.actionLoading(false));
  yield delay(2000);
  yield put(slices.actionSuccess(true));
}

function* watchFunc() {
  yield takeLatest(login, workFunc);
}

export default function* rootSaga() {
  yield all([watchFunc()]);
}
