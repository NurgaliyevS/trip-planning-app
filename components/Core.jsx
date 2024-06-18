import BigPlane from "@/public/BigPlane";
import { useEffect, useState, Fragment } from "react";
import { useForm, FormProvider } from "react-hook-form";

function Card({ index, totalSteps }) {
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

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col items-center justify-center">
      <span>
        {index === 1
          ? "Start"
          : index === totalSteps
          ? "End"
          : "Location " + index}
      </span>
      <div className="card bg-base-100 shadow-xl max-w-64">
        <div className="card-body gap-6">
          <label className="input input-bordered flex items-center gap-2">
            Country:
            <input
              name={`country${index}`}
              type="text"
              className="grow"
              placeholder="USA"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            City:
            <input
              name={`city${index}`}
              type="text"
              className="grow"
              placeholder="LA"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Date:
            <input
              name={`date${index}`}
              type="text"
              className="grow"
              placeholder={todayDate}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Time:
            <input
              name={`time${index}`}
              type="text"
              className="grow"
              placeholder="5:30 pm"
            />
          </label>

          <div className="divider"></div>

          <textarea
            id={`autoGrowTextarea${index}`}
            name={`note${index}`}
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
  const totalSteps = rows.flat().length; // Total number of cards

  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  const addCard = () => {
    const lastRow = rows[rows.length - 1];
    if (lastRow.length < 3) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[newRows.length - 1] = [...lastRow, totalSteps + 1];
        return newRows;
      });
    } else {
      setRows((prevRows) => [...prevRows, [totalSteps + 1]]);
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

  console.log(totalSteps, "total");

  const elements = rows.map((row, rowIndex) => (
    <div key={`row-${rowIndex}`} className="flex flex-wrap gap-5 mb-10">
      {row.map((index, cardIndex) => {
        return (
          <Fragment key={`card-${index}`}>
            <Card index={index} totalSteps={totalSteps} />
            <div className="flex items-center justify-center">
              {cardIndex !== row.length - 1 || rowIndex === rows.length ? (
                <div className="flex items-center justify-center">
                  <BigPlane className="flex items-center justify-center" />
                </div>
              ) : null}
            </div>
          </Fragment>
        );
      })}
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
            disabled={totalSteps === 3}
          >
            Remove Last Card
          </button>
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
