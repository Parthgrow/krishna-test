import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/Firebase";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
}

export default function Page() {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    alert("I am working");

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      // const repData = await response.json();
      //   console.log("response", response);
      //   console.log("repData", repData);
    } catch (error) {
      console.log(error);
    }

    // setFormValues({ username: "", email: "", password: "", confirmPass: "" });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          className="flex flex-col gap-5 p-5 border-2 border-neutral-300 w-[40vw]"
        >
          <input
            type="text"
            placeholder="enter the username"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="enter the email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="enter the password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="confirm the password"
            value={formValues.confirmPass}
            onChange={(e) =>
              setFormValues({ ...formValues, confirmPass: e.target.value })
            }
          />
          <button type="submit">Register</button>
        </form>
        <div>{JSON.stringify(formValues)}</div>
      </div>
    </div>
  );
}
