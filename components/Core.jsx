import BigPlane from "@/public/BigPlane";
import { useEffect, Fragment } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";

function Card({ index, totalSteps, register }) {
  const todayDate = new Date().toISOString().split("T")[0];

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
      <div className="card bg-base-100 shadow-xl max-w-64">
        <div className="card-body gap-6">
          <label className="input input-bordered flex items-center gap-2">
            Country:
            <input
              {...register(`cards[${index - 1}].country`)}
              type="text"
              className="grow"
              placeholder="USA"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            City:
            <input
              {...register(`cards[${index - 1}].city`)}
              type="text"
              className="grow"
              placeholder="LA"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Date:
            <input
              {...register(`cards[${index - 1}].date`)}
              type="text"
              className="grow"
              defaultValue={todayDate}
              placeholder={todayDate}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Time:
            <input
              {...register(`cards[${index - 1}].time`)}
              type="text"
              className="grow"
              placeholder="5:30 pm"
            />
          </label>

          <div className="divider"></div>

          <textarea
            id={`autoGrowTextarea${index}`}
            {...register(`cards[${index - 1}].note`)}
            className="textarea textarea-bordered min-h-min"
            placeholder="Note: Hotel Reservation at 9pm"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function Core() {
  const todayDate = new Date().toISOString().split("T")[0];
  const methods = useForm({
    defaultValues: {
      cards: [
        { country: "", city: "", date: todayDate, time: "", note: "" },
        { country: "", city: "", date: todayDate, time: "", note: "" },
        { country: "", city: "", date: todayDate, time: "", note: "" },
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
  };

  return (
    <FormProvider {...methods}>
      <section className="max-w-5xl mx-auto px-8 py-16 md:py-32 min-h-screen">
        <div className="flex justify-center mb-5">
          <button
            type="button"
            onClick={() => append({})}
            className="btn btn-primary mr-2 btn-md"
          >
            Add New Card
          </button>
          <button
            type="button"
            onClick={() => fields.length > 1 && remove(fields.length - 1)}
            className="btn btn-secondary mr-2 btn-md"
            disabled={fields.length === 1 && fields[0].country === ""}
          >
            Remove Last Card
          </button>

          <button type="submit" className="btn btn-success btn-md">
              Submit
            </button>
        </div>

        <div className="flex flex-wrap gap-5 mb-10">
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
          </form>
        </div>
      </section>
    </FormProvider>
  );
}

export default Core;
