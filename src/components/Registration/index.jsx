import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select"; 
function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      const options = [
        { value: '1', label: "Egypt" },
        { value: '2', label: "KSA" },
        { value: '3', label: "UE" },
      ];
    
      return (
        <div className=" d-flex justify-content-around">
           
          <Form onSubmit={handleSubmit(onSubmit)}>
             {/* firstname */}
          <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="first Name"
                placeholder="First name"
                {...register("firstName", {
                  required: true,  
                })}   />
                {errors?.firstName?.type==='required' &&
                ( <p className=" text-danger"> Name is required </p>)}
        
            </Form.Group>

            {/* lastname */}
            <Form.Group className="mb-3" controlId="formBasicEmail2">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="Last name"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                
                })}
              />
              {errors?.email?.type === "required" && (
                <p className=" text-danger"> Name is required </p>
              )}
          
            </Form.Group>


      {/* email */}         
            <Form.Group className="mb-3" controlId="formBasicEmail3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                  pattern:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className=" text-danger"> email is required </p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className=" text-danger"> email is not valid </p>
              )}
            </Form.Group>
     {/* password */}
            <Form.Group className="mb-3" controlId="formBasicPassword4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: true,
                  pattern:/((?=.*[A-Z])(?=.*[0-9]))/
                })}
              />
    
              {errors?.Password?.type === "required" && (
                <p className=" text-danger"> password is required </p>
              )}
                  {errors?.password?.type === "pattern" && (
                <p className=" text-danger"> Password must contain at least 1 uppercase  character and  at least 1 numeric character </p>
              )}
              
            </Form.Group>
     {/*confirm password */}

            <Form.Group className="mb-3" controlId="formBasicPassword5">
              <Form.Label>Enter Password again</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: true,
                })}
              />
    
              {errors?.Password?.type === "required" && (
                <p className=" text-danger"> password don't match</p>
              )}
            </Form.Group>
            <p>Country</p>
            <Select className=" text-black " options={options}isMulti />
    
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
            
          </Form>
        </div>
      );
  }
  export default Register;
  
