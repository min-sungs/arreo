export interface TextModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export interface DialogModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export function isTextModal(props: TextModalProps) {
  return (
    props && typeof props.title === "string" && typeof props.content === "string" && typeof props.onClose === "function"
  );
}

export function isDialogModal(props: DialogModalProps) {
  return (
    props && typeof props.title === "string" && typeof props.content === "string" && typeof props.onClose === "function"
  );
}
