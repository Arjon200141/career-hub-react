const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/src/assets/images/user.png" className="max-w-sm rounded-lg" />
                    <div className="mx-24">
                        <h1 className="text-6xl font-bold text-black">One Step <br />Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                        <p className="py-6 text-xl">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-[#9873FFFF] text-white font-bold text-xl px-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;