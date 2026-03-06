/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import DesignV1 from "./DesignV1";
import DesignV2 from "./DesignV2";
import { Layout, Palette } from "lucide-react";

export default function App() {
  const [version, setVersion] = useState<"v1" | "v2">("v2");

  return (
    <div className="relative">
      {/* Design Version Toggle */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 rounded-2xl shadow-2xl flex flex-col gap-1">
          <button 
            onClick={() => setVersion("v1")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              version === "v1" 
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" 
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            Diseño Original
          </button>
          <button 
            onClick={() => setVersion("v2")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              version === "v2" 
                ? "bg-white text-black shadow-lg shadow-white/20" 
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            Diseño Basedash (Nuevo)
          </button>
        </div>
        <p className="text-[10px] text-zinc-500 text-center font-medium bg-black/40 backdrop-blur-sm py-1 rounded-full border border-white/5">
          Cambia de diseño para comparar
        </p>
      </div>

      {/* Render selected version */}
      {version === "v1" ? <DesignV1 /> : <DesignV2 />}
    </div>
  );
}
