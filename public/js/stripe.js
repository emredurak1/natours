import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';

export const bookTour = async tourId => {
  const stripe = await loadStripe(
    'pk_test_51OIxHAGjNkCinOAPK0eD1xXctkKZFIReCBy0Wr4zjH7Jah3IMp8fsrtCo4hBex8keyUcijYBD3Xlh0R6TMbQjVNe00og15cc7o',
  );

  try {
    // 1) Get Checkout session
    const response = await axios.get(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    const session = response.data.session;
    console.log(response, session);

    // 2) Redirect to checkout form
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error');
  }
};
