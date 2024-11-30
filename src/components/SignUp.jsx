import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password }
    console.log(user);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result?.user?.metadata?.creationTime

          

        const newUser = { name, email, createdAt }
        // save new user info in database
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              Swal.fire({
                title: 'success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })


      })
      .catch((error) => {
        console.log('ERROR', error);
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h1 className="text-xl text-center font-bold mt-4">Signup now!</h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;