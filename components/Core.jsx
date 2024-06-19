import BigPlane from "@/public/BigPlane";
import { useEffect, Fragment, useState, useRef } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";
import Card from "./Card";
import axios from "axios";
import { toast } from "react-toastify";

function Core() {
  const [width, setWidth] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

  const saveTrips = async (data, isUpdate = false) => {
    try {
      setIsLoading(true);
      if (isUpdate) {
        const response = await axios.put("/api/trips/trip", {
          ...data,
          email: session?.user?.email,
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
          email: session?.user?.email,
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

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: session } = useSession();

  const methods = useForm({
    defaultValues: {
      cards: [
        { country: "", city: "", date: "1st of August", time: "", note: "", id: "" },
        { country: "", city: "", date: "5th of August", time: "", note: "", id: "" },
        { country: "", city: "", date: "20th of August", time: "", note: "", id: "" },
      ],
    },
  });

  const { handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cards",
  });

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

  return (
    <>
      <FormProvider {...methods}>
        <section className="max-w-5xl mx-auto px-8 py-16 md:py-32 min-h-screen">
          <div className="flex justify-center mb-5">
            <button
              type="button"
              onClick={() => append({ country: "", city: "", date: "", time: "", note: "", id: "" })}
              className="btn mr-2 btn-md btn-active text-white"
            >
              Add New Card
            </button>
            <button
              type="button"
              onClick={() => fields.length > 1 && remove(fields.length - 1)}
              className="btn btn-error text-white btn-md"
              disabled={fields.length === 1 && fields[0].country === ""}
            >
              Remove Last Card
            </button>
          </div>

          <div className="flex flex-wrap gap-5 mb-10 items-center justify-center lg:justify-start">
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

          <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                type="submit"
                className="btn btn-success btn-md bg-green-500 text-white btn-wide"
                disabled={isLoading}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
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
