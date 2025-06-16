
// import axios from 'axios';
import { dispatch, getState } from '@/store/store';
import { setSnackbarObj } from '@/store/reducers/alertsSlice';
import { setUserDetail } from '@/store/reducers/userSlice';
import { handleCatchError, handleErrorMessages, setItemInLocalStorage } from '@/utils/helpers';

export const resetPassword = async (_values?: any): Promise<void> => {};

export const forgotPassword = async (_values?: any): Promise<void> => {};

export const handleSignUp = async (userDetails?: any): Promise<boolean | undefined> => {
  try {
    // const response = await axios.post('/register', {
    //   firstName: userDetails.firstName,
    //   lastName: userDetails.lastName,
    //   email: userDetails.email,
    //   password: userDetails.password,
    //   confirmPassword: userDetails.confirmPassword,
    //   zipCode: userDetails.zipCode,
    //   phoneNumber: userDetails.phone,
    //   countryId: userDetails.country,
    //   speciality_Ids: [userDetails.speciality],
    // });

    const response = { status: true, data: { token: { token: 'oat_MjU5.enk2YzNx' } } };

    if (response.status && response.data?.token?.token) {
      dispatch(setSnackbarObj({ message: 'Sign-up successful. Thank you for joining!', severity: 'success' }));
      setItemInLocalStorage('authentication_token', response.data.token.token);
      formatAndSetUserDetail(response.data);
      return true;
    }
    handleErrorMessages((response as any).errors);
  } catch (error) {
    handleCatchError(error);
  }
};

const formatAndSetUserDetail = (data: any) => {
  dispatch(setUserDetail({ id: data.id, name: data.fullName, email: data.email }));
};

export const handleSignIn = async (userDetails?: any): Promise<boolean | undefined> => {
  try {
    // const response = await axios.post('/login', { email: userDetails.email, password: userDetails.password });
    const response = {
      status: true,
      data: {
        token: { type: 'bearer', token: 'oat_MjU5.enk2YzNxb' },
        id: 41,
        fullName: 'Basit Ali',
        email: 'bstali@gmail.com',
      },
      message: 'Logged In Successfully',
    };
    if (response.status && response.data?.token?.token) {
      setItemInLocalStorage('authentication_token', response.data.token.token);
      formatAndSetUserDetail(response.data);
      return true;
    }
    handleErrorMessages((response as any).errors);
  } catch (error) {
    handleCatchError(error);
  }
};

export const getUserByAuthToken = async (): Promise<boolean | undefined> => {
  try {
    if (getState().User.userDetail) return true;

    // const response = await axios.get('/me');
    const response = {
      status: true,
      data: {
        id: 41,
        fullName: 'Saqlain Ali',
        email: 'imhassan66@gmail.com',
      },
      message: 'User fetched successfully',
    };
    if (response.status && response.data) {
      formatAndSetUserDetail(response.data);
      return true;
    }
    handleErrorMessages((response as any).errors);
  } catch (error) {
    handleCatchError(error);
  }
};

// export const fetchMasterData = async (key: string): Promise<void> => {
//   try {
//     if (getState().MasterData[key]?.length) return;
//
//     const response = await axios.post(`/${key}/listing`, { page_size: 2000 });
//     if (response.status && response.data?.data) {
//     }
//   } catch (error) {
//     handleCatchError(error);
//   }
// };
