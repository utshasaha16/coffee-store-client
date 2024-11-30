import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then((result) => {
            console.log(result.user);

            // update last logged in time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loggedInInfo = {email, lastSignInTime}

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-xl text-center font-bold mt-4">SignIn now!</h1>
                <form onSubmit={handleSignIn} className="card-body">
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
                        <button className="btn btn-primary">Signin</button>
                    </div>
                    <p>New to coffee drinker: <Link to='/signUp'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;