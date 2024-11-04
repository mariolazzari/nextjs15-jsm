// type ApiData<T> = {
//   success: true;
//   data: T;
// };

// type ApiError = {
//   success: false;
//   error: String;
// };

// export type ApiResult<T> = ApiData<T> | ApiError;

export type ApiResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
