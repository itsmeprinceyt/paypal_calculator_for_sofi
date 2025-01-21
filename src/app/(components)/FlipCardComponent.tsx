import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

const FlipCardComponent = () => {
    return (
        <section className="py-16 mx-auto sm:py-20">
            <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                        Services
                    </h2>
                    <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
                        
                            <div  className="group h-96 w-96 [perspective:1000px]">
                                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front Face */}
                                    <div className="bg-red-600 absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                                        <div className="bg-purple-600">button</div>
                                        <p className="md:my-6 text-2xl">ss</p>
                                    </div>
                                    {/* Back Face */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col items-center justify-center">
                                            <h2 className="text-2xl font-bold mb-4"></h2>
                                            
                                            <a href="tel:555-555-5555" className="inline-flex">
                                                <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                                    <span>Schedule Service</span>
                                                    <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlipCardComponent;