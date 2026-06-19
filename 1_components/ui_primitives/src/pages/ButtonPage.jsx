import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="p-4 m-5">
      {/* <Button text="Save" onClick={() => console.log("...Saving")} />
      <Button text="Submit" onClick={() => console.log("...Submitting")} />
      <Button text="Delete" onClick={() => console.log("...Deleting")} /> 
        <Button
        onClick={() => console.log("...Deleting")}
        style={{ backgroundColor: "red" }}
      >*/}
      <Button onClick={() => console.log("...Saving")} disabled>
        Save
      </Button>
      <Button
        onClick={() => console.log("...Submitting")}
        style={{ backgroundColor: "green" }}
      >
        Submit
      </Button>
      <Button onClick={() => console.log("...Deleting")} className="bg-red-500">
        Delete
      </Button>
    </div>
  );
}

export default ButtonPage;
