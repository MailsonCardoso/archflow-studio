import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { motion } from "framer-motion";
import { Sparkles, User, Mail, Lock, ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  beforeLoad: () => {
    const token = localStorage.getItem("archflow_token");
    if (token) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "Criar Conta — ArchFlow Studio" },
      { name: "description", content: "Abra sua conta grátis no ArchFlow Studio." },
    ],
  }),
  component: Register,
});

function Register() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirmation) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (password !== passwordConfirmation) {
      toast.error("As senhas digitadas não são iguais.");
      return;
    }

    if (password.length < 8) {
      toast.error("A senha precisa ter no mínimo 8 caracteres.");
      return;
    }

    setIsSubmitting(true);
    try {
      await registerUser(name, email, password, passwordConfirmation);
      toast.success("Conta criada com sucesso! Bem-vindo ao ArchFlow.");
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      toast.error(err.message ?? "Erro ao criar conta. Verifique suas informações.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Coluna Esquerda - Mock Banner de Produto (Apenas visível em desktops) */}
      <div className="relative hidden w-1/2 overflow-hidden border-r border-border/40 bg-background lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Glow neon decorativo */}
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-glow">
              <Sparkles className="h-4 w-4 text-neon-foreground" />
            </div>
            <span className="font-display text-lg font-semibold tracking-wide">ArchFlow</span>
          </Link>
        </div>

        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground"
          >
            Sua jornada criativa começa <span className="text-gradient-neon">agora</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-muted-foreground"
          >
            Crie sua conta em menos de 1 minuto. Sem cartões de crédito, sem amarras. Teste o poder de desenhar em 2D com snap inteligente e ver em tempo real no 3D.
          </motion.p>
          
          {/* Card Benefícios */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-primary/20 bg-surface/40 p-5 backdrop-blur-md shadow-glow"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Plano Starter Inclui:</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">✔ Até 3 projetos ativos simultaneamente</li>
              <li className="flex items-center gap-2">✔ Biblioteca com centenas de mobiliários e materiais</li>
              <li className="flex items-center gap-2">✔ Visualização 3D e exportação em PNG</li>
            </ul>
          </motion.div>
        </div>

        <div className="relative z-10 text-xs text-muted-foreground">
          © 2026 ArchFlow Studio · Projete com elegância e facilidade
        </div>
      </div>

      {/* Coluna Direita - Formulário de Cadastro */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        {/* Glow de fundo para telas menores */}
        <div className="absolute inset-0 bg-gradient-hero opacity-30 lg:hidden" />
        <div className="absolute inset-0 bg-grid opacity-10 lg:hidden" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md space-y-6 rounded-2xl border border-border/60 bg-surface/40 p-8 backdrop-blur-xl shadow-elevated lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none"
        >
          {/* Logo móvel */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-2 lg:hidden">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow">
                <Sparkles className="h-4.5 w-4.5 text-neon-foreground" />
              </div>
              <span className="font-display text-md font-semibold tracking-wide">ArchFlow</span>
            </div>
            <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">Criar nova conta</h1>
            <p className="mt-1 text-xs text-muted-foreground">Registre-se e comece a projetar de forma inteligente.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Input Nome */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="h-10 w-full rounded-lg border border-border bg-input pl-10 pr-4 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            {/* Input Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="h-10 w-full rounded-lg border border-border bg-input pl-10 pr-4 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            {/* Input Senha */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Senha (mínimo 8 caracteres)</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-10 w-full rounded-lg border border-border bg-input pl-10 pr-10 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Input Confirmação de Senha */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Confirmar Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="••••••••"
                  className="h-10 w-full rounded-lg border border-border bg-input pl-10 pr-10 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gradient-neon text-sm font-semibold text-neon-foreground shadow-glow transition hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Criar conta grátis <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Link para o Login */}
          <div className="text-center text-xs text-muted-foreground lg:text-left">
            Já possui uma conta?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Fazer login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
