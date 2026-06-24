import Modal from "../components/Modal";
import { useState } from "react";

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-10 text-center">
      <div>
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          React + Tailwind Modal
        </h1>
        <button
          className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome Back!"
      >
        <p className="mb-6">
          This is the internal content of your reusable modal. You can pass
          text, images, or even other components here.
        </p>
        <div className="flex justify-end">
          <button
            className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
            onClick={() => setIsModalOpen(false)}
          >
            Got it
          </button>
        </div>
      </Modal>
    </div>
  );
  //   const [isOpen, setIsOpen] = useState(false);

  //   return (
  //     <div className="m-5">
  //       <button
  //         onClick={() => setIsOpen(true)}
  //         className="bg-green-500 px-6 py-4 border border-gray-50 rounded-xl"
  //       >
  //         Open Modal
  //       </button>
  //       <Modal
  //         title="User Modal"
  //         isOpen={isOpen}
  //         onClose={() => setIsOpen(false)}
  //       >
  //         <h2>Reusable Modal</h2>
  //         <p>
  //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos
  //           fugit accusantium omnis sequi exercitationem nulla, ex reprehenderit
  //           debitis suscipit delectus ea eum praesentium non? Rerum sed quia
  //           beatae eaque!
  //         </p>
  //       </Modal>
  //     </div>
  //   );
}

export default ModalPage;
