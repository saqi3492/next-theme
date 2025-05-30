import moment from "moment";
import { setSnackbarObj } from "../../store/reducers/alertsSlice";
import { dispatch } from "../../store/store";
import { config } from "@/config/config";

export interface GetFormattedDate {
  (isoDate: string): string;
}

export const getFormattedDate: GetFormattedDate = (isoDate) => {
  const momentObj = moment(isoDate);

  if (momentObj.isValid()) {
    return momentObj.format(config.dateFormat);
  }
  return '';
};


export const setItemInLocalStorage = (key: string, value: any, isStringify: boolean = true): void => {
  localStorage.setItem(key, isStringify ? JSON.stringify(value) : value);
};

export const getLocalStorageItem = (key: string, defaultValue: any = null, isParse: boolean = true): any => {
  try {
    const value = localStorage.getItem(key);
    return (isParse ? JSON.parse(value as string) : value) ?? defaultValue;
  } catch (error) {
    handleCatchError(error);
    return defaultValue;
  }
};

export const handleLogout = (): void => {
  localStorage.clear();
  window.location.reload();
};

export const handleErrorMessages = (errors: { message: string }[]): void => {
  const message = errors?.map?.((e) => e.message + '\n').join('') || 'Oops! Something went wrong.';

  dispatch(setSnackbarObj({ message, severity: 'error' }));
};

export const handleCatchError = (error: unknown): void => {
  // eslint-disable-next-line no-console
  console.log('error', error);
};
