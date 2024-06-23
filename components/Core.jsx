import BigPlane from "@/public/BigPlane";
import { useEffect, Fragment, useState, useRef } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";
import Card from "./Card";
import axios from "axios";
import { toast } from "react-toastify";

function Core({ tripNumber, addNewTrip, removeTrip, tripCount }) {
  const [width, setWidth] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [userStatus, setUserStatus] = useState("");

  const modalRef = useRef(null);

  const { data: session } = useSession();
  const sessionEmail = session?.user?.email;
  const sessionId = session?.user?.id;
  const hasFetchedRef = useRef(false);

  const methods = useForm({
    defaultValues: {
      cards: [
        {
          country: "",
          city: "",
          date: "1st of August",
          time: "",
          note: "",
          id: "",
        },
        {
          country: "",
          city: "",
          date: "5th of August",
          time: "",
          note: "",
          id: "",
        },
        {
          country: "",
          city: "",
          date: "20th of August",
          time: "",
          note: "",
          id: "",
        },
      ],
    },
  });

  const { handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cards",
  });

  useEffect(() => {
    if (sessionEmail && !hasFetchedRef.current) {
      getTrips();
    }
  }, [sessionEmail]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const modalElement = modalRef.current;
    const handleClose = () => setShowModal(false);

    if (showModal && modalElement) {
      modalElement.showModal();
    }

    if (modalElement) {
      modalElement.addEventListener("close", handleClose);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("close", handleClose);
      }
    };
  }, [showModal]);

  useEffect(() => {
    if (sessionId) {
      getUserById(sessionId);
    }
  }, [sessionId]);

  const saveTrips = async (data, isUpdate = false) => {
    try {
      setIsLoading(true);
      if (isUpdate) {
        const response = await axios.put("/api/trips/trip", {
          ...data,
          email: sessionEmail,
          trip_number: tripNumber,
        });
        const updatedCard = data.cards.map((card, index) => ({
          ...card,
          id: response.data.data[index]._id,
        }));
        methods.reset({ cards: updatedCard });
        toast.success("Trips updated successfully!");
      } else {
        const response = await axios.post("/api/trips/trip", {
          ...data,
          email: sessionEmail,
          trip_number: tripNumber,
        });
        const updatedCards = data.cards.map((card, index) => ({
          ...card,
          id: response.data.data[index]._id,
        }));
        methods.reset({ cards: updatedCards });
        toast.success("Trips saved successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getTrips = async () => {
    try {
      setIsLoadingDelete(true);
      const response = await axios.get(
        `/api/trips/trip?email=${sessionEmail}&tripId=${tripNumber}`
      );
      const trips = response.data?.data;

      if (trips && trips?.length === 0) return;

      const cards = trips.map((trip) => ({
        country: trip.country,
        city: trip.city,
        date: trip.date,
        time: trip.time,
        note: trip.note,
        id: trip._id,
      }));

      if (cards?.length === 0) return;
      methods.reset({ cards });
      hasFetchedRef.current = true;
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await axios.get("/api/users/user?id=" + id);
      const user = response.data?.data;
      if (user?.user_status) {
        setUserStatus(user.user_status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTrip = async (id) => {
    try {
      const response = await axios.delete(`/api/trips/trip?id=${id}`);
      if (
        response.data?.success ||
        response.data?.message === "Trip not found"
      ) {
        toast.success("Trip deleted successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
    }
  };

  const onSubmit = (data) => {
    const hasIds = data.cards.some((card) => card.id);
    if (!session) {
      localStorage.setItem("savedData", JSON.stringify(data));
      setShowModal(true);
    }
    if (session) {
      saveTrips(data, hasIds);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleLogin = () => {
    window.location.href = "/api/auth/signin";
    handleCloseModal();
  };

  const handleRemoveLastCard = () => {
    if (fields.length > 1) {
      const getValues = methods.getValues();
      const lastCardId = getValues.cards[getValues.cards.length - 1].id;
      remove(fields.length - 1);
      if (lastCardId) {
        deleteTrip(lastCardId);
      }
    }
  };

  const handleUnpaidUser = () => {
    if (fields?.length === 5) {
      toast.error("Please upgrade to VIP to add more locations.");
    } else if (fields?.length <= 4) {
      addNewCard();
    }
  };

  const handlePremiumUser = () => {
    if (fields?.length === 10) {
      toast.error("Please upgrade to VIP to add more locations.");
    } else if (fields?.length <= 9) {
      addNewCard();
    }
  };

  const handleVipUser = () => {
    if (fields?.length === 20) {
      toast.error("You have reached the maximum limit of locations.");
    } else if (fields?.length <= 19) {
      addNewCard();
    }
  };

  const addNewCard = () => {
    append({
      country: "",
      city: "",
      date: "",
      time: "",
      note: "",
      id: "",
    });
  };

  const checkUserStatus = () => {
    if (userStatus?.length && userStatus === "unpaid") {
      handleUnpaidUser();
    }
    if (userStatus?.length && userStatus === "Premium") {
      handlePremiumUser();
    }

    if (userStatus?.length && userStatus === "VIP") {
      handleVipUser();
    }

    if (!userStatus?.length) {
      handleUnpaidUser();
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className={`max-w-5xl mx-auto px-8 min-h-screen ${tripCount > 1 ? "pb-16" : ""} ${tripCount > 1 ? "md:pb-32" : ""}`}>
          <form
            id={`trip-form-${tripNumber}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center mb-5">
              <button
                type="button"
                onClick={checkUserStatus}
                className="btn mr-2 btn-md btn-active text-white"
              >
                Add New Card
              </button>
              <button
                type="button"
                onClick={handleRemoveLastCard}
                className="btn btn-error text-white btn-md"
                disabled={fields.length === 1 || isLoadingDelete}
              >
                Remove Last Card
              </button>
            </div>

            <div
              className={`flex flex-wrap gap-5 mb-10 items-center justify-center lg:justify-start ${
                fields?.length === 1 ? "lg:justify-center" : ""
              }`}
            >
              {fields.map((field, index) => (
                <Fragment key={field.id}>
                  {width >= 724 && (
                    <>
                      <div className="flex flex-col items-center justify-between">
                        <Card
                          index={index + 1}
                          totalSteps={fields.length}
                          register={methods.register}
                        />
                      </div>
                      {index !== fields.length - 1 && (
                        <div className="flex items-center justify-center">
                          {index % 3 !== 2 && <BigPlane />}
                        </div>
                      )}
                    </>
                  )}
                  {width < 724 && (
                    <div className="flex flex-col items-center justify-between gap-7">
                      <Card
                        index={index + 1}
                        totalSteps={fields.length}
                        register={methods.register}
                      />
                      {index !== fields.length - 1 && <BigPlane />}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <div className="flex justify-center mt-10 flex-col items-center gap-10 relative">
              <button
                type="submit"
                className="btn btn-success btn-md bg-green-500 text-white btn-wide z-10"
                disabled={isLoading}
              >
                Submit
              </button>

              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                      Premium ⭐️
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`btn btn-md btn-secondary btn-wide text-center z-10 ${
                      userStatus?.length && userStatus !== "unpaid"
                        ? "btn-primary"
                        : "btn-disabled"
                    }`}
                    onClick={addNewTrip}
                  >
                    Add New Trip
                  </button>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                    <span className="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                      VIP 🚀
                    </span>
                  </div>
                </div>
                <div className={`relative ${tripCount === 1 ? "hidden" : "block"}`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                      Premium ⭐️
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`btn btn-md btn-secondary btn-wide text-center z-10 ${
                      userStatus?.length && userStatus !== "unpaid"
                        ? "btn-warning"
                        : "btn-disabled"
                    }`}
                    onClick={removeTrip}
                  >
                    Remove Trip
                  </button>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                    <span className="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                      VIP 🚀
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </FormProvider>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Save Your Data</h3>
          <p className="py-4">Please log in to save your progress.</p>
          <div className="modal-action">
            <button
              className="btn btn-success btn-md bg-green-500 text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <button className="btn btn-md" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Core;
