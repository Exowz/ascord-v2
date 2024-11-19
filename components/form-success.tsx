import { LucideProps, CheckCircle } from "lucide-react"; // Import the correct success-related icon

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle className="h-5 w-5" /> {/* Use a success-related icon */}
      <p>{message}</p>
    </div>
  );
};