import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dmakrakis@live.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}${formData.message} (${formData.email})`;
  };
  return (
    <div className="flex flex-col items-center text-center md:text-left md:flex-row h-screen relative max-w-7xl px-10 justify-evenly mx-auto ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-200">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold">
          Feel free to reach out.{" "}
          <span className="decoration-[#4ade80]/50 underline">Lets talk</span>
        </h4>

        <div className="space-y-5">
          {/* <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#4ade80] h-7 w-7 animate pulse" />
            <p className="text-2xl">+306974206944</p>
          </div> */}

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#4ade80] h-7 w-7 animate pulse" />
            <p className="text-2xl">dmakrakis@live.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#4ade80] h-7 w-7 animate pulse" />
            <p className="text-2xl">Athens, Greece</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="rounded-md bg-[#4ade80]/80 font-bold text-black py-5 px-10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
