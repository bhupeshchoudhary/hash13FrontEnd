import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronRight, Globe,BrainCircuit ,ShoppingCart  } from "lucide-react"

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Generative AI Certification Projects</h2>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-black px-3 py-1 text-2xl font-bold">Learn by
            <span className="text-[#ff0000] text-2xl font-bold"> Doing</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8v13H3V8" />
                <path d="M1 3h22v5H1z" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-muted-foreground">Industry Projects</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart  className="w-6 h-6" />
                  
                </div>
                <h3 className="text-xl font-bold">Create ShopAssist AI</h3>
                <p className="text-muted-foreground">
                  A conversational chatbot that provides shopping recommendations to users based on their preferences
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills learned</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">ChatGPT</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">GPT 3.5/4</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">+5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  {/* <Flask className="w-6 h-6" /> */}
                  <BrainCircuit className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold">Create PixxelCraft AI</h3>
                <p className="text-muted-foreground">
                  Enable and fast-track digitisation for online e-commerce businesses by generating high-quality images 
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills learned</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">GPT 3.5/4</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">OpenAI</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">+3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Create ShrewdNews AI</h3>
                <p className="text-muted-foreground">
                  Automate News Recommendation using ChatGPT 4 powered ML pipelines, generating high-quality images 
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills learned</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">GPT 3.5/4</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">OpenAI</span>
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm">+1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}