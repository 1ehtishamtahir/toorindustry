import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Browse and download our complete product catalogue featuring veterinary instruments and equestrian equipment.",
};

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
