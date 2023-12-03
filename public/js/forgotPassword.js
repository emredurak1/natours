import { showAlert } from './alerts';

export const forgotPassword = async email => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/forgotPassword',
      data: {
        email,
      },
    });

    if (res.data.status === 'success') {
      showAlert(
        'success',
        `Email sent to ${email} successfully! Please check it!`,
      );
      window.setTimeout(() => {
        location.assign('/');
      }, 2500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
