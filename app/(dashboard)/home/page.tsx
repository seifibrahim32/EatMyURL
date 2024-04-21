"use client"

import { Button } from "@/components/ui/button";
import { BarChart, LineChart, Link, Link2, QrCode, ScanLineIcon, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";



export default function HomePage() {
  const [progressValue,setProgressValue] = useState(33.33);
  
  const checkboxConfig: any = {
    first : true,
    second : false,
    third : false
  }

  const RadialBarConfig: any = {
    "--value": progressValue,
    "--size": "2rem",
    "--thickness": "5px",
  };

  return (
    <div className="pt-8 pl-4 w-full pr-4">
      <div>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold ml-6">
          Your connections platform
        </h1>
        <div className="flex justify-center mt-2 md:mt-0">
          <div className="flex drop-shadow-2  xl border-[0.5px] p-2 rounded-xl">
            <Sparkles />
            <h1 className="text-sm ml-3 mr-4">Get custom links</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  w-full h-fit md:h-36 rounded-xl mt-6 p-3">
        <div className="ml-2 flex-1 drop-shadow-xl border-[1px] p-2 rounded-xl">
          <div className="flex h-full">
            <div className="flex-1 flex justify-center items-center">
              <Link2 size="50px" />
            </div>
            <div className="flex-1 flex justify-center items-center flex-col py-2 md:py-0">
              <h1 className="font-bold text-sm text-center">Make it short</h1>
              <Button
                variant="outline"
                size="sm"
                className="text-sm mt-2 text-wrap"
              >
                Go to Links
              </Button>
            </div>
          </div>
        </div>
        <div className="ml-2 flex-1 drop-shadow-xl border-[1px] p-2 rounded-xl mt-2 md:mt-0">
          <div className="flex h-full">
            <div className="flex-1 flex justify-center items-center">
              <ScanLineIcon size="50px" />
            </div>
            <div className="flex-1 flex justify-center items-center flex-col py-2 md:py-0">
              <h1 className="font-bold text-sm text-center">Create QR Codes</h1>
              <Button
                variant="outline"
                size="sm"
                className="text-sm mt-2 text-wrap"
              >
                Go to QR
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 drop-shadow-xl border-[1px] p-2 rounded-xl ml-2 mt-2 md:mt-0">
          <div className="flex h-full">
            <div className="flex-1 flex justify-center items-center">
              <LineChart size="50px" />
            </div>
            <div className="flex-1 flex justify-center items-center flex-col py-2 md:py-0">
              <h1 className="font-bold text-sm">View Analytics</h1>
              <Button variant="outline" size="sm" className="text-sm mt-2">
                Go to Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="flex ml-6 mr-3 mt-6 flex-col md:flex-row">
        <div className="flex flex-col flex-1 shadow-md pt-4 pb-6 px-6 border-2 rounded-xl">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg md:text-xl">Getting Started with EatMyUrl</h1>
            <div className="flex">
              <h1>{progressValue}%</h1>
              <div
                className="radial-progress"
                style={RadialBarConfig}
                role="progressbar"
              ></div>
            </div>
          </div>


          <Accordion className="mt-3" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center"> 
              <input checked={checkboxConfig.first} type="checkbox" className="checkbox checkbox-success checkbox-sm pointer-events-none" />
                <h1 className="ml-2 line-through">Make a short link or QR Code</h1>
                </AccordionTrigger>
                <AccordionContent className="flex px-6">
                  <Button size='sm' className="py-3" variant='default'>
                    <Link/>
                    <h1 className="ml-1">Create a link</h1>
                    </Button>
                  <Button size='sm' variant='default' className="ml-2 py-3">
                    <QrCode/>
                    <h1 className="ml-1">Create a QR Code</h1>
                    </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center"> 
              <input checked={checkboxConfig.second} type="checkbox" className="checkbox checkbox-success checkbox-sm pointer-events-none " />
                <h1 className="ml-2">Click it, scan it, or share it.</h1>
                </AccordionTrigger>
                <AccordionContent className="flex px-6">
                  <Button size='sm' className="py-3" variant='default'>
                    <Link/>
                    <h1 className="ml-1">View your links</h1>
                    </Button>
                  <Button size='sm' variant='default' className="ml-2 py-3">
                    <QrCode/>
                    <h1 className="ml-1">View your QR codes</h1>
                    </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center"> 
              <input checked={checkboxConfig.third} type="checkbox" className="checkbox checkbox-success checkbox-sm pointer-events-none " />
                <h1 className="ml-2">Check out EatMyUrl Analytics</h1>
                </AccordionTrigger>
                <AccordionContent className="flex px-6">
                  <Button size='sm' className="py-3" variant='default'>
                    <BarChart/>
                    View Analytics
                    </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
        <div className="flex-1 border-2 rounded-xl p-4 shadow-md md:ml-12 mt-4 md:mt-0">
          <h1 className="font-bold text-xl">Replace “eurl.dev” with your brand.</h1>
          <h1 className="mt-3 text-gray-500">Get a custom domain to create links that represent you. Add your own short domain or choose a complimentary one when you upgrade.</h1>
          <Button className="mt-4" variant='destructive'>View our plans</Button>
      </div>
      </div>
    </div>
  );
}
