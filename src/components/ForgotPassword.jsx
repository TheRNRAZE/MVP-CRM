import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const nav = useNavigate()
    const pass1 = useRef()
    const pass2 = useRef()
    const location = useLocation();

    // Create a new URLSearchParams instance to parse the query string
    const queryParams = new URLSearchParams(location.search);

    // Extract the 'token' parameter
    const token = queryParams.get('token');
    const userId = queryParams.get('userId');

    const resetPass = async (e) => {
        e.preventDefault()
        const resetData = {
            token: token,
            userId: userId,
            password: pass1.current.value,
            confirmPassword: pass2.current.value
        }
        try {
            const response = await fetch('https://2f2d-62-217-156-173.ngrok-free.app/api/admin/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resetData),
            });

            if (response.ok) {
                nav("/login")
                console.log("Ugurlu")
            } else {
                const errorData = await response.json();
                console.error('Giriş sırasında bir hata oluştu:', errorData);
            }
        } catch (error) {
            console.error('Bağlantı hatası:', error);
        }
    }

    return (
        <>      
        <div className="parallax-wrapper">
            <div
                className="parallax-layer"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/1500x1000/3498db/ffffff?text=Layer+1")',
                    transform: "translateZ(-300px) scale(2)"
                }}
            />
            <div
                className="parallax-layer"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/1500x1000/2c3e50/ffffff?text=Layer+2")',
                    transform: "translateZ(-200px) scale(1.7)"
                }}
            />
            <div
                className="parallax-layer"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/1500x1000/34495e/ffffff?text=Layer+3")',
                    transform: "translateZ(-100px) scale(1.4)"
                }}
            />
        </div>
            <div className="login-container w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
                {/* Left side - Gmail login form */}
                <div className="resPass-form w-full lg:w-1/2 p-8 lg:p-12 bg-white bg-opacity-80 backdrop-blur-md">
                    <form id="ressPass" className="space-y-8" onSubmit={resetPass}>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                                Enter Your New Password
                            </h2>
                            <p className="text-gray-600 text-base lg:text-lg">
                                Safe and fast access with Lead2B
                            </p>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                placeholder=" "
                                className="input-field w-full px-4 py-3 lg:px-5 lg:py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
                                required
                                ref={pass1}
                            />
                            <label
                                htmlFor="email"
                                className="input-label absolute left-4 top-3 lg:left-5 lg:top-4 text-gray-500 text-base lg:text-lg transition-all duration-300 pointer-events-none"
                            >
                                New Password
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                id="password1"
                                placeholder=" "
                                className="input-field w-full px-4 py-3 lg:px-5 lg:py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
                                required
                                ref={pass2}

                            />
                            <label
                                htmlFor="password"
                                className="input-label absolute left-4 top-3 lg:left-5 lg:top-4 text-gray-500 text-base lg:text-lg transition-all duration-300 pointer-events-none"
                            >
                                Repeat New Password
                            </label>
                        </div>
                        <div>
                            <button
                                id="loginButton"
                                className="login-btn w-full text-white py-5 lg:py-4 rounded-lg text-lg lg:text-xl font-semibold relative overflow-hidden"
                                type="submit"
                            >
                                <span className="relative z-10">Reset</span>
                            </button>
                        </div>
                    </form>
                    <Link to={"/register"} >Register</Link>
                    <Link to={"/login"} >Login</Link>
                </div>
                {/* Right side - Lead2B Logo */}
                <div
                    className="logo-container w-full lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative"
                    style={{ minHeight: 300 }}
                >
                    <canvas id="logo-canvas" />
                    <div className="logo-content text-center p-8">
                        <h1 className="glow-text text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6">
                            Lead2B
                        </h1>
                        <p className="text-xl lg:text-2xl text-blue-100">Future's CRM solution</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgotPassword