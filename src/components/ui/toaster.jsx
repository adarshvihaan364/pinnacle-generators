import { useToast } from "../../hooks/use-toast"; // ✅ ADD THIS

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map(({ id, title, description, open }) =>
        open ? (
          <div
            key={id}
            className="rounded-xl border border-white/10 bg-neutral-900 text-white p-4 shadow-2xl shadow-black/40 backdrop-blur-sm"
          >
            {title && (
              <div className="font-semibold text-sm mb-1">{title}</div>
            )}
            {description && (
              <div className="text-xs text-neutral-400">{description}</div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}