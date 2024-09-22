import { Link } from "react-router-dom";
import IMAGES from "../assets";

const UserProfile = () => {
  return (
    <div className="dark">
      <main className="relative flex w-full flex-col  gap-4 bg-gray-100 p-5 dark:bg-slate-900 lg:flex-row">
      <section className="left-0 top-20 h-fit w-full rounded-lg bg-white p-8 shadow-lg dark:bg-slate-950 lg:sticky lg:max-w-sm">
        <div className="mb-8">
          <h2 className="text-xl dark:text-slate-300">Profile</h2>
        </div>
        <div className="w-full ">
          <img
            src={IMAGES.image1}
            className="mx-auto max-h-32 max-w-32 rounded-full"
            alt=""
          />
          <div className="mb-4 mt-8 flex flex-col gap-2 px-4 font-medium dark:text-slate-200">
            <span className="w-fit">Full Name</span>
            <span className="w-fit">Address@email.com</span>
            <span className="w-fit">+91 9876543210</span>
            <Link className="text-lime-500">Edit</Link>
          </div>
        </div>
      </section>
      <section className="w-full rounded-lg bg-white p-8 shadow-lg dark:bg-slate-950">
        <div className="mb-8">
          <h2 className="text-xl dark:text-slate-300">Details</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 dark:text-slate-200 md:grid-cols-3">
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Height
            </h4>
            <p>175 cm</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Weight
            </h4>
            <p>75 kg</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">Age</h4>
            <p>29</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Gender
            </h4>
            <p>Male</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Fitness Goal
            </h4>
            <p>Lean Gain</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Occupation
            </h4>
            <p>Pro. Chef</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Sleeping Time
            </h4>
            <p>10:00pm to 06:00am</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Timing of Workout
            </h4>
            <p>05:00pm to 06:00pm</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              No. of days in week
            </h4>
            <p>6</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Any Medical Condition
            </h4>
            <p>No</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Any Injuries
            </h4>
            <p>No</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Vegetarian or Non Veg
            </h4>
            <p>Non Veg</p>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-xl dark:text-slate-300">Membership</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 dark:text-slate-200 md:grid-cols-2">
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Status
            </h4>
            <p>Active</p>
          </div>
          <div className="rounded-md bg-gray-100 px-8 py-4 shadow dark:bg-slate-900">
            <h4 className="text-sm text-slate-700 dark:text-slate-500">
              Expires on
            </h4>
            <p>4th July, 2024</p>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default UserProfile;
