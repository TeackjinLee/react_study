import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

// Redux 액션 타입 상수 정의
const GET_USERS_PENDING = "users/GET_USERS_PEDING";
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "users/GET_USERS_FAILURE";

const GET_USER = "users/GET_USER";
const GET_USER_SUCCESS = "users/GET_USER_SUCCESS";
const GET_USER_FAILURE = "users/GET_USER_FAILURE";

// 사용자 목록을 가져오는 액션 생성자 함수들 정의
const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload,
});

export const getUser = (id) => ({ type: GET_USER, payload: id });
const getUserSuccess = (data) => ({ type: GET_USER_SUCCESS, payload: data });
const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
  error: true,
});

// 사용자 목록을 가져오는 비동기 액션 생성자 함수 정의
export const getUsers = () => async (dispatch) => {
  try {
    // 사용자 목록을 가져오는 중임을 알리는 액션을 dispatch
    dispatch(getUsersPending());
    // axios를 사용하여 외부 API에서 사용자 목록을 요청
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // 사용자 목록을 성공적으로 가져왔을 때, 성공 액션을 dispatch
    dispatch(getUsersSuccess(response));
  } catch (e) {
    // 요청이 실패했을 때, 실패 액션을 dispatch하고 예외를 다시 throw
    dispatch(getUsersFailure(e));
    throw e;
  }
};

const getUserById = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* getUserSaga(action) {
  try {
    const response = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}

// 초기 상태 정의
const initialState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false,
  },
  error: {
    users: null,
    user: null,
  },
};

// 리듀서 정의
function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return { ...state, loading: { ...state.loading, users: true } }; // 사용자 목록을 가져오는 동안 로딩 상태를 true로 설정
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, users: false }, // 요청이 성공하면 로딩 상태를 false로 설정
        users: action.payload.data, // 요청으로 받은 사용자 목록을 상태에 저장
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false }, // 요청이 실패하면 로딩 상태를 false로 설정
        error: { ...state.error, users: action.payload }, // 요청 실패로 인한 오류를 상태에 저장
      };
    case GET_USER:
      return {
        ...state,
        loading: { ...state.loading, user: true },
        error: { ...state.error, user: null },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        user: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        error: { ...state.error, user: action.payload },
      };
    default:
      return state;
  }
}

export default users;
