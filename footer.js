document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-slate-900 w-full border-t border-slate-100">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h1 class="text-2xl text-slate-900 font-bold tracking-tight mb-4">
          <a href="index.html" class="flex items-center gap-2">
            <i class="bi bi-book-half text-[#8B4513]"></i>
            InkForge
          </a>
        </h1>
        <p class="para text-slate-500 text-sm leading-relaxed mt-2">
          We craft bold, original comic books and graphic novels — from concept to print. 
          Independent storytelling, stunning artwork, and collector-worthy editions 
          delivered to readers worldwide.
        </p>

        <div class="flex gap-4 mt-6 text-lg">
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          What We Do
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Comic Book Publishing</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Graphic Novel Production</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Cover Art & Illustration</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Print & Digital Distribution</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Quick Links
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="about.html" class="hover:text-[#8B4513] transition">About</a></li>
          <li><a href="comics.html" class="hover:text-[#8B4513] transition">Comics</a></li>
          <li><a href="shop.html" class="hover:text-[#8B4513] transition">Shop</a></li>
          <li><a href="contact.html" class="hover:text-[#8B4513] transition">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Our Studio
        </h3>

        <ul class="space-y-3 text-slate-500 text-sm font-medium">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-[#8B4513] mt-0.5"></i>
            <span>42 Ink Street, Artist District<br>Portland, OR 97201</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-[#8B4513]"></i>
            <span>+1 (555) 987-6543</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-[#8B4513]"></i>
            <span>hello@inkforgestudio.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-slate-100 py-6 text-center text-slate-400 text-sm px-4 font-medium">
    © ${new Date().getFullYear()} InkForge Studio. All Rights Reserved.
  </div>

</footer>
`;
});
