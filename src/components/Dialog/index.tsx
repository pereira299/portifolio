import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  closeDialog: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  hasConfirm?: boolean;
  className?: string;
  hasCancel?: boolean;
  cancelText?: string;
  cancelClass?: string;
  confirmClass?: string;
}

//set default props
Dialog.defaultProps = {
  hasConfirm: false,
  confirmText: "Confirmar",
  onConfirm: () => {},
  hasCancel: false,
  cancelText: "Cancelar",
  title: "",
};

export default function Dialog({
  open,
  closeDialog,
  title,
  onConfirm,
  confirmText,
  children,
  ...props
}: DialogProps) {
  if(!open) return (<></>)

  return (
    <dialog
      open={open}
      className="w-screen flex h-screen fixed backdrop-blur-lg bg-rhino-950/50 z-[100] top-0 left-0 bottom-0 right-0"
    >
      <section className="bg-gray-800 rounded-lg w-10/12 p-3 h-5/6 m-auto">
        <header className="flex flex-row justify-between">
          <h4 className="text-white text-3xl font-bold font-oxanium-bold">
            {title}
          </h4>
          <button onClick={closeDialog}>
            <X size={40} className="text-white" />
          </button>
        </header>
        <main className={`px-5 min-h-[80%] w-full ${props.className ?? ''}`}>{children}</main>
        <footer className={`flex flex-row justify-end`}>
          {props.hasCancel && (
            <button
              onClick={closeDialog}
              className={`w-fit px-3 py-2 font-bold text-center text-sky-600 hover:text-white`}
            >
              Fechar
            </button>
          )}
          {props.hasConfirm && (
            <button
              onClick={onConfirm}
              className={`w-fit px-3 py-2 font-bold text-center rounded-lg text-sky-600 hover:text-white hover:border-white border-2 border-sky-600`}
            >
              {confirmText}
            </button>
          )}
        </footer>
      </section>
    </dialog>
  );
}
