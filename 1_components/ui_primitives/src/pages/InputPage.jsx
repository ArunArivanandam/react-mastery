import Input from "../components/Input";

function InputPage() {
  return (
    <div className="flex flex-col max-w-xl">
      <Input type="text" placeholder="Enter name..." label="Name" />
      <Input type="email" placeholder="Enter email..." label="Email" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password..."
        className="border-amber-900 border-8"
        error="Password should have atleast 6 characters"
      />
    </div>
  );
}

export default InputPage;
