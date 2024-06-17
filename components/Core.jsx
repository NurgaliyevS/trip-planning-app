import BigPlane from "@/public/BigPlane";

function Card() {
  const todayDate = new Date().toISOString().split("T")[0];
  return (
    <div className="card bg-base-100 shadow-xl max-w-72">
      <div className="card-body gap-6">
        <label className="input input-bordered flex items-center gap-2">
          Country:
          <input type="text" className="grow" placeholder="USA" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          City:
          <input type="text" className="grow" placeholder="LA" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Date:
          <input type="text" className="grow" placeholder={todayDate} />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Time:
          <input type="text" className="grow" placeholder="5:30 pm" />
        </label>

        <div className="divider"></div>

        {/* textarea autogrowing*/}
        <textarea
          className="textarea textarea-bordered min-h-min"
          placeholder="Note: Hotel Reservation at 9pm"
        ></textarea>
      </div>
    </div>
  );
}

function Core() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16 md:py-32 min-h-screen">
      <div className="flex lg:flex-row flex-col gap-5">
        <Card />

        <div className="flex justify-center items-center">
          <BigPlane />
        </div>

        <Card />

        <div className="flex justify-center items-center">
          <BigPlane />
        </div>

        <Card />
      </div>
    </section>
  );
}

export default Core;
