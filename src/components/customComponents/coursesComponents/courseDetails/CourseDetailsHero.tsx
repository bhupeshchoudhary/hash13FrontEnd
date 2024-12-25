import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const CourseDetailHero = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="hero">
        <div className="container mx-auto md:p-6 sm:p-2 max-w-6xl sm:px-2 md:px-6 lg:px-8">
          <Card className="max-w-6xl mx-auto md:rounded-[32px] rounded-none lg:rounded-[32px] overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Right Column - Image */}
                <div className="relative overflow-hidden  md:rounded-[32px] md:rounded-l-[32px] md:w-[45%] order-first md:order-last">
                  <img
                    src="/assets/cources/course1.jpg"
                    alt="Professional business woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Left Column - Program Information */}
                <div className="flex-1 p-4 md:p-12">
                  {/* Title Section */}
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold leading-tight mb-2">
                      <span className="text-[#ff0000]">Job Oriented DevOps </span>
                      <br />
                      <span className="text-black">Globally Recognised Program</span>
                    </h1>
                    <div className="text-gray-600 text-sm font-bold leading-relaxed">
                      <ul className="space-y-2">
                        <li className="flex gap-3">
                          <span className="text-emerald-500 shrink-0">
                            <Star size={18} className="text-[#ff0000]" />
                          </span>
                          <span className="text-gray-900">
                            Curated by industry expert with over 22 years of experience, this 300+ hours Global DevOps Program covers tools & technologies like Kubernetes, Jenkins, Ansible, GIT n GITHub, Docker, etc. at Assured minimum package of ₹5 LPA with the LWs Job Placement Oriented Program
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-emerald-500 shrink-0">
                            <Star size={18} className="text-[#ff0000]" />
                          </span>
                          <span className="text-gray-900">Free 6 Months Internship Certificate</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-emerald-500 shrink-0">
                            <Star size={18} className="text-[#ff0000]" />
                          </span>
                          <span className="text-gray-900">10 Industry Level Projects</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-emerald-500 shrink-0">
                            <Star size={18} className="text-[#ff0000]" />
                          </span>
                          <span className="text-gray-900">
                            Placement Training Included Resume Building, LinkedIn Profile Building, Impressive GITHub Profile, Interview Preps, Soft Skills
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span
                      className="cursor-pointer animate-pulse"
                      onClick={() => {
                        location.href = "tel:+919772201449";
                      }}
                    >
                      For enquiries call: +91 9772201449
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CourseDetailHero;
