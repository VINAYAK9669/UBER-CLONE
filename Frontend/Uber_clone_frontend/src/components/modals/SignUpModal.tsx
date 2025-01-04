import React from "react";

interface SignUpModalProps {
  closeModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closeModal }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded p-2"
        />
        <button
          type="button"
          className="bg-black text-white rounded p-2"
          onClick={closeModal}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default SignUpModal;
