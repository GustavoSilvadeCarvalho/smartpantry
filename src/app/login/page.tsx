import LoginForm from "@/components/loginForm";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <LoginForm />
            </div>
        </div>
    );
}
