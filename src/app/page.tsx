import Link from "next/link";
import { ArrowUpRight, Award, Globe2, HeartHandshake, ShieldCheck, Truck } from "lucide-react";
import { equestrianCategories, products, veterinaryCategories } from "@/data/products";
import HeroSlider from "@/components/HeroSlider";
import AnimatedStats from "@/components/AnimatedStats";

const reasons = [
  { title: "Built to perform", text: "Precision instruments made for demanding field, clinic, and stable environments.", icon: ShieldCheck },
  { title: "Made in Sialkot", text: "Six decades of specialist manufacturing from the surgical instruments capital of the world.", icon: Award },
  { title: "Ready worldwide", text: "Export-ready packaging, reliable logistics, and responsive support for every order.", icon: Truck },
  { title: "Made around you", text: "OEM, private label, and custom development for distributors and professional brands.", icon: HeartHandshake },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);
  return <>
    <HeroSlider />
    <div className="ticker-band"><div className="ticker-track"><span>PRECISION INSTRUMENTS</span><b>•</b><span>MADE IN SIALKOT</span><b>•</b><span>GLOBAL PARTNERSHIPS</span><b>•</b><span>QUALITY ASSURED</span><b>•</b><span>EST. 1960</span><b>•</b><span>PRECISION INSTRUMENTS</span><b>•</b><span>MADE IN SIALKOT</span><b>•</b><span>GLOBAL PARTNERSHIPS</span><b>•</b><span>QUALITY ASSURED</span><b>•</b><span>EST. 1960</span><b>•</b></div></div>
    <AnimatedStats />
    <section className="section page-wrap intro-section"><div className="section-kicker">The Toor standard</div><div className="intro-grid"><h2>Made with the<br /><span>long view</span> in mind.</h2><div className="intro-copy"><p>For more than six decades, Toor Industries has combined skilled hands with dependable manufacturing to make instruments people can rely on.</p><Link href="/about" className="text-link">Discover our story <ArrowUpRight size={16} /></Link></div></div></section>
    <section className="section categories-section"><div className="page-wrap"><div className="section-heading"><div><div className="section-kicker">Explore the collection</div><h2>Two disciplines.<br /><span>One standard.</span></h2></div><p>Keep every category close at hand — from first browse to final specification.</p></div><div className="category-grid">
      <Link href="/products/veterinary" className="category-card category-vet"><div className="category-visual"><span className="visual-number">01</span><div className="visual-cross">+</div><div className="visual-orbit" /></div><div className="category-info"><div><span className="category-label">{veterinaryCategories.length} categories</span><h3>Veterinary<br />Instruments</h3></div><ArrowUpRight size={22} /></div><div className="category-tags">{veterinaryCategories.slice(0, 5).map((cat) => <span key={cat.slug}>{cat.name}</span>)}<span>+ more</span></div></Link>
      <Link href="/products/equestrian" className="category-card category-eq"><div className="category-visual"><span className="visual-number">02</span><div className="visual-horse">↗</div><div className="visual-orbit" /></div><div className="category-info"><div><span className="category-label">{equestrianCategories.length} categories</span><h3>Equestrian<br />Equipment</h3></div><ArrowUpRight size={22} /></div><div className="category-tags">{equestrianCategories.map((cat) => <span key={cat.slug}>{cat.name}</span>)}</div></Link>
    </div></div></section>
    <section className="section page-wrap featured-section"><div className="section-heading"><div><div className="section-kicker">Selected instruments</div><h2>Popular by<br /><span>professionals.</span></h2></div><Link href="/products" className="text-link">View all products <ArrowUpRight size={16} /></Link></div><div className="product-grid">{featuredProducts.map((product, index) => <Link key={product.slug} href={`/products/${product.group}/${product.categorySlug}/${product.slug}`} className="product-card"><div className={`product-art product-art-${index % 4}`}>{product.images[0] ? <img src={product.images[0]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <><span>{product.sku}</span><div className="instrument-mark" /></>}</div><div className="product-meta"><span>{product.sku}</span><h3>{product.name}</h3><small>View details <ArrowUpRight size={13} /></small></div></Link>)}</div></section>
    <section className="section promise-section"><div className="page-wrap"><div className="section-heading"><div><div className="section-kicker">Why Toor</div><h2>Quiet confidence.<br /><span>Every time.</span></h2></div><p>Quality is not a claim on our packaging. It is the habit behind every instrument.</p></div><div className="reason-grid">{reasons.map(({ title, text, icon: Icon }, i) => <div className="reason-card" key={title}><span className="reason-number">0{i + 1}</span><Icon size={24} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="closing-cta"><div className="page-wrap cta-inner"><div className="section-kicker">Start a conversation</div><h2>Let&apos;s make something<br /><em>dependable.</em></h2><p>Looking for a trusted manufacturing partner or a product for your market?</p><Link href="/contact" className="button button-light">Request a quote <ArrowUpRight size={17} /></Link></div></section>
  </>;
}
