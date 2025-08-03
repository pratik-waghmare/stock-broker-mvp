const Button = ({ label, disabled }: { label: string; disabled: boolean }) => {
  return <button disabled={disabled} className="mt-4 px-3 py-2 w-full !bg-blue-500 text-white">{label}</button>;
};

export default Button;