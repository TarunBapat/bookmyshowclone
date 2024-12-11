import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Api from "../../api/showApi";

const ShowPage = () => {
  const { showId } = useParams();

  useEffect(() => {
    async function fetchShowDetails() {
      const response = await Api.getShowById(showId);
      console.log("show data", response.data.show[0]);
    }
    fetchShowDetails();
  }, []);

  //   useEffect(() => {
  //     // Call confirm booking API

  //     const transactionId = searchParams.get("payment_intent");

  //     if (transactionId) {
  //       fetch("http://localhost:5010/api/booking/confirm", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json", jwttoken: jtwToken },
  //         body: JSON.stringify({
  //           transactionId: searchParams.get("payment_intent"),
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           navigate("/profile/bookings");
  //         });
  //     }
  //   }, [searchParams]);

  return <div className="min-h-screen p-4 bg-gray-100">show details page</div>;
};

export default ShowPage;

// http://localhost:3002/bookings?
// payment_intent=pi_3Pn9ywSHyBJaG3xB0Wo1tAP8&
// payment_intent_client_secret=pi_3Pn9ywSHyBJaG3xB0Wo1tAP8_secret_BjnCp8KnkNd1u8ABDuIvm4VMG&
// redirect_status=succeeded
