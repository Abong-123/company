const NAV = [["#tentang", "Tentang"], ["#armada", "Armada"], ["#layanan", "Layanan"], ["#proyek", "Proyek"], ["#kontak", "Kontak"]];

const STATS = [["25", "+", "Tahun beroperasi"], ["480", "+", "Unit armada"], ["32", "", "Site tambang dilayani"], ["98", "%", "Rata-rata ketersediaan unit"]];

const VALUES = [
  ["Keselamatan", "Prosedur K3 di setiap tahap kerja."],
  ["Keandalan", "Unit terawat, jadwal terjaga."],
  ["Integritas", "Transparan dalam harga dan kontrak."],
  ["Presisi", "Spesifikasi sesuai medan Anda."],
];

const ARMADA = [
  { nama: "Heavy Duty Dump Truck", img: "img/dumptruck.jpg", spek: [["Kapasitas", "100 – 220 ton"], ["Mesin", "Diesel 1.800 – 2.700 HP"], ["Aplikasi", "Hauling overburden & batubara"]] },
  { nama: "Hydraulic Excavator", img: "img/excavator.jpg", spek: [["Kelas", "50 – 400 ton"], ["Bucket", "3 – 22 m³"], ["Aplikasi", "Loading & penggalian"]] },
  { nama: "Water Tank Truck", img: "img/watertruck.jpg", spek: [["Kapasitas", "20.000 – 40.000 liter"], ["Sistem", "Spray bar & water cannon"], ["Aplikasi", "Pengendalian debu jalan hauling"]] },
  { nama: "Articulated Hauler", img: "img/hauler.jpg", spek: [["Kapasitas", "30 – 45 ton"], ["Penggerak", "6×6 all-wheel"], ["Aplikasi", "Medan lunak & berlumpur"]] },
];

const LAYANAN = [
  ["01", "Penjualan & Sewa", "Unit baru maupun bekas bersertifikat, kontrak sewa jangka pendek dan panjang."],
  ["02", "Perawatan Berkala", "Preventive maintenance, overhaul, dan perbaikan lapangan oleh teknisi bersertifikat."],
  ["03", "Suku Cadang", "Suku cadang asli dan pengganti berkualitas dengan stok di beberapa gudang regional."],
  ["04", "Operator & Pelatihan", "Penyediaan operator tersertifikasi dan pelatihan keselamatan operasi."],
];

const PROYEK = [
  { img: "img/proyek1.jpg", judul: "Tambang Batubara, Kutai Timur", info: "Penyediaan 60 unit dump truck 150 ton · 2019 – kini" },
  { img: "img/proyek2.jpg", judul: "Tambang Nikel, Sulawesi Tenggara", info: "Armada excavator & hauler, kontrak perawatan penuh · 2021 – kini" },
  { img: "img/proyek3.jpg", judul: "Tambang Emas, Kalimantan Barat", info: "Sewa armada & pelatihan operator · 2022 – 2025" },
];

const SERTIF = ["ISO 9001: Manajemen Mutu", "ISO 45001: K3", "ISO 14001: Lingkungan", "Teknisi Bersertifikat KTT"];

const slot = (src, cls = "") => `<div class="slot ${cls}"><img src="${src}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" onerror="this.remove()" /></div>`;
const $ = (id) => document.getElementById(id);

// Navigasi
const links = (c) => NAV.map(([h, l]) => `<a href="${h}" class="${c}">${l}</a>`).join("");
$("menu").innerHTML = links("text-slate-300 transition hover:text-gold-400");
$("mmenu").innerHTML = links("py-3 text-slate-300 border-b border-white/5");
$("burger").onclick = () => { $("mmenu").classList.toggle("hidden"); $("mmenu").classList.toggle("flex"); };
$("mmenu").onclick = () => { $("mmenu").classList.add("hidden"); $("mmenu").classList.remove("flex"); };
const onScroll = () => $("nav").classList.toggle("bg-ink-900/95", scrollY > 60) || $("nav").classList.toggle("backdrop-blur", scrollY > 60);
addEventListener("scroll", onScroll); onScroll();

// Konten
$("stats").innerHTML = STATS.map(([n, s, l]) => `<div class="px-4 text-center md:border-r md:border-white/10 last:border-0"><p class="font-serif text-4xl font-semibold text-white md:text-5xl"><span data-count="${n}">0</span>${s}</p><p class="mt-2 text-xs uppercase tracking-widest text-slate-400">${l}</p></div>`).join("");
$("values").innerHTML = VALUES.map(([t, d]) => `<div class="border-l-2 border-gold-500 pl-4"><h3 class="font-semibold text-white">${t}</h3><p class="mt-1 text-sm text-slate-400">${d}</p></div>`).join("");
$("armadaList").innerHTML = ARMADA.map(a => `
  <article class="reveal group border border-white/10 bg-ink-900">
    ${slot(a.img, "h-64 overflow-hidden")}
    <div class="p-7">
      <h3 class="font-serif text-2xl text-white">${a.nama}</h3>
      <dl class="mt-5 divide-y divide-white/10 text-sm">${a.spek.map(([k, v]) => `<div class="flex justify-between gap-4 py-2.5"><dt class="text-slate-500">${k}</dt><dd class="text-right text-slate-200">${v}</dd></div>`).join("")}</dl>
      <a href="#kontak" class="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-gold-500 hover:text-gold-400">Minta penawaran →</a>
    </div>
  </article>`).join("");
$("layananList").innerHTML = LAYANAN.map(([n, t, d]) => `<div class="reveal bg-ink-900 p-8 transition hover:bg-ink-800"><p class="font-serif text-3xl text-gold-500">${n}</p><h3 class="mt-4 text-lg font-semibold text-white">${t}</h3><p class="mt-3 text-sm leading-relaxed text-slate-400">${d}</p></div>`).join("");
$("proyekList").innerHTML = PROYEK.map(p => `<article class="reveal group">${slot(p.img, "aspect-[4/3] overflow-hidden")}<h3 class="mt-5 font-serif text-xl text-white">${p.judul}</h3><p class="mt-1 text-sm text-slate-400">${p.info}</p></article>`).join("");
$("sertif").innerHTML = SERTIF.map(s => `<div class="border border-white/10 bg-ink-800 p-5 text-sm font-medium text-slate-200"><span class="mb-2 block text-gold-500">✔</span>${s}</div>`).join("");
document.querySelector("select[name=minat]").innerHTML = ["Kebutuhan Anda", ...LAYANAN.map(l => l[1]), "Lainnya"].map(o => `<option>${o}</option>`).join("");
$("yr").textContent = new Date().getFullYear();

// Form: membuka aplikasi email (frontend saja)
$("form").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const body = `Nama: ${f.nama}\nPerusahaan: ${f.perusahaan}\nEmail: ${f.email}\nMinat: ${f.minat}\n\n${f.pesan}`;
  location.href = `mailto:sales@borneoheavy.example?subject=${encodeURIComponent("Permintaan Penawaran – " + f.nama)}&body=${encodeURIComponent(body)}`;
};

// Animasi muncul + hitung angka
const io = new IntersectionObserver((es) => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in"); io.unobserve(en.target);
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const co = new IntersectionObserver((es) => es.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, t0 = performance.now();
  const tick = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); co.unobserve(el);
}), { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach(el => co.observe(el));