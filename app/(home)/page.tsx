import Link from "next/link";
import { ArrowRight, HouseHeart, HandHeart, BarChart3, Fingerprint } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      {/* Ornamen Background Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <HouseHeart size={600} className="absolute -top-20 -right-20 rotate-12" />
        <HouseHeart size={400} className="absolute -bottom-20 -left-20 -rotate-12" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        {/* Label Unik */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Portal Edukasi Donatur
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6">
          Satu Pintu Menuju <br />
          <span className="text-emerald-600">Kebaikan Berkelanjutan.</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Pelajari bagaimana <strong>NurimanPay</strong> mentransformasi donasi konvensional 
          menjadi aksi nyata yang transparan, mudah, dan otomatis untuk Masjid Nurul Iman.
        </p>

        {/* CTA yang Lebih Bold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/docs"
            className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-emerald-600 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] active:scale-95"
          >
            <span className="flex items-center gap-3">
              Jelajahi Dokumentasi
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
          
          <a
            href="https://nuriman-fe.vercel.app"
            className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
          >
            Coba Berdonasi Sekarang
          </a>
        </div>

        {/* Grid Fitur dengan Desain Berbeda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          
          {/* Card: Kemudahan */}
          <div className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <HandHeart size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Donasi Tanpa Sekat</h3>
            <p className="text-slate-600 leading-relaxed">
              Dukungan penuh integrasi Midtrans. Bayar pakai QRIS, E-Wallet, hingga transfer bank tanpa perlu kirim bukti struk.
            </p>
          </div>

          {/* Card: Transparansi */}
          <div className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Laporan Real-Time</h3>
            <p className="text-slate-600 leading-relaxed">
              Setiap rupiah yang masuk tercatat di sistem. Pantau penyaluran dana untuk fakir miskin dan renovasi secara terbuka.
            </p>
          </div>

          {/* Card: Keamanan */}
          <div className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Fingerprint size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Amanah & Terenkripsi</h3>
            <p className="text-slate-600 leading-relaxed">
              Keamanan data donatur adalah prioritas. Kami menjaga privasi dan keamanan transaksi dengan protokol tingkat tinggi.
            </p>
          </div>

        </div>

        {/* Footer Kecil */}
        <p className="mt-20 text-slate-400 text-sm font-medium">
          Dikelola dengan penuh amanah oleh Tim Remaja Masjid Nurul Iman
        </p>
      </div>
    </main>
  );
}