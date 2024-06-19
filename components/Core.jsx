import BigPlane from "@/public/BigPlane";
import { useEffect, Fragment, useState, useRef } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";

function Card({ index, totalSteps, register }) {
  useEffect(() => {
    const textarea = document.getElementById(`autoGrowTextarea${index}`);

    const autoGrow = (element) => {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    };

    if (textarea) {
      textarea.addEventListener("input", () => autoGrow(textarea));
      autoGrow(textarea); // Initial call to set the correct height based on content
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span>
        {index === 1
          ? "Start"
          : index === totalSteps
          ? "End"
          : `Location ${index}`}
      </span>
      <div className="card bg-white border border-gray-200 max-w-64 shadow-xl">
        <div className="card-body gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor={`country${index}`} className="label-text">
              Country
            </label>
            <input
              id={`country${index}`}
              {...register(`cards[${index - 1}].country`)}
              type="text"
              className="input input-bordered grow"
              placeholder="USA"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`city${index}`} className="label-text">
              City
            </label>
            <input
              id={`city${index}`}
              {...register(`cards[${index - 1}].city`)}
              type="text"
              className="input input-bordered grow"
              placeholder="LA"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`date${index}`} className="label-text">
              Date
            </label>
            <input
              id={`date${index}`}
              {...register(`cards[${index - 1}].date`)}
              type="text"
              className="input input-bordered grow"
              defaultValue="1st of August"
              placeholder="1st of August"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`time${index}`} className="label-text">
              Time
            </label>
            <input
              id={`time${index}`}
              {...register(`cards[${index - 1}].time`)}
              type="text"
              className="input input-bordered grow"
              placeholder="5:30 pm"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            />
          </div>

          <div className="divider"></div>

          <textarea
            id={`autoGrowTextarea${index}`}
            {...register(`cards[${index - 1}].note`)}
            className="textarea textarea-bordered min-h-min"
            placeholder="Note: Hotel Reservation at 9pm"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function Core() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

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
    console.log(data);
    if (!session) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    const handleClose = () => setShowModal(false);

    if (showModal && modalElement) {
      modalElement.showModal();
    }

    if (modalElement) {
      modalElement.addEventListener('close', handleClose);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('close', handleClose);
      }
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
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
          <h3 className="font-bold text-lg">To save all data</h3>
          <p className="py-4">You need to login</p>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Core;
