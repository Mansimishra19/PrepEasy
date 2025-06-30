export default function HelpPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Help & Support</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">AI Support (Coming Soon)</h2>
        <p className="mb-2">Chat with our AI assistant for instant help and guidance. (Feature coming soon!)</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>If you need further assistance, email us at <a href="mailto:support@prepwise.com" className="text-blue-600 underline">support@prepwise.com</a>.</p>
      </div>
    </div>
  );
} 