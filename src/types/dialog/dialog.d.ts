export default interface Dialog {
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
