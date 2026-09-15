import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { veterinaryCategories } from "@/data/products";
export const metadata: Metadata = { title: "Veterinary Instruments", description: "Veterinary instruments for livestock management, surgery, reproduction, and care." };
export default function VeterinaryPage() { return <CategoryLanding group="veterinary" categories={veterinaryCategories}/>; }
