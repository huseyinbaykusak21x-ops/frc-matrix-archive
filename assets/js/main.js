document.addEventListener("DOMContentLoaded", () => {
  renderTeamCards();
});

function renderTeamCards() {
  const container = document.getElementById("teams-container");
  if (!container) return;

  container.innerHTML = frcTeamsData.map(team => `
    <div class="glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 relative flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center mb-4">
          <span class="text-xs font-mono tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            ${team.season}
          </span>
          <span class="text-xs font-mono text-slate-400">${team.teamNumber}</span>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-2 font-mono glow-text-green">${team.name}</h3>
        <p class="text-sm text-emerald-300/80 mb-4 font-mono">// ${team.tagline}</p>
        <p class="text-slate-300 text-sm mb-6 leading-relaxed font-sans">${team.description}</p>
        
        <!-- Quick Stats Bars -->
        <div class="space-y-3 mb-6 bg-black/60 p-4 rounded-xl border border-emerald-900/40 font-mono">
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-slate-400">Hız & Manevra</span>
              <span class="text-emerald-400 font-bold">${team.stats.speed}</span>
            </div>
            <div class="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full" style="width: ${team.stats.speed}"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-slate-400">Dayanıklılık</span>
              <span class="text-cyan-400 font-bold">${team.stats.durability}</span>
            </div>
            <div class="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-teal-600 to-cyan-400 h-full rounded-full" style="width: ${team.stats.durability}"></div>
            </div>
          </div>
        </div>

        <!-- Pros & Cons Summary -->
        <div class="grid grid-cols-1 gap-3 mb-4 text-xs font-mono">
          <div class="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-lg">
            <span class="font-bold text-emerald-400 block mb-1">[+] GÜÇLÜ YÖNLER:</span>
            <ul class="list-disc list-inside text-slate-300 space-y-1">
              ${team.pros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-rose-950/30 border border-rose-500/20 p-3 rounded-lg">
            <span class="font-bold text-rose-400 block mb-1">[-] GELİŞİME AÇIK:</span>
            <ul class="list-disc list-inside text-slate-300 space-y-1">
              ${team.cons.map(con => `<li>${con}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}