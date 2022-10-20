import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: 1, labele: "React" },
    { value: 2, labele: "anglur" },
    { value: 3, labele: "vue" },
  ];

  return (
    <div className=" d-flex justify-content-around">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              minLength: 6,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className=" text-danger"> email is required </p>
          )}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: true,
            })}
          />

          {errors?.Password?.type === "required" && (
            <p className=" text-danger"> password is required </p>
          )}
        </Form.Group>
        <Select className=" text-black " options={options}isMulti />

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
        <p>I don't have account </p> 
         <button><Link to="/Registration">Register </Link></button>
      </Form>
    </div>
  );
};
export default SignIn;
