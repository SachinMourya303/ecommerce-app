import { placeOrderRequest } from "./ordersForm";

export const handlePayment = async (totalAmount, dispatch, navigate, customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products) => {
    try {

        const { data: orderData } = await axios.post(`${import.meta.env.VITE_SERVER_URI}/payment/create-order`, { amount: totalAmount, currency: "INR" });

        const options = {
            key: import.meta.env.VITE_RZP_KEY,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Trendora",
            description: "Order Payment",
            order_id: orderData.id,

            handler: async (res) => {
                console.log("Payment Success:", res);
                await placeOrderRequest(dispatch, navigate, customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products);
                navigate("/myorders");
            },

            prefill: { email: customer_email, contact: customer_phone },
            theme: { color: "#7f1d1d" }
        };

        new window.Razorpay(options).open();

    } catch (err) {
        toast.error(err.message);
    }
};
