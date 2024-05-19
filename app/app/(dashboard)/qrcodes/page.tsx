"use client"

import { QRCodeCardComponent } from "@/components/CardComponents/QRCodeCardComponent";
import { QRCodeType } from "@/interfaces/types";
import { getLinks } from "@/lib/actions/getLinksAction";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import Loading from "./loading";

const dummyQRCodeData: QRCodeType[] = [
  {
      id: 1,
      title: "Exclusive Product Launch Event",
      shortLink: "qr-shortlink-1",
      longLink: "https://example.com/longlink-1",
      scans: 128,
      dateCreated: new Date("2024-04-30T08:00:00")
  },
  {
      id: 2,
      title: "Limited Time Offer: 50% Discount",
      shortLink: "qr-shortlink-2",
      longLink: "https://example.com/longlink-2",
      scans: 75,
      dateCreated: new Date("2024-03-29T12:30:00")
  },
  {
      id: 3,
      title: "Free Webinar on Digital Marketing Trends",
      shortLink: "qr-shortlink-3",
      longLink: "https://example.com/longlink-3",
      scans: 250,
      dateCreated: new Date("2024-02-28T15:45:00")
  },
  {
      id: 4,
      title: "New Feature Showcase: Mobile App",
      shortLink: "qr-shortlink-4",
      longLink: "https://example.com/longlink-4",
      scans: 390,
      dateCreated: new Date("2024-01-27T11:20:00")
  },
  {
      id: 5,
      title: "Exclusive Customer Rewards Program",
      shortLink: "qr-shortlink-5",
      longLink: "https://example.com/longlink-5",
      scans: 563,
      dateCreated: new Date("2023-12-26T09:10:00")
  },
  {
      id: 6,
      title: "Launch of New Product Line",
      shortLink: "qr-shortlink-6",
      longLink: "https://example.com/longlink-6",
      scans: 197,
      dateCreated: new Date("2023-11-25T14:00:00")
  },
  {
      id: 7,
      title: "Customer Feedback Survey",
      shortLink: "qr-shortlink-7",
      longLink: "https://example.com/longlink-7",
      scans: 821,
      dateCreated: new Date("2023-10-24T10:05:00")
  },
  {
      id: 8,
      title: "Special Holiday Season Offer",
      shortLink: "qr-shortlink-8",
      longLink: "https://example.com/longlink-8",
      scans: 632,
      dateCreated: new Date("2023-09-23T13:40:00")
  },
  {
      id: 9,
      title: "Product Launch Giveaway",
      shortLink: "qr-shortlink-9",
      longLink: "https://example.com/longlink-9",
      scans: 448,
      dateCreated: new Date("2023-08-22T16:55:00")
  },
  {
      id: 10,
      title: "Year-End Clearance Sale",
      shortLink: "qr-shortlink-10",
      longLink: "https://example.com/longlink-10",
      scans: 914,
      dateCreated: new Date("2023-07-21T08:30:00")
  }
];
  
export default function QRCodePage(){

    const [loading,setLoading] = useState(false);
    const [links,setLinks] = useState<any>([])

    useEffect(()=>{
        setLoading(true)
        getLinks().then((res)=>{
            const linkList = res.links;
            setLinks(linkList)
            setLoading(false)
        })
    },[])

    return <div className="pr-6 pl-4 md:pl-8 pt-8">
    <Label className="text-3xl font-bold">QR Codes</Label>
    {loading?<Loading/>:<div>{links.map((qr:any)=><QRCodeCardComponent key={qr.id} qrcode={qr}/>)}</div>}
    </div>
}