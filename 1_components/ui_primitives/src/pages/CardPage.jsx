import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from "../components/Card";
// import image1 from "../assets/watch.jpg";
// import image2 from "../assets/watch-2.jpg";

function CardPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-start gap-6">
      {/* Example 1: Standard Card */}
      <Card className="w-80 border-red-900 border-4">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            This is a standard card demonstrating the compound pattern. It's
            clean, readable, and highly modular.
          </p>
        </CardBody>
        <CardFooter className="justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </CardFooter>
      </Card>
      {/* Example 2: Minimal Card without Header/Footer */}
      <Card className="w-80">
        <CardBody className="text-center">
          <div className="text-4xl mb-4">🚀</div>
          <CardTitle className="mb-2">Quick Launch</CardTitle>
          <p className="text-sm">
            Sometimes you don't need a header or a footer. Just pure content.
          </p>
        </CardBody>
      </Card>
      {/* Example 2: Minimal Card without Header/Footer */}
      <Card className="w-100">
        <CardHeader>
          <CardTitle className="text-red-600">Simple Card</CardTitle>
        </CardHeader>
        <CardBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          explicabo quia beatae libero magnam minus vero, culpa deserunt tempora
          animi illum obcaecati, deleniti voluptatibus qui facilis. Architecto
          minus nobis necessitatibus.
        </CardBody>
      </Card>
    </div>
  );
}

export default CardPage;
