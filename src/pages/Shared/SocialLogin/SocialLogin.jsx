import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
      fetch("https://bistro-boss-server-self-nine.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full flex justify-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn flex gap-3 btn-outline"
        >
          <FaGoogle></FaGoogle>
          <span>Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
