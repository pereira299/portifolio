export default interface Button extends React.HTMLAttributes<HTMLButtonElement>{
  text: string;
  link?: string;
  className?: string;
  variant: "contained" | "outlined" | "text";
}
