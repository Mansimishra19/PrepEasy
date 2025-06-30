import { getCurrentUser } from "@/lib/actions/auth.action";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-2">
        <span className="font-semibold">Username:</span> {user?.name || "-"}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Email:</span> {user?.email || "-"}
      </div>
      {/* Add more profile fields as needed */}
      <div className="mt-6">
        <button className="btn-primary" disabled>Edit Profile (Coming Soon)</button>
      </div>
    </div>
  );
} 