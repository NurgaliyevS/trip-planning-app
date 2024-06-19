import BigPlane from "@/public/BigPlane";
import { useEffect, Fragment, useState, useRef } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";
import Card from "./Card";
import axios from "axios";

function Core() {
  const [width, setWidth] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const saveTrips = async (data) => {
    try {
      const response = await axios.post("/api/trips/trip", { ...data, email: session?.user?.email });
      console.log(response.data, 'data');
    } catch (error) {
      console.error(error);
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
        { country: "", city: "", date: "1st of August", time: "", note: "" },
        { country: "", city: "", date: "5th of August", time: "", note: "" },
        {
          country: "",
          city: "",
          date: "20th of August",
          time: "",
          note: "",
        },
      ],
    },
  });

  const { handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cards",
  });

  const onSubmit = (data) => {
    if (!session) {
      localStorage.setItem("savedData", JSON.stringify(data));
      setShowModal(true);
    }
    if (session) {
      saveTrips(data);
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
              onClick={() => append({})}
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
            {fields.map((field, index) => {
              return (
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
              );
            })}
          </div>

          <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                type="submit"
                className="btn btn-success btn-md bg-green-500 text-white btn-wide"
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
