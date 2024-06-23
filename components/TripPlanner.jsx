import { useState } from "react";
import Core from "./Core";
import { toast } from "react-toastify";
import { useTrip } from "./useTrip";

function TripPlanner() {
  const [tripCount, setTripCount] = useState(1);

  const userStatus = useTrip();

  const addNewTrip = () => {
    if (userStatus === "Premium" && tripCount >= 3) {
      toast.error("Maximum of 3 trips reached.");
      return;
    }

    if (userStatus === "VIP" && tripCount >= 5) {
      toast.error("Maximum of 5 trips reached.");
      return;
    }

    if (userStatus === "unpaid" && tripCount >= 1) {
      toast.error("Upgrade to premium to add more trips.");
      return;
    }

    setTripCount(tripCount + 1);
  };

  const removeTrip = () => {
    if (tripCount === 1) {
      toast.error("Minimum of 1 trip required.");
      return;
    }
    setTripCount(tripCount - 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-32 min-h-screen">
      <h2 class="text-center font-extrabold text-4xl md:text-5xl tracking-tight mb-12 md:mb-20">
        Let's your journey begin!
      </h2>
      {Array.from({ length: tripCount }).map((_, index) => (
        <Core
          tripNumber={index + 1}
          addNewTrip={addNewTrip}
          removeTrip={removeTrip}
          tripCount={tripCount}
          key={index}
        />
      ))}
    </section>
  );
}

export default TripPlanner;
