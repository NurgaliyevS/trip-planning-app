import BigPlane from "@/public/BigPlane";
import { useEffect, useState, Fragment } from "react";
import { useForm, FormProvider } from "react-hook-form";

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

      // Initial call to set the correct height based on content
      autoGrow(textarea);
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
  const [rows, setRows] = useState([[1, 2, 3]]); // Initialize with one row containing three cards
  const methods = useForm();
  const { handleSubmit } = methods;

  const addCard = () => {
    const lastRow = rows[rows.length - 1];
    if (lastRow.length < 3) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[newRows.length - 1] = [...lastRow, rows.flat().length + 1];
        return newRows;
      });
    } else {
      setRows((prevRows) => [...prevRows, [rows.flat().length + 1]]);
    }
  };

  const removeCard = () => {
    if (rows.length > 1) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        newRows.pop();
        return newRows;
      });
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const elements = rows.map((row, rowIndex) => (
    <div key={`row-${rowIndex}`} className="flex flex-wrap gap-5 mb-10">
      {row.map((index, cardIndex) => (
        <Fragment key={`card-${index}`}>
          <Card index={index} totalSteps={rows.flat().length} register={methods.register} />
          {cardIndex !== row.length - 1 && (
            <div className="flex items-center justify-center">
              <BigPlane className="flex items-center justify-center" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  ));

  return (
    <FormProvider {...methods}>
      <section className="max-w-5xl mx-auto px-8 py-16 md:py-32 min-h-screen">
        <div className="flex justify-center mb-5">
          <button
            type="button"
            onClick={addCard}
            className="btn btn-primary mr-2 btn-md"
          >
            Add New Card
          </button>
          <button
            type="button"
            onClick={removeCard}
            className="btn btn-secondary"
            disabled={rows.length === 1 && rows[0].length === 3}
          >
            Remove Last Card
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {elements}
          <div className="flex justify-center mt-10">
            <button type="submit" className="btn btn-success btn-wide">
              Submit
            </button>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}

export default Core;
