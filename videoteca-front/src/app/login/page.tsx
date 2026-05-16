"use client";
import { useState } from "react";
import Link from "next/link";
import { Film, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const ROLES = [
  { id: "aluno", label: "Aluno", href: "/aluno" },
  { id: "professor", label: "Professor", href: "/professor" },
  { id: "funcionario", label: "Funcionário", href: "/funcionario" },
] as const;

export default function LoginPage() {
  const [role, setRole] = useState<"aluno" | "professor" | "funcionario">("aluno");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    window.location.href = ROLES.find(r => r.id === role)?.href ?? "/aluno";
  }

  const fieldLabel = role === "professor" ? "Matrícula ou SIAPE" : role === "funcionario" ? "Login" : "Matrícula";

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-[#003A70] via-[#0052A0] to-[#0066B3]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E7472E]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        {/* Film strip decoration */}
        <div className="absolute top-0 right-0 w-32 h-full opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-16 border border-white mx-4 mb-2 rounded" />
          ))}
        </div>
      </div>

      <div className="w-full max-w-sm relative">
        {/* Back */}
        <Link href="/" className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Início
        </Link>

        {/* Card glassmorphism */}
        <div className="glass rounded-[24px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0066B3] rounded-[18px] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Film className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Videoteca Unifor</h1>
            <p className="text-sm text-white/60 mt-1">Entre para acessar o sistema</p>
          </div>

          {/* Role selector */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Perfil de acesso</p>
            <div className="grid grid-cols-3 gap-1.5 bg-white/10 rounded-[12px] p-1">
              {ROLES.map(r => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`py-2 px-3 rounded-[10px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                    role === r.id
                      ? "bg-white text-[#0066B3] shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-pressed={role === r.id}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="matricula" className="block text-sm font-medium text-white/80 mb-1.5">
                {fieldLabel}
              </label>
              <input
                id="matricula"
                type="text"
                required
                autoComplete="username"
                placeholder={role === "aluno" ? "Ex: 2024001234" : role === "professor" ? "Ex: 202400123" : "Ex: func.videoteca"}
                className="w-full h-11 bg-white/10 border border-white/20 rounded-[10px] px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-white/80 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full h-11 bg-white/10 border border-white/20 rounded-[10px] px-3 pr-10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-300 bg-red-500/20 rounded-[8px] px-3 py-2" role="alert">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-white text-[#0066B3] font-semibold text-sm rounded-[10px] hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Entrando...
                </>
              ) : "Entrar"}
            </button>

            <div className="text-center">
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Esqueci minha senha
              </Link>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-white/30 mt-6">
          Universidade de Fortaleza · Sistema de Gestão da Videoteca
        </p>
      </div>
    </div>
  );
}
