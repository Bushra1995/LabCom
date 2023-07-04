import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        role: "",
    });
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);
    const passErrorRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Password validation
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
            if (!passwordRegex.test(passwordInputRef.current.value)) {
                passwordInputRef.current.classList.add("input-error");
                passErrorRef.current.textContent =
                    "Password should have at least 8 characters with at least 1 number, uppercase, and special characters.";
                return;
            } else {
                passwordInputRef.current.classList.remove("input-error");
                passErrorRef.current.textContent = "";
            }

            const response = await fetch("http://localhost:4000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                // Store the token in localStorage
                localStorage.setItem("token", data.token);
                // navigate("/");
                if (formData.role === "laboratory") {
                    navigate("/labProfile"); // Redirect to laboratory profile page
                } else if (formData.role === "patient") {
                    navigate("/"); // Redirect to patient profile page
                } else {
                    navigate("/"); // Default redirection to home page
                }

                // Handle the response data as needed
                console.log(data);
            } else if (response.status === 409) {
                setShowAlert(true);
                passErrorRef.current.textContent =
                    "The email address is already in use.";
            } else {
                setShowAlert(true);
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const handleChange = (e) => {
        // if (e.target.name === "email" && showAlert) {
        //     setShowAlert(false);
        // }

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
            {/* url('/img/hero-pattern.svg') */}
            <div className="flex min-h-screen bg-white">
                <div
                    className="w-1/2 bg-cover md:block hidden"
                    style={{
                        backgroundImage:
                            "url(https://scitechdaily.com/images/DNA-Functions-Concept.jpg)",
                    }}
                />
                <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
                    <div className="text-left p-0 font-sans">
                        <h1 className="text-gray-800 text-3xl font-medium text-center">
                            Create an account for free
                        </h1>
                        <br />
                        <h1 className="text-gray-800 text-2xl font-medium text-center">
                            Choose a type of account
                        </h1>
                        <div className="flex justify-center mt-5">
                            <label htmlFor="laboratory" className="mr-4">
                                <input
                                    type="radio"
                                    id="laboratory"
                                    name="role"
                                    value="laboratory"
                                    checked={formData.role === "laboratory"}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Laboratory</span>
                            </label>
                            <label htmlFor="patient" className="ml-4">
                                <input
                                    type="radio"
                                    id="patient"
                                    name="role"
                                    value="patient"
                                    checked={formData.role === "patient"}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Patient</span>
                            </label>
                        </div>
                    </div>
                    <form action="#" className="p-0" onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mt-5">
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="mt-5">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mt-5">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mt-5">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                ref={passwordInputRef}
                                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                                placeholder="Password"
                            />
                            <div ref={passErrorRef} className="text-red-500 mt-2"></div>
                        </div>
                        <div className="mt-10">
                            <input
                                type="submit"
                                value="Sign up"
                                className="py-3 text-white w-full rounded hover:bg-green-600 text-center cursor-pointer"
                                style={{ backgroundColor: "#252B3F" }}
                            />
                        </div>
                    </form>
                    <Link to="/SignIn">
                        <span className="block  p-5 text-center text-gray-800  text-l ">
                            Already have an account ?
                            <span className="text-l text-blue-600 "> Login</span>
                        </span>
                    </Link>

                    {showAlert && (
                        <div className="mt-4 p-4 bg-red-200 text-red-800 rounded">
                            The email address is already in use.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
