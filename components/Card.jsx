import { useEffect } from "react";


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
      <div className="card bg-white border border-gray-200 shadow-xl lg:max-w-64 max-w-96">
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
              type="date"
              className="input input-bordered grow"
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

export default Card;