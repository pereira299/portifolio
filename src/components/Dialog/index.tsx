import Dialog from "@/types/dialog/dialog";
import { X } from "lucide-react";
import Button from "@/components/Button";

export default function Dialog(props: Dialog) {
  const { open, closeDialog, title, onConfirm, confirmText, children } = props;

  if (!open) return <></>;

  return (
    <dialog
      open={open}
      className="w-screen flex h-screen fixed backdrop-blur-lg bg-rhino-950/50 z-[100] top-0 left-0 bottom-0 right-0"
    >
      <section className="bg-gray-800 rounded-lg w-10/12 p-3 h-5/6 m-auto">
        <header className="flex flex-row justify-between">
          <h4 className="text-white text-3xl font-bold font-oxanium-bold">
            {title ?? ""}
          </h4>
          <button onClick={closeDialog}>
            <X size={40} className="text-white" />
          </button>
        </header>
        <main className={`px-5 min-h-[80%] w-full ${props.className ?? ""}`}>
          {children}
        </main>
        <footer className={`flex flex-row justify-end`}>
          {props.hasCancel && (
            <Button
              {...props}
              text={props.cancelText ?? "Cancelar"}
              className={`w-fit px-3 py-2 font-bold text-center text-sky-600 hover:text-white border-0`}
              onClick={closeDialog}
            />
          )}
          {props.hasConfirm && (
            <Button
              {...props}
              text={confirmText ?? "Confirmar"}
              className={`w-fit px-3 py-2 font-bold text-center text-sky-600 hover:text-white`}
              onClick={onConfirm}
            />
          )}
        </footer>
      </section>
    </dialog>
  );
}
