import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { equestrianCategories } from "@/data/products";
export const metadata: Metadata = { title: "Equestrian Equipment", description: "Premium equestrian equipment for riders and horse owners." };
export default function EquestrianPage() { return <CategoryLanding group="equestrian" categories={equestrianCategories}/>; }
