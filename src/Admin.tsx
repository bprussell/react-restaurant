import Heading from "./shared/Heading";
import Input from "./shared/input";

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" />
      </form>
    </>
  );
}
