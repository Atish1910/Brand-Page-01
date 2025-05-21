import { useForm } from "react-hook-form";
import contact from "../public/img/contact.png";
const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((res) => setTimeout(res, 2000));
    alert(JSON.stringify(data));
    console.log(data);
    reset();
  }

  return (
    <>
      <section className="bg-white py-5">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-10  text-center mb-5">
              <h2 className="fw-bold display-4 text-dark">Contact Us</h2>
              <p>
                let’s connect: we’re here to help, and we’d love to hear from
                you! whether you have a question, comment, or just want to chat
                , you can reach out to us through the contact form of this page,
                or by phone, email, or social media.
              </p>
            </div>
            <div className="col-lg-6 p-5 border rounded-3 ">
              <div className="text-center mb-4">
                <button className="btn_c1 btn me-3">
                  <i class="bi bi-chat-left-text pe-3"></i>Via Support Chat
                </button>
                <button className="btn btn_c1">
                  <i class="bi bi-telephone-outbound pe-3"></i>Via Call
                </button>
                <button className="btn btn_c1 w-100 mt-4">
                  <i class="bi bi-envelope-check pe-3"></i>Via Email
                </button>
              </div>
              <div className=" text-center">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="position-relative">
                    <label className="label-01">Name</label>
                    <input
                      type="text"
                      className={
                        errors.name
                          ? "input-errors form-control mb-3 "
                          : " form-control mb-3 "
                      }
                      placeholder=""
                      {...register("name", {
                        required: "Enter Your Full Name",
                      })}
                    />
                  </div>
                  <div className="position-relative">
                    <label className="label-01">Phone No</label>
                    <input
                      type="text"
                      className={
                        errors.phone
                          ? "input-errors form-control mb-3 "
                          : " form-control mb-3 "
                      }
                      {...register("phone", {
                        required: "Enter Your 10 Digits Mobile Number",
                      })}
                    />
                  </div>
                  <div className="position-relative">
                    <label className="label-01">Email Id</label>
                    <input
                      type="text"
                      className={
                        errors.email
                          ? "input-errors form-control mb-3 "
                          : " form-control mb-3 "
                      }
                      {...register("email", {
                        required: "Enter Your mail Id",
                      })}
                    />
                  </div>

                  <button
                    className="btn btn_c1 px-5"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Please Wait" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={contact} className="img-001" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
