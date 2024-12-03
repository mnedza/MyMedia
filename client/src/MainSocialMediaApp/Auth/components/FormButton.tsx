interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  type: "button" | "submit";
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default FormButton;
