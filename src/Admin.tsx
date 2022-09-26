import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Input from "./shared/input";

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" />
        <Input id="description" label="Description" />
        <Input id="price" label="Price" />
        <Button type="submit" variant="primary">
          Save
        </Button>
      </form>
    </>
  );
}
