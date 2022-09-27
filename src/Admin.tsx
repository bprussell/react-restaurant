import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import Heading from "./shared/Heading";
import Input from "./shared/Input";

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" className="my-4" />
        <Input id="description" label="Description" className="my-4" />
        <Input id="price" label="Price" className="my-4" />
        <Button className="block mt-4" type="submit" variant="primary">
          Save
        </Button>
      </form>
    </>
  );
}
